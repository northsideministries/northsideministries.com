export const state = () => ({
  hasPolledLivestream: false,
  hasPolledNotification: false,
  live: false,
  notification_enabled: true
})

export const mutations = {
  pollLivestream(state) {
    state.hasPolledLivestream = true
  },
  pollNotification(state) {
    state.hasPolledNotification = true
  },
  goLive(state) {
    state.live = true
  },
  disableNotification(state) {
    state.notification_enabled = false
  }
}
