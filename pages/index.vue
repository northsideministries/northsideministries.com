<template>
  <main class="mb-24">
    <div class="text-white h-screen max-w-full hero-index px-0 -mt-24 md:max-w-lg lg:max-w-xl">
      <img
        class="hero-image object-cover absolute w-full h-screen md:-ml-16"
        :src="content.hero_image"
        alt="Main image"
      />
      <section class="flex h-full justify-center align-middle items-center px-8 lg:px-0">
        <div class="lg:ml-32">
          <h1 class="font-serif font-bold text-3xl pr-6 leading-9">
            {{ content.title }}
          </h1>
          <p class="mt-6 leading-6 lg:text-lg">{{ content.description }}</p>
          <NuxtLinkButton class="mt-6 shadow-tall" to="/watch" type="cta" wide> JOIN US </NuxtLinkButton>
        </div>
      </section>
    </div>

    <section v-if="content.covid" class="md:mt-16 md:text-left md:flex md:flex-row">
      <div
        class="bg-yellow-500 py-12 px-12 w-full flex-auto md:py-10 md:rounded-l-btn lg:pr-16 lg:flex lg:flex-col lg:justify-center xl:pl-40"
      >
        <div class="flex flex-row items-center justify-center md:justify-start md:ml-0">
          <client-only>
            <unicon name="heart-medical" fill="black" width="26" height="26"></unicon>
          </client-only>
          <h3 class="ml-2 font-bold">COVID-19 UPDATES</h3>
        </div>
        <p class="text-center mt-6 px-4 leading-6 md:text-left md:px-0 lg:max-w-lg">
          Our staff is working to provide a safe environment to worship in accordance with guidance from the CDC and
          other agencies.
        </p>
        <NuxtLinkButton class="mt-6 shadow-tall md:mr-auto md:-ml-2" to="/covid" type="primary">
          REVIEW OUR GUIDELINES
        </NuxtLinkButton>
      </div>
      <div style="flex-basis: fit-content; flex-shrink: 2">
        <img :src="content.covid_image" class="hidden object-cover rounded-r-btn h-full md:inline" alt="COVID-19" />
      </div>
    </section>

    <section v-if="content.event_banner" class="md:mt-16 md:text-left md:flex md:flex-row text-white">
      <div
        class="bg-primary-800 py-12 px-12 w-full flex-auto md:py-10 md:rounded-l-btn lg:pr-16 lg:flex lg:flex-col lg:justify-center xl:pl-40"
      >
        <h3 class="ml-2 font-bold md:ml-0 text-center">{{ content.event_banner_title }}</h3>
        <p class="text-center mt-6 px-4 leading-6 md:text-left md:px-0 lg:max-w-lg">
          {{ content.event_banner_desc }}
        </p>
        <LinkButton class="mt-6 shadow-tall md:mr-auto md:-ml-2" :link="content.event_banner_link" type="primary">
          LEARN MORE
        </LinkButton>
      </div>
      <div style="flex-basis: fit-content; flex-shrink: 2">
        <img
          :src="content.event_banner_image"
          class="hidden object-cover rounded-r-btn h-full md:inline"
          alt="COVID-19"
        />
      </div>
    </section>

    <div class="content descriptions lg:mt-32">
      <section v-for="section in content.sections" :key="section.heading">
        <h2>{{ section.heading }}</h2>
        <div>
          <img :src="section.image" :alt="section.heading" />
          <p class="md:mt-16">{{ section.content }}</p>

          <div v-if="section.link" class="mt-4 inline-block">
            <NuxtLinkButton v-if="section.link.page_link" :to="section.link.page_link" type="secondary" short>
              {{ section.link.label.toUpperCase() }}
            </NuxtLinkButton>
            <LinkButton v-if="section.link.external_link" :link="section.link.external_link" type="secondary" short>
              {{ section.link.label.toUpperCase() }}
            </LinkButton>
          </div>
        </div>
      </section>
    </div>

    <section class="my-12 md:mt-32 mx-2 clear-both">
      <h2 class="text-center mb-8">Event Calendar</h2>
      <Calendar
        :month="
          [
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
          ][new Date().getMonth()]
        "
        :year="new Date().getFullYear()"
      ></Calendar>
    </section>

    <section class="mx-auto my-12 max-w-sm md:mt-32 clear-both">
      <ServiceTimes :wednesdayServices="wednesday_services" :sundayServices="sunday_services" />
    </section>

    <section class="content px-6 mt-16 md:mt-32 clear-both">
      <h2 class="text-center">Our Location</h2>
      <Location class="mt-8" />
    </section>

    <section class="mx-auto px-6 max-w-sm mt-32 mb-16 md:max-w-lg md:mb-32">
      <h2 class="leading-7">Have any questions about us or our ministries?</h2>
      <NuxtLinkButton class="shadow-regular mt-4" to="/contact" type="cta" wide> CONTACT US </NuxtLinkButton>
    </section>

    <SocialHead title="Northside Baptist Church" :description="content.description" :image="content.hero_image" />
  </main>
</template>

<script>
import Location from '~/components/Location'
import NuxtLinkButton from '~/components/NuxtLinkButton'
import ServiceTimes from '~/components/ServiceTimes'
import Calendar from '~/components/Calendar.vue'

export default {
  components: {
    Location,
    NuxtLinkButton,
    ServiceTimes,
    Calendar,
  },
  head() {
    return {
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.content.description,
        },
      ],
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    }
  },
  async asyncData({ $content }) {
    const content = await $content('pages', 'index').fetch()
    const service_times = await $content('church', 'service_times').fetch()
    const sunday_services = service_times.services.filter((service) => service.day === 'Sunday')
    const wednesday_services = service_times.services.filter((service) => service.day === 'Wednesday')

    return {
      content,
      sunday_services,
      wednesday_services,
    }
  },
}
</script>

<style lang="postcss" scoped>
.hero-image {
  filter: brightness(50%);
}

.descriptions {
  @screen lg {
    @apply max-w-screen-lg !important;
  }
}

.descriptions > section {
  @apply flex flex-col;

  &:nth-child(odd) {
    @apply mr-0;
  }

  @screen lg {
    @apply mt-24 !important;
  }

  & > h2 {
    @apply leading-7 text-center;

    @screen lg {
      @apply text-2xl;
    }
  }

  & > div {
    @apply mt-4 pt-2;

    & > p {
      @apply leading-6;
    }

    & > img {
      @apply w-1/2 h-64 object-cover;
    }

    @screen lg {
      @apply mt-8;
    }
  }

  &:nth-child(even) {
    & img {
      @apply float-right ml-4;

      @screen md {
        @apply pl-8 ml-8;
      }
    }
  }

  &:nth-child(odd) {
    & img {
      @apply float-left mr-4;

      @screen md {
        @apply pr-8;
      }
    }
  }
}

.hero-index > img {
  z-index: -1;
}

.content > section {
  @apply mt-16;
}

.hero-bg {
  z-index: -1;
}
</style>
