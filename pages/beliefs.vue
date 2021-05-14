<template>
  <main class="mb-16">
    <Hero title="Beliefs" :img="content.hero_image">
      {{ content.description }}
    </Hero>

    <div class="content mt-8">
      <Dropdown v-for="belief in content.belief_list" :key="belief.name" :title="belief.name">
        <p class="leading-6">{{ belief.description }}</p>
        <p class="mt-4 italic text-sm">{{ belief.references }}</p>
      </Dropdown>
    </div>
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
  async asyncData({ $content }) {
    const content = await $content('pages', 'beliefs').fetch();

    return {
      content
    }
  },
}
</script>

<style lang="postcss" scoped>
.content > details {
  @apply mt-4;
}
</style>