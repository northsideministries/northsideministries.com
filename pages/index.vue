<template>
  <main class="mb-24">
    <div class="hero-index px-6 mt-16 md:mx-auto md:max-w-lg lg:max-w-screen-xl">
      <section class="lg:flex lg:flex-row lg:justify-center lg:items-center">
        <div class="lg:px-16 lg:py-12 lg:my-32 lg:-mr-16 lg:w-3/4 z-0 lg:bg-gray-200 lg:rounded-lg lg:shadow-regular">
          <h1 class="font-serif font-bold text-2xl pr-6 leading-7">
            {{ content.title }}
          </h1>
          <img class="mt-4 shadow-regular rounded-btn lg:hidden" :src="content.hero_image" alt="Main image" />
          <p class="mt-6 leading-6">{{ content.description }}</p>
          <NuxtLinkButton class="mt-6 shadow-tall" to="/watch" type="cta" wide>
            JOIN US
          </NuxtLinkButton>
        </div>
        <img
          class="hidden object-cover md:w-1/2 lg:inline lg:mx-6 lg:rounded-lg lg:shadow-tall lg:max-w-2xl"
          :src="content.hero_image"
          alt="Main image"
        />
      </section>
    </div>

    <section v-if="content.covid" class="mt-16 md:-ml-16 md:text-left md:flex md:flex-row w-full lg:ml-0">
      <div
        class="bg-yellow-500 py-8 px-12 md:py-12 md:pl-16 md:pr-16 md:flex md:flex-col md:justify-center md:ml-auto lg:rounded-l-btn"
      >
        <div class="flex flex-row items-center justify-center -ml-4 md:justify-start md:ml-0">
          <client-only>
            <unicon name="heart-medical" fill="black" width="26" height="26"></unicon>
          </client-only>
          <h3 class="ml-2 font-bold">COVID-19 UPDATES</h3>
        </div>
        <p class="text-center mt-6 px-4 leading-6 md:max-w-lg md:px-0 md:text-left">
          Our staff is working to provide a safe environment to worship in accordance with guidance from the CDC and
          other agencies.
        </p>
        <NuxtLinkButton class="mt-6 shadow-tall md:mr-auto" to="/covid" type="primary">
          REVIEW OUR GUIDELINES
        </NuxtLinkButton>
      </div>

      <img
        :src="content.covid_image"
        class="hidden md:inline mr-auto object-cover w-1/5 lg:rounded-r-btn"
        alt="COVID-19"
      />
    </section>

    <!-- TODO: pull text and images from CMS, store as list -->
    <div class="content descriptions lg:mt-32">
      <section>
        <h2>A church you can call home.</h2>
        <p>
          <img :src="content.hero_image" alt="Home" />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus cursus feugiat. Nam condimentum, urna eu
          pharetra faucibus, urna elit tincidunt metus, at vehicula leo purus nec dui. Vivamus libero leo, posuere non
          dictum non, lobortis in quam. Fusce eget auctor sapien.
        </p>
      </section>

      <section>
        <h2>Traditionally uplifting and edifying.</h2>
        <p>
          <img :src="content.hero_image" alt="Uplifting" />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus cursus feugiat. Nam condimentum, urna eu
          pharetra faucibus, urna elit tincidunt metus, at vehicula leo purus nec dui. Vivamus libero leo, posuere non
          dictum non, lobortis in quam. Fusce eget auctor sapien.
          <NuxtLinkButton to="/about/beliefs" type="secondary" class="mt-6" short>
            READ OUR BELIEFS
          </NuxtLinkButton>
        </p>
      </section>
    </div>

    <section class="content px-6 mt-16 md:mt-32 clear-both">
      <h2 class="text-center">Our Location</h2>
      <Location class="mt-8" />
    </section>

    <section class="mx-auto px-6 max-w-sm mt-32 mb-16 md:max-w-lg md:mb-32">
      <h2 class="leading-7">Have any questions about us or our ministries?</h2>
      <NuxtLinkButton class="shadow-regular mt-4" to="/contact" type="cta" wide>
        CONTACT US
      </NuxtLinkButton>
    </section>

    <SocialHead title="Northside Baptist Church" :description="content.description" :image="content.hero_image" />
  </main>
</template>

<script>
import Location from '~/components/Location'
import NuxtLinkButton from '~/components/NuxtLinkButton'

export default {
  components: {
    Location,
    NuxtLinkButton
  },
  // head() {
  //   return {
  //     script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
  //   }
  // },
  head() {
    return {
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
    const content = await $content('pages', 'index').fetch()

    return {
      content
    }
  }
}
</script>

<style lang="postcss" scoped>
.descriptions {
  @screen lg {
    @apply max-w-screen-lg !important;
  }
}

.descriptions > section {
  @apply flex flex-col;

  @screen lg {
    @apply mt-24 !important;
  }

  & > h2 {
    @apply leading-7 text-center;

    @screen lg {
      @apply text-2xl;
    }
  }

  & > p {
    @apply mt-4 pt-2 leading-6;

    @screen lg {
      @apply mt-8;
    }

    & > img {
      @apply w-1/2 h-64 object-cover;
    }
  }

  &:nth-child(even) {
    & > p > img {
      @apply float-right ml-4;

      @screen md {
        @apply pl-8 ml-8;
      }
    }
  }

  &:nth-child(odd) {
    & > p > img {
      @apply float-left mr-4;

      @screen md {
        @apply pr-8 mr-8;
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
