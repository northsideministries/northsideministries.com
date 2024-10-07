const fetch = require('node-fetch')
const process = require('process')

// https://stackoverflow.com/questions/35325370/how-do-i-post-a-x-www-form-urlencoded-request-using-fetch
const encodeParams = (details) => {
  let formBody = new Array();
  for (const property in details) {
    const encodedKey = encodeURIComponent(property)
    const encodedValue = encodeURIComponent(details[property])
    formBody.push(encodedKey + "=" + encodedValue)
  }
  formBody = formBody.join("&")
  return formBody
}

const concatParams = (details) => {
  let body = new Array()
  for (const property in details) {
    body.push(property + "=" + details[property])
  }
  body = body.join('&')
  return body
}

const handler = async function (event) {
  const { MS_APP_ID, MS_NBC_CALENDAR_ID, MS_CLIENT_ID, MS_CLIENT_SECRET, MS_USERNAME, MS_PASSWORD } = process.env
  const { month, year } = event.queryStringParameters

  const DEFAULT_COUNT = 100

  const responseToken = await fetch(`https://login.microsoftonline.com/${MS_APP_ID}/oauth2/v2.0/token`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: encodeParams({
        'grant_type': 'password',
        'client_id': MS_CLIENT_ID,
        'client_secret': MS_CLIENT_SECRET,
        'username': MS_USERNAME,
        'password': MS_PASSWORD,
        'scope': `api://${MS_CLIENT_ID}/WebCalendarScope`
      })
    }
  )

  const responseTokenBody = await responseToken.json()
  if (responseTokenBody.error) {
    console.error("[token error] " + responseTokenBody.error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "could not get events" })
    }
  }

  const accessToken = responseTokenBody.access_token

  // get all events ordered by date
  // query details: https://docs.microsoft.com/en-us/graph/query-parameters

  const firstDay = new Date(Date.UTC(year, month, 1, 0, 0, 0, 0))
  const lastDay = new Date(Date.UTC(year, month, 1, 23, 59, 59, 999))
  lastDay.setUTCMonth(lastDay.getUTCMonth() + 1, 0)

  const filterParams = concatParams({
    '$orderby': 'start/dateTime',
    '$select': 'subject,bodyPreview,webLink,isAllDay,isCancelled,categories,isOnlineMeeting,onlineMeetingUrl,start,end,location,recurrence',
    // '$filter': `start/dateTime ge '${firstDay.toISOString()}' ${lastDay !== undefined ? `and start/dateTime le '${lastDay.toISOString()}'` : ''}`,
    '$top': DEFAULT_COUNT
  })

  // const responseEventsList = await fetch(`https://graph.microsoft.com/beta/me/calendars/${MS_NBC_CALENDAR_ID}/events?${filterParams}`,
  const responseEventsList = await fetch(`https://graph.microsoft.com/beta/me/calendars/${MS_NBC_CALENDAR_ID}/calendarView?startDateTime=${firstDay.toISOString()}&endDateTime=${lastDay.toISOString()}&${filterParams}`,
    {
      method: 'GET',
      headers: {
        'Prefer': 'outlook.timezone="America/New_York"',
        'Authorization': `Bearer ${accessToken}`
      }
    }
  )

  const responseEventsListBody = await responseEventsList.json()
  const events = responseEventsListBody.value

  if (responseEventsListBody.error) {
    console.error("[events list error] " + responseEventsListBody.error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "could not get events" })
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ events })
  }
}

module.exports = { handler }
