<template>
  <main class="mb-16 md:mb-32">
    <Hero title="Children's Ministries" :img="content.hero_image">
      {{ content.description }}
    </Hero>
    <div class="sections sm:content md:max-w-6xl md:mx-auto md:grid grid-cols-2 col-gap-16 row-gap-8">
      <section
        v-for="ministry in content.ministry_list"
        :key="ministry.name"
        class="mt-12 md:w-full px-12"
      >
        <h2>{{ ministry.name }}</h2>
        <img :src="ministry.image" :alt="ministry.name" />

        <!-- date/time -->
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
          >
            {{ ministry.link.label }}
          </NuxtLinkButton>
          <LinkButton
            v-if="ministry.link.external_link"
            :link="ministry.link.external_link"
            type="secondary"
            short
          >
            {{ ministry.link.label }}
          </LinkButton>
        </div>
      </section>
    </div>

    <SocialHead
      title="Children's Ministries"
      :description="content.description"
      :image="content.hero_image"
    />
  </main>
</template>

<script>
import Hero from '~/components/Hero'

export default {
  name: 'ChildrensMinistriesPage',
  components: {
    Hero
  },
  head() {
    return {
      title: "Children's Ministries",
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
    const content = await $content('pages', 'childrens_ministries').fetch()

    return {
      content
    }
  }
}
</script>

<style lang="postcss" scoped>
.sections section {
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
