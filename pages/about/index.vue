<template>
  <main class="mb-48">
    <Hero title="About" :img="content.hero_image"></Hero>

    <div class="content max-w-screen-md mx-auto">
      <!-- TODO: pull images (NOT all text) from CMS -->

      <section class="mt-32">

        <div class="flex flex-row h-56 mt-4 items-center">
          <img class="w-24 h-64 object-cover -ml-6 md:w-1/2 md:h-32" src="~/assets/img/hero/friends_priscilla-du-preez-unsplash.jpg" alt="Our Mission"/>
          <div class="ml-10 -mt-12 md:w-1/2 md:h-auto">
            <h2>Our Mission</h2>
            <p class="mt-4 leading-6 pr-4">Driven by a passion to glorify God, we purpose to make and mature disciples who are becoming like the Lord Jesus Christ. Through the ministry of the Word, we strive to present everyone fully mature in Christ.</p>
          </div>
        </div>
      </section>

      <section class="mt-32">
        <h2 class="leading-6 w-3/4">Why should I attend this Sunday?</h2>

        <div class="flex flex-row h-56 mt-4 md:h-auto">
          <p class="mr-6 leading-6 md:w-1/2">At Northside, we strive to faithfully communicate the Scriptures so that we together as a church family increase in our understanding of God and His Word. We provide Bible classes for all ages designed to foster growth in your spiritual life.</p>
          <img class="w-32 h-64 object-cover -mr-6 md:w-1/2 md:h-32" src="~/assets/img/hero/friends_priscilla-du-preez-unsplash.jpg" alt="Why should I attend this Sunday?"/>
        </div>
      </section>

      <section class="mt-32 px-10 w-3/4 mx-auto md:mt-48">
        <p class="leading-6">Northside strives to be a place where we love and care for one another, valuing relationships and committing ourselves to serving one another.</p>
        <img class="object-cover mt-4 md:mt-6 md:h-48 md:w-full" src="~/assets/img/hero/friends_priscilla-du-preez-unsplash.jpg" alt="Northside"/>
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
  },
  data() {
    return {
      img: ''
    }
  },
  async asyncData({ $content }) {
    const content = await $content('pages', 'about').fetch();

    return {
      content
    }
  },
}
</script>