export function isMobile() {
  // eslint-disable-next-line no-undef
  if (process.browser) {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
      window.navigator.userAgent
    )
  }
}
