<template>
  <div>
    <div v-for="livestream in livestream_list" :key="livestream.teacher" class="mt-6">
      <h3>{{ livestream.teacher }}</h3>
      <p class="mt-2">{{ livestream.class }}</p>

      <!-- TODO: disable if livestream is off -->
      <LinkButton class="mt-2" :link="livestream.link" icon="external-link-alt" iconColor="white" type="primary" :disabled="livestream.disabled ? true : false" wide short>
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
    this.$content('site', 'services').fetch()
      .then(res => this.livestream_list = res.livestream_list)
  }
}
</script>