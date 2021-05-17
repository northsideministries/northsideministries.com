<template>
  <main>
    <Hero title="Events" :img="content.hero_image">
      {{ content.description }}
    </Hero>
    <div class="content">
      <h2 class="text-center mt-12">Upcoming Events</h2>
      <h5 class="font-bold mt-8">View events for</h5>

      <DropdownButton :label="selected_timeframe" class="mt-3 w-56" :expand="false" ref="timeframe_select">
        <ul class="timeframe-list flex flex-col mt-1 absolute right-0">
          <li
            v-for="timeframe in timeframe_options"
            :class="[selected_timeframe === timeframe ? 'selected' : '']"
            :key="timeframe"
            @click="select(timeframe)">
            {{ timeframe }}
          </li>
        </ul>
      </DropdownButton>

      <section class="mt-8 md:grid md:grid-cols-2 md:col-gap-4 md:row-gap-2">
        <Card v-for="event in limited_events" :key="event.title"
          :title="event.title"
          :subtitle="event.date"
          :img="event.img"
          :location="event.location"
          :time="event.time"
          :link="event.link">
            {{ event.desc }}
        </Card>
      </section>

      <div v-if="events.length > LIMIT_DEFAULT">
        <Button v-show="limit !== null" class="ml-auto mr-auto mt-8" icon="angle-down" iconColor="#2941A3" type="secondary" short @click.native="limit = null">SHOW MORE</Button>
        <Button v-show="limit === null" class="ml-auto mr-auto mt-8" icon="angle-up" iconColor="#2941A3" type="secondary" short @click.native="limit = LIMIT_DEFAULT">SHOW LESS</Button>
      </div>
    </div>
    <aside class="mt-16 bg-gray-100 md:bg-transparent px-6 pb-16 pt-10">
      <h2 class="text-center">Ladies' Bible Study</h2>
      
      <div class="md:max-w-md md:mx-auto">
        <img class="shadow-regular mt-6" :src="content.ladies_image" alt="Ladies' Bible Study"/>
        <p class="mt-8 leading-6">{{ content.ladies_description }}</p>
      </div>
    </aside>

    <SocialHead
      title="Events"
      :description="content.description"
      :image="content.hero_image"
    />
  </main>
</template>

<script>
import Button from '~/components/Button'
import Card from '~/components/Card'
import DropdownButton from '~/components/DropdownButton'
import Hero from '~/components/Hero'

export default {
  name: 'EventsPage',
  components: {
    Button,
    Card,
    DropdownButton,
    Hero
  },
  data() {
    return {
      selected_timeframe: 'This week',
      timeframe_options: ['This week', 'This month', 'All events'],

      LIMIT_DEFAULT: 3,
      limit: 3,

      // TODO: pull from Google Calendar
      events: [
        {
          title: 'Youth Activity',
          date: 'January 13, 2021',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere iaculis.',
          img: require('~/assets/img/hero/friends_priscilla-du-preez-unsplash.jpg'),
          location: 'Northside Baptist Church',
          time: '2:00 PM to 3:00 PM',
          link: '#'
        }
      ]
    }
  },
  computed: {
    limited_events(){
      return this.limit ? this.events.slice(0,this.limit) : this.events
    }
  },
  methods: {
    select(timeframe) {
      this.selected_timeframe = timeframe
      this.$refs.timeframe_select.close()
    }
  },
  head() {
    return {
      title: 'Events',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.content.description
        }
      ]
    }
  },
  async asyncData({ $content }) {
    const content = await $content('pages', 'events').fetch();
    
    return {
      content
    }
  }
}
</script>

<style lang="postcss" scoped>
.timeframe-list {
  & > li {
    &:first-child {
      @apply rounded-t-btn border-t-2;
    }

    &:last-child {
      @apply rounded-b-btn border-b-2;
    }

    @apply font-medium text-xl px-6 py-4 border-t border-b border-l-2 border-r-2 border-solid border-gray-400 bg-gray-100 cursor-pointer w-48;
    transition: all 0.1s;

    &.selected {
      @apply bg-gray-300 text-gray-600;
    }
  }
}
</style>