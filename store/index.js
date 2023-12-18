export const state = () => ({
  hasPolledLivestream: false,
  hasPolledNotification: false,
  live: false,
  liveURL: '',
  notification_enabled: true
})

export const mutations = {
  pollLivestream(state) {
    state.hasPolledLivestream = true
  },
  pollNotification(state) {
    state.hasPolledNotification = true
  },
  goLive(state, url) {
    state.live = true
    state.liveURL = url
  },
  disableNotification(state) {
    state.notification_enabled = false
  }
}
