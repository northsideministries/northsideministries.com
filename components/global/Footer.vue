<template>
  <footer class="bg-primary-900 text-white text-sm flex flex-col px-6 pt-6 pb-8 w-full md:max-w-screen-xl md:mx-auto">
    <div class="icons flex flex-row">
      <client-only>
        <a :href="links.facebook" alt="Facebook"><unicon name="facebook" fill="white"></unicon></a>
        <a :href="links.youtube" alt="YouTube"><unicon class="ml-2" name="youtube" fill="white"></unicon></a>
        <a :href="links.vimeo_channel" alt="Vimeo"><unicon class="ml-2" name="video" fill="white"></unicon></a>
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
