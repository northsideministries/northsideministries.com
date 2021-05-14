<template>
  <main class="mb-16">
    <div class="player">
      <div v-if="sermon_live" class="player-live">

      </div>
      <div v-else class="player-offline h-64 text-white pl-5 pr-12 pt-10">
        <client-only>
          <unicon name="tv-retro-slash" fill="white" width="32" height="32"></unicon>
        </client-only>
        <p class="text-xl mt-2 leading-6"><span class="font-bold">We are currently offline.</span> You can watch our broadcast here when we're live.</p>
        <p class="text-sm mt-2"><nuxt-link class="text-primary-300 underline" to="/contact">Check our Contact page</nuxt-link> for information about our service times.</p>
      </div>

      <!-- TODO: add embed for livestream -->
    </div>

    <div class="content">
      <aside class="flex flex-row mt-4">
        <LinkButton :link="content.vimeo_stream" icon="tv-retro" iconColor="#2941A3" type="secondary" class="ml-auto" short>
          WATCH ON VIMEO
        </LinkButton>
      </aside>

      <section>
        <h2>Sunday School</h2>
        <p>Sunday School starts at 9:30am and is livestreamed through Zoom.</p>
        <LivestreamClassList />
      </section>

      <section>
        <h2>Past Messages</h2>

        <Card v-for="sermon in limited_sermons" :key="sermon.date"
          :title="sermon.date"
          :subtitle="''"
          :img="sermon.img">
            <LinkButton :link="sermon.link" icon="external-link-alt" iconColor="#2941A3" type="secondary" :disabled="true" short>
              WATCH ON YOUTUBE
            </LinkButton>
        </Card>
        
        <div v-if="sermons.length > LIMIT_DEFAULT">
          <Button v-show="limit !== null" class="ml-auto mr-auto mt-8" icon="angle-down" iconColor="#2941A3" type="secondary" short @click.native="limit = null">SHOW MORE</Button>
          <Button v-show="limit === null" class="ml-auto mr-auto mt-8" icon="angle-up" iconColor="#2941A3" type="secondary" short @click.native="limit = LIMIT_DEFAULT">SHOW LESS</Button>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
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

      // TODO: pull sermons from YouTube
      sermon_live: false,
      sermons: [{
        date: 'December 13, 2020',
        link: '#',
        img: require('~/assets/img/hero/friends_priscilla-du-preez-unsplash.jpg'),
      }]
    }
  },
  computed: {
    limited_sermons(){
      return this.limit ? this.sermons.slice(0,this.limit) : this.sermons
    }
  },
  async asyncData({ $content }) {
    const content = await $content('site', 'services').fetch();

    return {
      content
    }
  },
}
</script>

<style lang="postcss" scoped>
.player-offline {
  background: linear-gradient(#222, #000);
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