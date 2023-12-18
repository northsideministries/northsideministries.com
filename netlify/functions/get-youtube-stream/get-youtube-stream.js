const fetch = require('node-fetch')
const { parse } = require('node-html-parser')

const handler = async (event) => {
  try {
    const CHANNEL_ID = "UCe_GkbqZP_aMRksuFU_MHog"

    // https://stackoverflow.com/a/70026382
    const response = await fetch(`https://youtube.com/channel/${CHANNEL_ID}/live`)
    const text = await response.text()
    const html = parse(text)
    const canonicalURLTag = html.querySelector('link[rel=canonical]')
    const canonicalURL = canonicalURLTag.getAttribute('href')
    const isStreaming = canonicalURL.includes('/watch?v=')

    return {
      statusCode: 200,
      body: JSON.stringify({ status: isStreaming, url: canonicalURL }),
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
