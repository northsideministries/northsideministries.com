<template>
  <footer class="bg-primary-900 text-white text-sm flex flex-col px-6 pt-6 pb-8">
    <div class="icons flex flex-row">
      <client-only>
        <!-- TODO: pull links from CMS -->
        <a href="https://www.facebook.com/" alt="Facebook"><unicon name="facebook" fill="white"></unicon></a>
        <a href="https://www.youtube.com/" alt="YouTube"><unicon class="ml-2" name="youtube" fill="white"></unicon></a>
      </client-only>
    </div>
    <p class="mt-4">© 2020 Northside Baptist Church</p>
    <ul class="mt-2">
      <li><nuxt-link to="/">Home</nuxt-link></li>
      <li><nuxt-link to="/ministries">Ministries</nuxt-link></li>
      <li><nuxt-link to="/events">Events</nuxt-link></li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="postcss" scoped>
li {
  @apply mt-4;
}
</style>
