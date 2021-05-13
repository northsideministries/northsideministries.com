<template>
  <main class="mb-48">
    <Hero title="About" :img="require('~/assets/img/hero/friends_priscilla-du-preez-unsplash.jpg')"></Hero>

    <div class="content">
      <!-- TODO: pull images (NOT all text) from CMS -->

      <section class="mt-32">
        <h2 class="ml-8">Our Mission</h2>

        <div class="flex flex-row h-56 mt-4">
          <img class="w-24 object-cover -ml-6" src="~/assets/img/hero/friends_priscilla-du-preez-unsplash.jpg" alt="Our Mission"/>
          <p class="ml-6 leading-6 pr-4">Driven by a passion to glorify God, we purpose to make and mature disciples who are becoming like the Lord Jesus Christ. Through the ministry of the Word, we strive to present everyone fully mature in Christ.</p>
        </div>
      </section>

      <section class="mt-32">
        <h2 class="leading-6">Why should I attend this Sunday?</h2>

        <div class="flex flex-row h-64 mt-4">
          <p class="mr-6 leading-6">At Northside, we strive to faithfully communicate the Scriptures so that we together as a church family increase in our understanding of God and His Word. We provide Bible classes for all ages designed to foster growth in your spiritual life.</p>
          <img class="w-32 object-cover -mr-6" src="~/assets/img/hero/friends_priscilla-du-preez-unsplash.jpg" alt="Our Mission"/>
        </div>
      </section>

      <section class="mt-32 px-10">
        <p class="leading-6">Northside strives to be a place where we love and care for one another, valuing relationships and committing ourselves to serving one another.</p>
        <img class="object-cover mt-4" src="~/assets/img/hero/friends_priscilla-du-preez-unsplash.jpg" alt="Our Mission"/>
      </section>
    </div>
  </main>
</template>

<script>
import Hero from '~/components/Hero'

export default {
  name: 'AboutPage',
  components: {
    Hero
  }
}
</script>