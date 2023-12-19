<template>
  <div class="container max-w-full">
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import Button from '~/components/Button'
import NuxtLinkButton from '~/components/NuxtLinkButton'
import Header from '~/components/global/Header.vue'
import Footer from '~/components/global/Footer.vue'

export default {
  components: {
    Button,
    NuxtLinkButton,
    Header,
    Footer,
  },
  data() {
    return {}
  },
  methods: {
    ...mapMutations({
      pollLivestream: 'pollLivestream',
      pollNotification: 'pollNotification',
      goLive: 'goLive',
      disableNotification: 'disableNotification',
    }),
  },
  mounted() {
    // if not checked already, check if the livestream is live
    if (!this.$store.state.hasPolledLivestream) {
      fetch('/.netlify/functions/get-youtube-stream')
        .then((res) => res.json())
        .then((res) => {
          if (res.status) this.goLive(res.url)
          this.pollLivestream()
        })
    }

    // if not checked already, check if the livestream notification is disabled in the CMS
    if (!this.$store.state.hasPolledNotification) {
      this.$content('site', 'services')
        .fetch()
        .then((res) => {
          if (!res.livestream) this.disableNotification()
          this.pollNotification()
        })
    }
  },
}
</script>

<style lang="postcss" scoped>
.live-notification {
  /* centering for position: fixed */
  left: 50%;
  transform: translateX(-50%);
}

.live-notification > .watch-button::v-deep {
  @apply bg-white text-primary-600 font-bold;

  &:hover {
    @apply bg-gray-200;
  }

  &:active {
    @apply bg-gray-300;
  }
}

.live-notification > .dismiss-button::v-deep {
  @apply bg-white bg-opacity-0 text-white font-medium border-white text-sm;

  &:hover {
    @apply border-gray-200 bg-opacity-10;
  }

  &:active {
    @apply border-gray-300 bg-opacity-20;
  }
}
</style>
