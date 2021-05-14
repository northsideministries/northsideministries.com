<template>
  <main class="mb-24">
    <!-- <img class="absolute bottom-0 left-0 hero-bg md:hidden" src="~/assets/img/home-hero-bg.svg" /> -->

    <div class="content">
      <section>
        <h1 class="font-serif font-bold text-2xl pr-6 leading-7">{{ content.title }}</h1>
        <img class="mt-4" :src="content.hero_image" alt="Main image" />
        <p class="mt-6 leading-6">{{ content.description }}</p>
        <NuxtLinkButton class="mt-6 shadow-tall" to="/watch" type="primary" wide>
          JOIN US
        </NuxtLinkButton>
      </section>

      <section v-if="content.covid" class="bg-yellow-500 rounded-btn py-6 px-6">
        <div class="flex flex-row items-center justify-center -ml-4">
          <client-only>
            <unicon name="heart-medical" fill="black" width="26" height="26"></unicon>
          </client-only>
          <h3 class="ml-2 font-bold">COVID-19 UPDATES</h3>
        </div>
        <p class="text-center mt-6 px-4 leading-6">Our staff is working to provide a safe environment to worship in accordance with guidance from the CDC and other agencies.</p>
        <NuxtLinkButton class="mt-6 shadow-tall" to="/covid" type="primary">
          REVIEW OUR GUIDELINES
        </NuxtLinkButton>
      </section>

      <section>
        <h2 class="text-center">Our Location</h2>
        <Location />
      </section>

      <section class="px-4">
        <h2 class="leading-7">Have any questions about us or our ministries?</h2>
        <NuxtLinkButton class="shadow-regular mt-4" to="/contact" type="cta" wide>
          CONTACT US
        </NuxtLinkButton>
      </section>
    </div>
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