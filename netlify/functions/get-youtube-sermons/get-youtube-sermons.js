const fetch = require('node-fetch')

const handler = async (event) => {
  try {
    // const CHANNEL_ID = 'UCe_GkbqZP_aMRksuFU_MHog'
    const UPLOADS_PLAYLIST_ID = 'UUe_GkbqZP_aMRksuFU_MHog'
    const { YOUTUBE_API_KEY } = process.env

    // use the built-in uploads playlist
    // https://stackoverflow.com/a/27872244
    const response = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=${UPLOADS_PLAYLIST_ID}&key=${YOUTUBE_API_KEY}`)
    const responseJson = await response.json()

    // return error code if needed
    if (response.status !== 200) {
      throw response.status
    }

    // https://stackoverflow.com/questions/18953499/youtube-api-to-fetch-all-videos-on-a-channel
    const results = responseJson?.items

    // filter for only sermons
    const sermonVideos = results.filter(video => video.snippet.title.toLowerCase().includes("service"))

    return {
      statusCode: 200,
      body: JSON.stringify({ videos: sermonVideos }),
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
