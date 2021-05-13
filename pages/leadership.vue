<template>
  <main class="mb-16">
    <Hero title="Our Leadership" :img="require('~/assets/img/hero/friends_priscilla-du-preez-unsplash.jpg')">
      Hello World
    </Hero>
    <div class="content mt-12">
      <!-- TODO: pull in each of these sections from CMS -->

      <section class="ml-auto w-10/12">
        <img src="~/assets/img/leadership/cresswell.jpg" alt="Jonathan Cresswell"/>
        <h3 class="mt-4">Jonathan Cresswell</h3>
        <h5 class="mt-1">Senior Pastor</h5>
        <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere iaculis.</p>
        <div class="phone flex flex-row items-center mt-4">
          <client-only><unicon name="phone-alt" fill="black" width="19" height="19"></unicon></client-only>
          <p class="text-sm font-mono ml-2">(843) 557-5987</p>
        </div>
        <div class="email flex flex-row items-center mt-1">
          <client-only><unicon name="envelope-add" fill="black" width="19" height="19"></unicon></client-only>
          <p class="text-sm font-mono ml-2">test@example.com</p>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import Hero from '~/components/Hero'

export default {
  name: 'LeadershipPage',
  components: {
    Hero
  }
}
</script>