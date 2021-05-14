<template>
  <main class="mb-24">
    <!-- <img class="absolute bottom-0 left-0 hero-bg md:hidden" src="~/assets/img/home-hero-bg.svg" /> -->

    <div class="px-6 mt-16 md:mx-auto md:max-w-screen-xl">
      <section class="md:flex md:flex-row md:justify-center md:items-center md:mx-24">
        <div class="md:px-20 md:py-12 md:my-32 md:-mr-16 md:w-3/4 md:z-10 md:bg-gray-200 md:rounded-lg md:shadow-regular">
          <h1 class="font-serif font-bold text-2xl pr-6 leading-7">{{ content.title }}</h1>
          <img class="mt-4 md:hidden" :src="content.hero_image" alt="Main image" />
          <p class="mt-6 leading-6">{{ content.description }}</p>
          <NuxtLinkButton class="mt-6 shadow-tall" to="/watch" type="cta" wide>
            JOIN US
          </NuxtLinkButton>
        </div>
        <img class="hidden object-cover md:inline md:w-full" :src="content.hero_image" alt="Main image" />
      </section>

    </div>

    <section v-if="content.covid" class="mt-16 md:-ml-16 md:text-left md:flex md:flex-row">
      <div class="bg-yellow-500 py-6 px-12 md:py-12 md:pl-64 md:pr-16 md:flex md:flex-col md:justify-center">
        <div class="flex flex-row items-center justify-center -ml-4 md:justify-start md:ml-0">
          <client-only>
            <unicon name="heart-medical" fill="black" width="26" height="26"></unicon>
          </client-only>
          <h3 class="ml-2 font-bold">COVID-19 UPDATES</h3>
        </div>
        <p class="text-center mt-6 px-4 leading-6 md:max-w-lg md:px-0 md:text-left">Our staff is working to provide a safe environment to worship in accordance with guidance from the CDC and other agencies.</p>
        <NuxtLinkButton class="mt-6 shadow-tall md:mr-auto" to="/covid" type="primary">
          REVIEW OUR GUIDELINES
        </NuxtLinkButton>
      </div>
      <!-- TODO: replace with CMS image -->
      <img :src="content.hero_image" class="hidden md:inline object-cover w-1/6" />
    </section>

    <section class="content px-6 mt-16 md:mt-32">
      <h2 class="text-center">Our Location</h2>
      <Location />
    </section>

    <section class="mx-auto max-w-sm mt-32 mb-16 md:max-w-lg md:mb-32">
      <h2 class="leading-7">Have any questions about us or our ministries?</h2>
      <NuxtLinkButton class="shadow-regular mt-4" to="/contact" type="cta" wide>
        CONTACT US
      </NuxtLinkButton>
    </section>
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
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
    }
  },
  async asyncData({ $content }) {
    const content = await $content('pages', 'index').fetch();

    return {
      content
    }
  },
}
</script>

<style lang="postcss" scoped>
.content > section {
  @apply mt-16;
}

.hero-bg {
  z-index: -1;
}
</style>