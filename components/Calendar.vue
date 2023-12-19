<template>
  <div>
    <h3 class="mb-2">{{ month }} {{ year }}</h3>

    <transition name="fade">
      <div v-if="loading" class="w-full text-center">
        <p class="bg-gray-300 text-gray-600 inline-block px-8 py-4 rounded-md">Loading...</p>
      </div>
      <table v-else id="calendarTable">
        <thead>
          <tr>
            <th>SUNDAY</th>
            <th>MONDAY</th>
            <th>TUESDAY</th>
            <th>WEDNESDAY</th>
            <th>THURSDAY</th>
            <th>FRIDAY</th>
            <th>SATURDAY</th>
          </tr>
        </thead>
        <tbody ref="calendarTable">
          <tr v-for="(_, i) in numRows" :key="i">
            <td
              v-for="(_, j) in 7"
              :key="j"
              border="1"
              :class="{ exclude: excludeDate(i, j) }"
              :data-th="`${
                ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][j]
              } ${month} ${fromRowCol(i, j)}`"
            >
              <div
                class="day-title"
                :class="{
                  today:
                    today.getDate() === fromRowCol(i, j) &&
                    today.getFullYear() === parseInt(year) &&
                    today.getMonth() === months.indexOf(month),
                }"
              >
                {{ excludeDate(i, j) ? '' : fromRowCol(i, j) }}
              </div>
              <div
                v-for="evt of events.filter(
                  (evt) =>
                    new Date(evt.startDate).getDate() <= fromRowCol(i, j) &&
                    new Date(evt.endDate).getDate() >= fromRowCol(i, j)
                )"
                :key="evt.webLink"
                class="day-event text-xs border-b border-solid border-gray-400 px-2 py-1 tooltip"
              >
                <p v-if="evt.isAllDay" class="font-bold">ALL DAY</p>
                <p v-else>
                  <span class="font-bold">{{ getHourMinuteString(evt.startDate) }}</span> -
                  {{ getHourMinuteString(evt.endDate) }}
                </p>
                <p>{{ evt.title }}</p>
                <div class="tooltiptext" v-if="evt.content !== ''">
                  <p v-if="evt.isAllDay">ALL DAY</p>
                  <p v-else>
                    <span class="font-bold text-sm">{{ getHourMinuteString(evt.startDate) }}</span> -
                    {{ getHourMinuteString(evt.endDate) }}
                  </p>
                  <p class="font-bold text-sm">{{ evt.title }}</p>
                  <p>{{ evt.content }}</p>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </transition>
  </div>
</template>

<script>
// TODO:
// - table for each day
//   - separator for each event
//   - sorted by time
//   - highlight current day
// - hover/tap box with info about event (dialog overlay?)
// - dropdown to select month

// TODO:
// - for events over multiple days
// - for recurring events?

export default {
  name: 'CalendarView',
  props: {
    month: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      loading: true,
      today: new Date(),
      events: [],
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
    }
  },
  computed: {
    daysInmonth() {
      return [31, this.year % 4 ? 28 : 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][this.months.indexOf(this.month)]
    },
    firstDayOfMonth() {
      // returns 0-6 for Sunday-Saturday of the starting weekday of the month

      return new Date(this.year, this.months.indexOf(this.month), 1).getDay()
    },
    numRows() {
      return Math.ceil((this.firstDayOfMonth + this.daysInmonth) / 7)
    },
  },
  mounted() {
    this.getEvents()
  },
  watch: {
    month() {
      this.loading = true
      this.getEvents()
    },
    year() {
      this.loading = true
      this.getEvents()
    },
  },
  methods: {
    fromRowCol(r, c) {
      return (r + 1) * 7 - (6 - c) - this.firstDayOfMonth
    },
    excludeDate(r, c) {
      return (r === 0 && c < this.firstDayOfMonth) ||
        (r === this.numRows - 1 && this.fromRowCol(r, c) > this.daysInmonth)
        ? true
        : false
    },
    getEvents() {
      fetch(`/.netlify/functions/get-events?month=${this.months.indexOf(this.month)}&year=${this.year}`)
        .then((response) => response.json())
        .then((responseJson) => {
          // this.loading = false
          // eslint-disable-next-line no-prototype-builtins
          if (!responseJson.hasOwnProperty('events')) return

          console.log(responseJson.events)

          const events = []
          for (const evt of responseJson.events)
            events.push({
              // startDate: this.getDateTimeZone(evt.start.dateTime, evt.start.timeZone),
              // endDate: this.getDateTimeZone(evt.end.dateTime, evt.end.timeZone),
              startDate: evt.start.dateTime,
              endDate: evt.end.dateTime,
              isAllDay: evt.isAllDay,
              title: evt.subject,
              content: evt.bodyPreview,
              url: evt.webLink,
            })

          // copy object and force reactive update
          this.events = JSON.parse(JSON.stringify(events))
          this.loading = false
        })
    },
    // getUTCOffset(d, tz) {
    //   // https://stackoverflow.com/questions/36112774/calculate-the-utc-offset-given-a-timezone-string-in-javascript
    //   const a = d.toLocaleString('ja', { timeZone: tz }).split(/[/\s:]/)
    //   a[1]--
    //   const t1 = Date.UTC.apply(null, a)
    //   const t2 = new Date(d).setMilliseconds(0)
    //   return Math.floor((t2 - t1) / 3600 / 1000)
    // },
    // getDateTimeZone(dateTimeString, timeZoneString) {
    //   const utcOffset = this.getUTCOffset(new Date(dateTimeString), timeZoneString)
    //   const dateString = `${dateTimeString}${utcOffset >= 0 ? '+' : '-'}${Math.abs(utcOffset)
    //     .toString()
    //     .padStart(2, '0')}:00`
    //   return new Date(dateString)
    // },
    getHourMinuteString(dateTimeString) {
      const date = new Date(dateTimeString)
      return date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    },
  },
}
</script>

<style lang="postcss" scoped>
#calendarTable {
  @apply w-full table-fixed;

  & > thead {
    @apply bg-gray-400 text-gray-800;

    & th {
      @apply border-none px-4 py-3;
    }
  }

  & > tbody {
    @apply bg-white;

    & td {
      &.exclude {
        @apply bg-gray-100;
      }

      @apply border-gray-400 border border-solid;

      & > .day-title {
        @apply bg-gray-100 font-bold text-sm p-2;

        &.today {
          @apply bg-primary-300;
        }
      }

      & > .day-event {
        @apply bg-white;
      }

      & > div:last-child {
        @apply border-none;
      }
    }
  }
}

/* https://www.w3schools.com/css/css_tooltip.asp */
.tooltip .tooltiptext {
  @apply bg-gray-700 shadow-regular invisible p-2 max-w-xs rounded-sm text-white;

  /* Position the tooltip */
  position: absolute;
  z-index: 1;
}

.tooltip:hover .tooltiptext {
  @apply visible;
}

/* https://stackoverflow.com/questions/32301206/how-to-fold-table-columns-into-rows-on-mobile-devices */
@media only screen and (max-width: 40em) {
  thead {
    display: none;
  }

  thead th:not(:first-child) {
    display: none;
  }

  td,
  th {
    display: block;
  }

  td .day-title {
    display: none;
  }

  td[data-th]:not(.exclude):before {
    content: attr(data-th);

    @apply bg-gray-100 font-bold text-sm p-2 block;

    &.today {
      @apply bg-primary-300;
    }
  }
}
</style>
