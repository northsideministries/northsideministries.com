const fetch = require('node-fetch')

const handler = async (event) => {
  try {
    const CHANNEL_ID = "UCe_GkbqZP_aMRksuFU_MHog"
    const { YOUTUBE_API_KEY } = process.env

    // TODO: change from search query to less expensive query
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&type=video&eventType=live&key=${YOUTUBE_API_KEY}`)
    const responseJson = await response.json()

    // return error code if needed
    if (response.status !== 200) {
      throw response.status
    }

    // if there are more than 0 results, then we are livestreaming
    // https://stackoverflow.com/questions/32454238/how-to-check-if-youtube-channel-is-streaming-live
    const results = responseJson?.pageInfo?.totalResults > 0
    const isStreaming = results === undefined ? 0 : results

    return {
      statusCode: 200,
      body: JSON.stringify({ status: isStreaming }),
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
