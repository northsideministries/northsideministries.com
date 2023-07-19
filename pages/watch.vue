<template>
  <main class="mb-16">
    <div class="player shadow-tall md:rounded-2xl md:m-8">
      <div v-if="$store.state.live" class="w-full" role="presentation" aria-label="livestream">
        <iframe class="player-frame w-full md:rounded-2xl" src="https://www.youtube.com/embed/live_stream?channel=UCe_GkbqZP_aMRksuFU_MHog" frameborder="0" allowfullscreen></iframe>
      </div>
      <div
        v-else
        class="player-offline text-white pl-5 pr-12 pt-10 pb-12 md:flex md:flex-col md:items-center md:text-center md:justify-center md:-mt-4 md:px-16 md:py-32"
      >
        <client-only><unicon name="tv-retro-slash" fill="white" width="32" height="32"></unicon></client-only>
        <p class="text-xl mt-2 leading-6 md:mt-4 md:text-3xl md:leading-8">
          <span class="font-bold">We are currently offline.</span> You can watch our broadcast here when we're live.
        </p>
        <p class="text-sm mt-2 md:mt-4 md:text-base">
          <nuxt-link class="text-primary-300 underline" to="/contact">Check our Contact page</nuxt-link> for information about our service times.
        </p>
      </div>
    </div>

    <div class="content">
      <!-- <section class="max-w-sm mx-auto">
        <h2>Sunday School</h2>
        <p>Sunday School starts at 9:30am and is livestreamed through Zoom.</p>
        <LivestreamClassList />
      </section> -->

      <section>
        <h2>Past Messages and Videos</h2>

        <div class="grid grid-cols-1 col-gap-4 row-gap-4 md:grid-cols-2">
          <Card
            v-for="sermon in limited_sermons"
            :key="sermon.date"
            :title="sermon.title"
            :img="sermon.image"
            >
            <!-- :subtitle="sermon.title" -->
            <LinkButton
              :link="sermon.link"
              icon="external-link-alt"
              iconColor="#fff"
              type="primary"
              short
            >
              WATCH ON YOUTUBE
            </LinkButton>
          </Card>
        </div>

        <div v-if="sermonVideos.length > LIMIT_DEFAULT">
          <Button
            v-show="limit !== null"
            class="ml-auto mr-auto mt-8"
            icon="angle-down"
            iconColor="#2941A3"
            type="secondary"
            short
            @click.native="limit = null"
          >
            SHOW MORE
          </Button>
          <div
          v-show="limit === null"
          >
            <p class="text-center text-lg mt-8">For more videos, <a href="https://www.youtube.com/@NorthsideBaptistChurch29420/" class="text-primary-600 underline">visit our YouTube channel!</a></p>
            <Button
              v-show="limit === null"
              class="ml-auto mr-auto mt-8"
              icon="angle-up"
              iconColor="#2941A3"
              type="secondary"
              short
              @click.native="limit = LIMIT_DEFAULT"
            >
              SHOW LESS
            </Button>
          </div>
        </div>
      </section>
    </div>

    <SocialHead title="Watch" description="Watch our livestream online." />
  </main>
</template>

<script>
import { format } from 'path'
import Button from '~/components/Button.vue'
import Card from '~/components/Card.vue'
import LinkButton from '~/components/LinkButton.vue'
import LivestreamClassList from '~/components/LivestreamClassList.vue'

export default {
  name: 'WatchPage',
  components: {
    Button,
    Card,
    LinkButton,
    LivestreamClassList
  },
  data() {
    return {
      LIMIT_DEFAULT: 3,
      limit: 3,
      live: false,
      sermonVideos: []
    }
  },
  computed: {
    limited_sermons() {
      return this.limit ? this.formatted_sermons.slice(0, this.limit) : this.formatted_sermons
    },
    formatted_sermons() {
      const formattedSermons = new Array()

      this.sermonVideos.forEach(el => {
        const video = new Object()

        // PROBLEM: published date may not be actual date of livestream 

        const date = new Date(el.snippet.publishedAt)
        video.date = `${new Array('January','February','March','April','May','June','July','August','September','October','November','December')[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} (${date.getHours() < 12 ? 'AM' : 'PM'})`
        video.title = el.snippet.title
        video.link = `https://www.youtube.com/watch?v=${el.snippet.resourceId.videoId}`
        video.image = el.snippet.thumbnails?.medium.url || el.snippet.thumbnails.default.url

        formattedSermons.push(video)
      })

      return formattedSermons
    }
  },
  head() {
    return {
      title: 'Watch',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Watch our livestream online.'
        }
      ]
    }
  },
  mounted() {
    // cant be in asyncData since a computed prop (formatted_sermons) depends on sermonVideos
    fetch('/.netlify/functions/get-youtube-sermons')
      .then(res => res.json())
      .then(res => { console.log(res); this.sermonVideos = res.videos });
  },
  async asyncData({ $content }) {
    const content = await $content('site', 'services').fetch()

    return {
      content
    }
  }
}
</script>

<style lang="postcss" scoped>
.player {
  background: linear-gradient(#222, #000);
}

.player-frame {
  /* 16:9 aspect ratio for livestream player*/

  @media (max-width: 767px) {
    height: calc(100vw * (9/16));
  }

  @media (min-width: 768px) {
    height: calc(75vw * (9/16));
  }
}

.content > section {
  @apply mt-16;

  & > h2 {
    @apply font-normal text-center;
  }

  & > p {
    @apply my-6;
  }

  & > div {
    @apply mt-6;

    & > p {
      @apply mt-2;
    }

    & > a {
      @apply mt-2;
    }
  }
}
</style>
