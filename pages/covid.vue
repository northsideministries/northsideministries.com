<template>
  <main class="mb-20">
    <Hero title="COVID-19" :img="content.hero_image">
      {{ content.description }}
    </Hero>

    <div class="content">
      <aside class="mt-4 bg-gray-200 rounded-btn text-gray-700 text-center px-8 py-5 font-mono text-sm">
        Last updated {{ last_update_date }}
      </aside>

      <!-- TODO: pull info from CMS -->
      <section>
        <h2>Nursery</h2>
        <p>We are currently providing nursery and children’s church.</p>
      </section>
      <section>
        <h2>Events</h2>
        <p>All events currently listed on our calender page have not been canceled.</p>
      </section>
      <section>
        <h2>Giving</h2>
        <!-- TODO: pull link from CMS -->
        <p>We encourage you to use our <a href="#">online giving system.</a></p>
      </section>
      <section>
        <h2>Opportunities</h2>
        <p>Are you interested in running errands for those in our congregation who may not be able to get out right now? If so, <nuxt-link to="/contact">call the church office</nuxt-link> to let us know when you are available.</p>
      </section>

      <p class="px-10 leading-6 mt-16">
        Though we are encouraged to practice social distancing, we encourage you to keep in contact regularly with fellow church members during this time of separation.
        Please call one another and pursue meaningful conversations and times of prayer.
        This is a wonderful way to continue to meet the emotional and spiritual needs of our local body of Christ.
      </p>

      <SocialHead
        title="COVID-19"
        :description="content.description"
        :image="content.hero_image"
      />
    </div>
  </main>
</template>

<script>
import Hero from '~/components/Hero'

export default {
  name: 'CovidPage',
  components: {
    Hero
  },
  data() {
    return {
      // TODO: pull from CMS
      last_update_date: 'January 11, 2021'
    }
  },
  head() {
    return {
      title: 'COVID-19',
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
    const content = await $content('pages', 'covid').fetch();
    
    return {
      content
    }
  }
}
</script>

<style lang="postcss" scoped>
.content > section {
  @apply mt-10;

  & > h2 {
    @apply font-normal;
  }

  & > p {
    @apply mt-4;
  }
}

a {
  @apply text-primary-600 underline;
}
</style>