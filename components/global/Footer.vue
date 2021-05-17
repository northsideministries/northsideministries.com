<template>
  <footer class="bg-primary-900 text-white text-sm flex flex-col px-6 py-8 w-full md:max-w-screen-xl md:mx-auto">
    <div class="icons flex flex-col md:flex-row md:items-center">
      <client-only>
        <a :href="links.facebook" aria-label="Facebook" class="flex flex-row items-center"><unicon name="facebook" fill="white" width="32" height="32"></unicon><span class="ml-2">Facebook</span></a>
        <a :href="links.youtube" aria-label="YouTube" class="flex flex-row items-center mt-1 md:mt-0"><unicon class="md:ml-4" name="youtube" fill="white" width="32" height="32"></unicon><span class="ml-2">YouTube</span></a>
        <a :href="links.vimeo_channel" aria-label="Vimeo" class="flex flex-row items-center mt-1 md:mt-0"><unicon class="md:ml-4" name="video" fill="white" width="32" height="32"></unicon><span class="ml-2">Vimeo</span></a>
      </client-only>
    </div>
    <p class="mt-4">© 2021 Northside Baptist Church</p>
    <ul class="grid grid-cols-2 mt-2 max-w-sm">
      <li><nuxt-link to="/">Home</nuxt-link></li>
      <li><nuxt-link to="/about">About</nuxt-link></li>
      <li><nuxt-link to="/ministries">Ministries</nuxt-link></li>
      <li><nuxt-link to="/events">Events</nuxt-link></li>
      <li><nuxt-link to="/watch">Watch</nuxt-link></li>
      <li><nuxt-link to="/give">Give</nuxt-link></li>
      <li><nuxt-link to="/contact">Contact</nuxt-link></li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      links: []
    }
  },
  mounted() {
    this.$content('site', 'services').fetch()
      .then(res => this.links = res)
  }
}
</script>

<style lang="postcss" scoped>
li {
  @apply mt-4;
}
</style>
