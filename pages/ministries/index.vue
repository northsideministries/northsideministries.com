<template>
  <main class="mb-24">
    <Hero title="Ministries" :img="content.hero_image"></Hero>

    <div class="content">
      <section v-for="ministry in content.ministry_list" :key="ministry.name">
        <h2>{{ ministry.name }}</h2>
        <img :src="ministry.image" :alt="ministry.name" />
        <p>{{ ministry.description }}</p>
        <NuxtLinkButton
          v-if="ministry.link && ministry.link.page_link"
          :to="ministry.link.page_link"
          type="secondary"
          short
          >{{ ministry.link.label }}</NuxtLinkButton
        >
        <LinkButton
          v-if="ministry.link && ministry.link.external_link"
          :link="ministry.link.external_link"
          type="secondary"
          short
          >{{ ministry.link.label }}</LinkButton
        >
      </section>
    </div>

    <SocialHead
      title="Ministries"
      :description="description"
      :image="content.hero_image"
    />
  </main>
</template>

<script>
import Hero from '~/components/Hero'
import LinkButton from '~/components/LinkButton'
import NuxtLinkButton from '~/components/NuxtLinkButton'

export default {
  name: 'AboutPage',
  components: {
    Hero,
    LinkButton,
    NuxtLinkButton
  },
  data() {
    return {
      description:
        'Northside Baptist Church supports numerous outreach ministries and missionaries across the globe.'
    }
  },
  head() {
    return {
      title: 'Ministries',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        }
      ]
    }
  },
  async asyncData({ $content }) {
    const content = await $content('pages', 'ministries').fetch()

    return {
      content
    }
  }
}
</script>

<style lang="postcss" scoped>
.content > section {
  @apply mt-24 flex flex-col;

  & > img,
  & > p,
  & > a {
    @apply mt-6;
  }

  & > img {
    @apply object-cover h-24 w-full;
  }

  & > p {
    @apply leading-6;
  }

  & > a {
    @apply mx-auto;
  }
}
</style>
