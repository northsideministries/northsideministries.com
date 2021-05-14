<template>
  <main>
    <Hero title="Events" :img="require('~/assets/img/hero/friends_priscilla-du-preez-unsplash.jpg')">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel risus magna. Mauris mattis eros vitae metus
      lobortis, ut vehicula augue interdum.
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

      <section class="mt-8">
        <Card v-for="event in limited_events" :key="event.title"
          :title="event.title"
          :subtitle="event.date"
          :img="event.img"
          :location="event.location"
          :time="event.time"
          :link="event.link">
            {{ event.desc }}
        </Card>
        
        <div v-if="events.length > LIMIT_DEFAULT">
          <Button v-show="limit !== null" class="ml-auto mr-auto mt-8" icon="angle-down" iconColor="#2941A3" type="secondary" short @click.native="limit = null">SHOW MORE</Button>
          <Button v-show="limit === null" class="ml-auto mr-auto mt-8" icon="angle-up" iconColor="#2941A3" type="secondary" short @click.native="limit = LIMIT_DEFAULT">SHOW LESS</Button>
        </div>
      </section>
    </div>
    <aside class="mt-16 bg-gray-100 px-6 pb-16 pt-10">
      <h2 class="text-center">Ladies' Bible Study</h2>
      
      <!-- TODO: pull content from external service? -->
      <img class="shadow-regular mt-6" src="~/assets/img/hero/friends_priscilla-du-preez-unsplash.jpg" alt="Ladies' Bible Study"/>
      <p class="mt-8 leading-6">“Just Open the Door” is a wonderful series involving video discussions, study helps, and practical applications. We will work through this series from January – August 2021. The book is available at Lifeway or Amazon.</p>
    </aside>
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

    @apply font-medium text-lg px-4 py-3 border-t border-b border-l-2 border-r-2 border-solid border-gray-400 bg-gray-100 cursor-pointer w-40;
    transition: all 0.1s;

    &.selected {
      @apply bg-gray-300 text-gray-600;
    }
  }
}
</style>