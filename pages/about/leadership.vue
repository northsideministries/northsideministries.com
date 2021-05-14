<template>
  <main class="mb-16">
    <Hero title="Our Leadership" :img="content.hero_image">
      {{ content.description }}
    </Hero>
    <div class="content mt-12">
      <section v-for="leader in content.leadership_list" :key="leader.name" class="mt-12 w-5/6">
        <img class="w-56" :src="leader.image" alt="Jonathan Cresswell"/>
        <h3 class="mt-4">{{ leader.name }}</h3>
        <h5 class="mt-1">{{ leader.occupation }}</h5>
        <p class="mt-4">{{ leader.description }}</p>
        <div class="phone flex flex-row items-center mt-4">
          <client-only><unicon name="phone-alt" fill="black" width="19" height="19"></unicon></client-only>
          <p class="text-sm font-mono ml-2">{{ leader.phone }}</p>
        </div>
        <div class="email flex flex-row items-center mt-1">
          <client-only><unicon name="envelope-add" fill="black" width="19" height="19"></unicon></client-only>
          <p class="text-sm ml-2">{{ leader.email }}</p>
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
  },
  async asyncData({ $content }) {
    const content = await $content('pages', 'leadership').fetch();

    return {
      content
    }
  },
}
</script>

<style lang="postcss" scoped>
.content > section {
  &:nth-child(odd) {
    @apply ml-auto;
  }

  &:nth-child(even) {
    @apply ml-0 mr-auto;
  }
}
</style>