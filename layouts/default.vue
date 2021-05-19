<template>
  <div class="container">
    <!-- livestreaming notification; once clicked, don't show again -->
    <transition name="slide-down">
      <aside v-show="notification_enabled && live" class="flex flex-row justify-center py-4 px-6 rounded-btn bg-primary-600 live-notification shadow-tall fixed bottom-0 mb-4 z-10">
        <div class="flex-row items-center flex">
          <div class="hidden md:inline">
            <client-only>
              <unicon class="mr-2" name="rss" fill="white" width="30" height="30"></unicon>
            </client-only>
          </div>
          <span class="font-medium text-white tracking-wide">LIVE</span>
        </div>
        <NuxtLinkButton type="primary" class="ml-8 md:ml-16 watch-button" to="/watch" @click.native="disable">WATCH</NuxtLinkButton>
        <Button type="secondary" class="ml-3 dismiss-button" @click.native="disable">CLOSE</Button>
      </aside>
    </transition>

    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Button from '~/components/Button'
import NuxtLinkButton from '~/components/NuxtLinkButton'
import Header from '~/components/global/Header.vue'
import Footer from '~/components/global/Footer.vue'

export default {
  components: {
    Button,
    NuxtLinkButton,
    Header,
    Footer
  },
  data() {
    return {
      // TODO: get if livestreaming from YouTube/Vimeo
      live: true,
      notification_enabled: true
    }
  },
  methods: {
    disable() {
      this.notification_enabled = false;
    }
  },
  mounted() {
    this.$content('site', 'services').fetch()
      .then(res => this.notification_enabled = res.livestream)
  }
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