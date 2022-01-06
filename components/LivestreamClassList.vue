<template>
  <div>
    <div
      v-for="livestream in livestream_list"
      :key="livestream.teacher"
      class="livestream-class"
    >
      <h3>{{ livestream.teacher }}</h3>
      <p class="mt-2">{{ livestream.class }}</p>

      <!-- T_ODO: disable if livestream is off (currently not applicable) -->
      <LinkButton
        class="mt-2"
        :link="livestream.link"
        icon="external-link-alt"
        iconColor="white"
        type="primary"
        :disabled="livestream.disabled ? true : false"
        wide
      >
        JOIN ON ZOOM
      </LinkButton>
    </div>
  </div>
</template>

<script>
import LinkButton from '~/components/LinkButton'

export default {
  name: 'LivestreamClassList',
  components: {
    LinkButton
  },
  data() {
    return {
      livestream_list: []
    }
  },
  mounted() {
    this.$content('site', 'services')
      .fetch()
      .then(res => (this.livestream_list = res.livestream_list))
  }
}
</script>

<style lang="postcss" scoped>
.livestream-class:not(:first-child) {
  @apply mt-6;
}
</style>