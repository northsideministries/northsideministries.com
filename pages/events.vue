<template>
  <main>
    <Hero title="Events" :img="content.hero_image">
      {{ content.description }}
    </Hero>
    <div class="px-2 mx-auto md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
      <h2 class="text-center mt-12">Upcoming Events</h2>

      <h5 class="font-bold mt-8">View events for</h5>

      <DropdownButton :label="selectedMonth" class="mt-3 w-56 z-20" :expand="false" ref="month_select">
        <ul class="timeframe-list flex flex-col mt-1 absolute right-0">
          <li
            v-for="month in months"
            :class="[month === selectedMonth ? 'selected' : '']"
            :key="month"
            @click="selectMonth(month)"
          >
            {{ month }}
          </li>
        </ul>
      </DropdownButton>

      <DropdownButton :label="`${selectedYear}`" class="mt-3 w-56" :expand="false" ref="year_select">
        <ul class="timeframe-list flex flex-col mt-1 absolute right-0">
          <li
            v-for="year in years"
            :class="[year === selectedYear ? 'selected' : '']"
            :key="year"
            @click="selectYear(year)"
          >
            {{ year }}
          </li>
        </ul>
      </DropdownButton>

      <Calendar :month="selectedMonth" :year="selectedYear" class="mt-8" />
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
import DropdownButton from '~/components/DropdownButton'
import Hero from '~/components/Hero'
import Calendar from '~/components/Calendar'

export default {
  name: 'EventsPage',
  components: {
    DropdownButton,
    Hero,
    Calendar,
  },
  data() {
    return {
      months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      years: [],
      selectedMonth: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ][new Date().getMonth()],
      selectedYear: new Date().getFullYear(),
    }
  },
  created() {
    const currentYear = new Date().getFullYear()
    for (let i = currentYear - 2; i < currentYear; i++) this.years.push(i)
    for (let i = currentYear; i < currentYear + 3; i++) this.years.push(i)
  },
  methods: {
    selectMonth(month) {
      this.selectedMonth = month
      this.$refs.month_select.close()
    },
    selectYear(year) {
      this.selectedYear = year
      this.selectedMonth = this.months[0]
      this.$refs.year_select.close()
    },
    dateToString(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })
    },
    timeToString(timeString) {
      const date = new Date(timeString)
      console.log(date.toString())
      return date.toLocaleTimeString(undefined, { timeStyle: 'short', hour12: true })
    },
  },
  head() {
    return {
      title: 'Events',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.content.description,
        },
      ],
    }
  },
  async asyncData({ $content }) {
    const content = await $content('pages', 'events').fetch()

    return {
      content,
    }
  },
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
