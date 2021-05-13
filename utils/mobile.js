export function isMobile() {
  if (process.browser) {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
      window.navigator.userAgent
    )
  }
}
