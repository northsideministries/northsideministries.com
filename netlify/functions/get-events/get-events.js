const fetch = require('node-fetch')
const process = require('process')

// const firstDayOfWeek = () => {
//   const date = new Date()
//   const dayOfWeek = date.getDay(),
//       firstDayOfWeek = new Date(date),
//       diff = dayOfWeek >= 0 ?
//           dayOfWeek - 0 :
//           6 - dayOfWeek

//   firstDayOfWeek.setDate(date.getDate() - diff)
//   firstDayOfWeek.setHours(0,0,0,0)

//   return firstDayOfWeek
// }

// const lastDayOfWeek = () => {
//   const date = new Date()
//   const today = date.getDate()
//   const dayOfTheWeek = date.getDay()
//   const newDate = date.setDate(today - dayOfTheWeek + 6)
//   return new Date(newDate)
// }

// const firstDayOfMonth = (month) => {
//   const date = new Date()
//   date.setMonth(month)
//   date.setDate(1)
//   return date
// }

// const lastDayOfMonth = (month) => {
//   const date = new Date()
  
//   // rolls over to last day of previous month
//   date.setMonth(month + 1)
//   date.setDate(0)
//   date.setHours(23, 59, 59, 999)

//   return date
// }

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

// const getFirstDayFromRange = (range) => {
//   switch (range) {
//     case undefined:
//     case 'all':
//     case 'week':
//       return firstDayOfWeek()
//     case 'month':
//       return firstDayOfMonth((new Date()).getMonth())
//     case '1':
//     case '2':
//     case '3':
//     case '4':
//     case '5':
//     case '6':
//     case '7':
//     case '8':
//     case '9':
//     case '10':
//     case '11':
//       return firstDayOfMonth(parseInt(range))
//     default:
//       return firstDayOfWeek()
//   }
// }

// const getLastDayFromRange = (range) => {
//   switch (range) {
//     case undefined:
//     case 'all':
//       return undefined
//     case 'week':
//       return lastDayOfWeek()
//     case 'month':
//       return lastDayOfMonth((new Date()).getMonth())
//     case '1':
//     case '2':
//     case '3':
//     case '4':
//     case '5':
//     case '6':
//     case '7':
//     case '8':
//     case '9':
//     case '10':
//     case '11':
//       return lastDayOfMonth(parseInt(range))
//     default:
//       return undefined
//   }
// }

const handler = async function (event) {
  const { MS_APP_ID, MS_NBC_CALENDAR_ID, MS_CLIENT_ID, MS_CLIENT_SECRET, MS_USERNAME, MS_PASSWORD } = process.env
  // const { range } = event.queryStringParameters
  // const { range } = event.queryStringParameters
  const { month, year } = event.queryStringParameters

  const DEFAULT_COUNT = 100
  // let { count } = event.queryStringParameters
  // count = count || DEFAULT_COUNT

  const responseToken = await fetch(`https://login.microsoftonline.com/${MS_APP_ID}/oauth2/token`,
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: encodeParams({
      'grant_type': 'password',
      'client_id': MS_CLIENT_ID,
      'client_secret': MS_CLIENT_SECRET,
      'resource': 'https://graph.microsoft.com',
      'username': MS_USERNAME,
      'password': MS_PASSWORD,
      'scope': `api://${MS_CLIENT_ID}/WebCalendarScope`
    })
  }
  )
  
  const responseTokenBody = await responseToken.json()
  const accessToken = responseTokenBody.access_token
  
  // get all events ordered by date
  // query details: https://docs.microsoft.com/en-us/graph/query-parameters

  // const firstDay = getFirstDayFromRange(range)
  // const lastDay = getLastDayFromRange(range)
  const firstDay = new Date(Date.UTC(year, month, 1, 0, 0, 0, 0))
  const lastDay = new Date(Date.UTC(year, month, 1, 23, 59, 59, 999))
  lastDay.setUTCMonth(lastDay.getUTCMonth() + 1, 0)
  
  const filterParams = concatParams({
    '$orderby': 'start/dateTime',
    '$select': 'subject,bodyPreview,webLink,isAllDay,isCancelled,categories,isOnlineMeeting,onlineMeetingUrl,start,end,location,recurrence',
    '$filter': `start/dateTime ge '${firstDay.toISOString()}' ${lastDay !== undefined ? `and start/dateTime le '${lastDay.toISOString()}'` : ''}`,
    '$top': DEFAULT_COUNT
  })

  // console.info("[handler] grabbing calendar events...")
  
  const responseEventsList = await fetch(`https://graph.microsoft.com/beta/me/calendars/${MS_NBC_CALENDAR_ID}/events?${filterParams}`,
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
  
  // console.info("[handler] raw events:", responseEventsListBody)
  // console.info("[handler] events:", events)

  if (responseEventsListBody.error) {
    const error = responseEventsListBody.error
    return {
      statusCode: 500,
      body: JSON.stringify({ error })
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ events })
  }
}

module.exports = { handler }
