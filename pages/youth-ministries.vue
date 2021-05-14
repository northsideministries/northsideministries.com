<template>
  <!--
    nearly identical to childrens-ministries and ministries page
    TODO: template to all-inclusive "ministries" page?
    would also need to abstract CMS structuring for all 3 pages 
  -->
  <main class="mb-16">
    <Hero title="Youth Ministries" :img="content.hero_image">
      {{ content.description }}
    </Hero>
    <div class="content">
      <!-- TODO: content and images from CMS -->

      <section v-for="ministry in content.ministry_list" :key="ministry.name">
        <h2>{{ ministry.name }}</h2>
        <img :src="ministry.image" :alt="ministry.name" />
        <p>{{ ministry.description }}</p>
        <div v-if="ministry.day || ministry.room || ministry.service" class="mt-6">
          <h3>{{ ministry.day }}</h3>
          <p>{{ ministry.room }}</p>
          <p>{{ ministry.service }} <span v-if="ministry.time">— {{ ministry.time }}</span></p>
        </div>
        <div v-if="ministry.link" class="mt-4 inline-block">
          <NuxtLinkButton v-if="ministry.link.page_link" :to="ministry.link.page_link" type="secondary" short>{{ ministry.link.label }}</NuxtLinkButton>
          <LinkButton v-if="ministry.link.external_link" :link="ministry.link.external_link" type="secondary" short>{{ ministry.link.label }}</LinkButton>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import NuxtLinkButton from '~/components/NuxtLinkButton'
import Hero from '~/components/Hero'

export default {
  name: 'YouthMinistriesPage',
  components: {
    NuxtLinkButton,
    Hero
  },
  async asyncData({ $content }) {
    const content = await $content('pages', 'youth_ministries').fetch();

    return {
      content
    }
  },
}
</script>

<style lang="postcss" scoped>
.content > section {
  @apply w-11/12 mt-16;

  &:nth-child(odd) {
    @apply -mr-6 float-right;
  }

  &:nth-child(even) {
    @apply -ml-6 float-left;

    & > h2 {
      @apply text-right;
    }

    & > p, & > div {
      @apply ml-8;
    }
  }

  & > h2 {
    @apply font-normal text-2xl;
  }

  & > img {
    @apply mt-4;
  }

  & > p {
    @apply mt-4 leading-6;
  }

  & > div {
    & > h3 {
      @apply mb-2;
    }

    & > p {
      @apply mt-1;
    }
  }
}
</style>