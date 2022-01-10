<template>
  <main>
    <Hero title="Events" :img="content.hero_image">
      {{ content.description }}
    </Hero>
    <div class="px-6 mx-auto md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
      <h2 class="text-center mt-12">Upcoming Events</h2>
      <h5 class="font-bold mt-8">View events for</h5>

      <DropdownButton :label="timeframe_options[selected_timeframe_index].desc" class="mt-3 w-56" :expand="false" ref="timeframe_select">
        <ul class="timeframe-list flex flex-col mt-1 absolute right-0">
          <li
            v-for="(timeframe, index) in timeframe_options"
            :class="[selected_timeframe_index === index ? 'selected' : '']"
            :key="timeframe.range"
            @click="select(index)"
          >
            {{ timeframe.desc }}
          </li>
        </ul>
      </DropdownButton>

      <transition name="fade" mode="out-in">
        <aside v-if="loading" class="mt-16 text-center p-12">
          <h3>Getting events...</h3>
        </aside>
        <aside v-else-if="events.length === 0" class="mt-16 text-center p-12 leading-7">
          <h3>No upcoming events found for this selection. Try selecting 'All events' to get more results!</h3>
        </aside>
        <section v-else class="mt-8 grid grid-cols-1 col-gap-4 row-gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card
            v-for="event in limited_events"
            :key="event.id"
            :title="event.subject"
            :subtitle="dateToString(event.start.dateTime)"
            :location="event.location.displayName || 'Northside Baptist Church'"
            :time="event.isAllDay ? 'All day' : timeToString(event.start.dateTime)"
          ></Card>
        </section>
      </transition>

      <div v-if="events.length > LIMIT_DEFAULT">
        <Button
          v-show="limit < events.length"
          class="ml-auto mr-auto mt-8"
          icon="angle-down"
          iconColor="#2941A3"
          type="secondary"
          short
          @click.native="limit += LIMIT_DEFAULT"
          >
          SHOW MORE
        </Button>
        <!-- <Button
          v-show="limit >= events.length"
          class="ml-auto mr-auto mt-8"
          icon="angle-up"
          iconColor="#2941A3"
          type="secondary"
          short
          @click.native="limit -= LIMIT_DEFAULT"
          >
          SHOW LESS
        </Button> -->
      </div>
    </div>
    <aside class="mt-16 bg-gray-100 md:bg-transparent px-6 pb-16 pt-10">
      <h2 class="text-center">Ladies' Bible Study</h2>

      <div class="md:max-w-md md:mx-auto">
        <img class="shadow-regular mt-6" :src="content.ladies_image" alt="Ladies' Bible Study" />
        <p class="mt-8 leading-6">{{ content.ladies_description }}</p>
      </div>
    </aside>

    <SocialHead title="Events" :description="content.description" :image="content.hero_image" />
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
      selected_timeframe_index: 2,
      timeframe_options: [
        {
          desc: 'This week',
          range: 'week'
        }, 
        {
          desc: 'This month',
          range: 'month'
        }, 
        {
          desc: 'All events',
          range: 'all'
        }
      ],

      LIMIT_DEFAULT: 4,
      limit: 4,

      events: [],
      loading: true
    }
  },
  computed: {
    limited_events() {
      return this.limit ? this.events.slice(0, this.limit) : this.events
    }
  },
  methods: {
    select(index) {
      this.selected_timeframe_index = index
      this.$refs.timeframe_select.close()
      this.getEvents()
    },
    getEvents() {
      this.loading = true
      fetch(`/.netlify/functions/get-events?range=${this.timeframe_options[this.selected_timeframe_index].range}`)
        .then(response => response.json())
        .then(responseJson => {
          this.loading = false
          if (!responseJson.hasOwnProperty('events'))
            this.events = new Array()
          else
            this.events = responseJson.events
        })
    },
    dateToString(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString(
        undefined, 
        { year: 'numeric', month: 'long', day: 'numeric' }
      )
    },
    timeToString(timeString) {
      const date = new Date(timeString)
      console.log(date.toString())
      return date.toLocaleTimeString(
        undefined,
        { timeStyle: 'short', hour12: true }
      )
    }
  },
  mounted() {
    this.getEvents()
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
    const content = await $content('pages', 'events').fetch()

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
