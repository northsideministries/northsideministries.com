<template>
  <main class="mb-16">
    <Hero title="Beliefs" :img="content.hero_image">
      {{ content.description }}
    </Hero>

    <div class="px-8 mt-8 md:max-w-screen-md md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-8 md:auto-cols-fr lg:max-w-screen-xl lg:mt-16 lg:mx-auto lg:grid-cols-3">
      <Dropdown v-for="belief in content.belief_list" :key="belief.name" :title="belief.name" class="md:mb-auto">
        <p class="leading-6">{{ belief.description }}</p>
        <p class="mt-4 italic text-sm">{{ belief.references }}</p>
      </Dropdown>
    </div>

    <SocialHead title="Beliefs" :description="content.description" :image="content.hero_image" />
  </main>
</template>

<script>
import Dropdown from '~/components/Dropdown'
import Hero from '~/components/Hero'

export default {
  name: 'BeliefsPage',
  components: {
    Dropdown,
    Hero
  },
  head() {
    return {
      title: 'Beliefs',
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
    const content = await $content('pages', 'beliefs').fetch()

    return {
      content
    }
  }
}
</script>

<style lang="postcss" scoped>
.content > .dropdown {
  @apply mt-4;
}
</style>
