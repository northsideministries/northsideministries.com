<template>
  <main class="mb-24">
    <!-- TODO: constrain rules to either md or lg, not both -->
    <div class="text-white h-screen max-w-full hero-index px-0 -mt-24 md:max-w-lg lg:max-w-xl">
      <img
        class="object-cover absolute w-full h-screen md:-ml-16"
        :src="content.hero_image"
        alt="Main image"
      />
      <section class="flex h-full justify-center align-middle items-center px-8 lg:px-0">
        <div class="lg:ml-32">
          <h1 class="font-serif font-bold text-3xl pr-6 leading-9">
            {{ content.title }}
          </h1>
          <p class="mt-6 leading-6 lg:text-lg">{{ content.description }}</p>
          <NuxtLinkButton class="mt-6 shadow-tall" to="/watch" type="cta" wide>
            JOIN US
          </NuxtLinkButton>
        </div>
      </section>
    </div>

    <section v-if="content.covid" class="mt-8 md:mt-16 md:text-left md:flex md:flex-row">
      <div
        class="bg-yellow-500 py-8 px-12 w-full flex-auto md:py-10 md:rounded-l-btn lg:pr-16 lg:flex lg:flex-col lg:justify-center xl:pl-40"
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
      <div style="flex-basis: fit-content; flex-shrink: 2;">
        <img
          :src="content.covid_image"
          class="hidden object-cover rounded-r-btn h-full md:inline"
          alt="COVID-19"
        />
      </div>
    </section>

    <!-- TODO: pull text and images from CMS, store as list -->
    <div class="content descriptions lg:mt-32">
      <section class="-mr-12">
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
  head() {
    return {
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.content.description
        }
      ],
      // script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
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
