<template>
  <!--
    nearly identical to childrens-ministries and ministries page
    template to all-inclusive "ministries" page?
    would also need to abstract CMS structuring for all 3 pages 
  -->
  <main class="mb-16 md:mb-32">
    <Hero title="Youth Ministries" :img="content.hero_image">
      {{ content.description }}
    </Hero>
    <div class="sections sm:content md:max-w-6xl md:mx-auto md:grid grid-cols-2 col-gap-16 row-gap-8">
      <section
        v-for="ministry in content.ministry_list"
        :key="ministry.name"
        class="mt-12 w-4/5 md:w-full lg:px-12"
      >
        <h2 class="ml-8 md:ml-0">{{ ministry.name }}</h2>
        <img :src="ministry.image" :alt="ministry.name" />
        <div
          v-if="ministry.day || ministry.room || ministry.service"
          class="mt-6"
        >
          <h3>{{ ministry.day }}</h3>
          <p>{{ ministry.room }}</p>
          <p>
            {{ ministry.service }}
            <span v-if="ministry.time">— {{ ministry.time }}</span>
          </p>
        </div>
        <p>{{ ministry.description }}</p>
        <div v-if="ministry.link" class="mt-4 inline-block">
          <NuxtLinkButton
            v-if="ministry.link.page_link"
            :to="ministry.link.page_link"
            type="secondary"
            short
            >{{ ministry.link.label }}</NuxtLinkButton
          >
          <LinkButton
            v-if="ministry.link.external_link"
            :link="ministry.link.external_link"
            type="secondary"
            short
            >{{ ministry.link.label }}</LinkButton
          >
        </div>
      </section>
    </div>

    <SocialHead
      title="Youth Ministries"
      :description="content.description"
      :image="content.hero_image"
    />
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
  head() {
    return {
      title: 'Youth Ministries',
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
    const content = await $content('pages', 'youth_ministries').fetch()

    return {
      content
    }
  }
}
</script>

<style lang="postcss" scoped>
.sections > section {
  &:nth-child(odd) {
    @apply float-right;
  }

  &:nth-child(even) {
    @apply float-left;

    & > p,
    & > div {
      @apply ml-8;
    }

    @screen md {
      & > p,
      & > div {
        @apply ml-0;
      }
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
