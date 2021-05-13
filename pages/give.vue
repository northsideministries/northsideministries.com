<template>
  <main class="mb-16">
    <Hero title="Give" :img="require('~/assets/img/hero/friends_priscilla-du-preez-unsplash.jpg')">
      Hello World
    </Hero>

    <div class="content mt-12 leading-6">
      <span class="font-bold">Use this online form to give to Northside Baptist Church.</span> Optionally, set up recurring giving by selecting the “Give Multiple Times” option.
    </div>

    <!-- TODO: embed giving page -->
    <div class="embed mt-12"></div>

    <div class="content mt-12 leading-6 font-bold">
      If you need assistance with online giving or have any questions about other payment methods, <a class="text-primary-600 underline">contact us</a>!
    </div>
  </main>
</template>

<script>
import Hero from '~/components/Hero'

export default {
  name: 'GivePage',
  components: {
    Hero
  }
}
</script>