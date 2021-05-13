<template>
  <main class="flex flex-col text-center py-32">
    <template v-if="error.statusCode === 404">
      <h1>Page not found.</h1>
    </template>

    <template v-else>
      <h1>An error occurred</h1>
    </template>

    <aside class="mx-auto font-serif mt-12 text-sm">
      <NuxtLinkButton to="/" type="primary" class="mx-auto">RETURN HOME</NuxtLinkButton>
      <p class="italic">“...he was lost, and is found.”</p>
      <p class="text-right mt-2">Luke 15:24</p>
    </aside>
  </main>
</template>

<script>
import NuxtLinkButton from '~/components/NuxtLinkButton'

export default {
  name: 'ErrorPage',
  props: ['error'],
  components: {
    NuxtLinkButton
  }
}
</script>
