<template>
  <div class="inline-block">
    <div class="button dropdown-button">
      <a class="pr-5 py-3" :href="link">{{ label }}</a>

      <div class="ml-auto h-full border-l-2 border-solid border-gray-400 pl-2 py-1 cursor-pointer" @click="toggle">
        <client-only>
          <unicon v-show="!active" name="angle-down" width="30" height="30" fill="black" class="ml-1 mt-1"></unicon>
          <unicon v-show="active" name="angle-up" width="30" height="30" fill="black" class="ml-1 mt-1"></unicon>
        </client-only>
      </div>
    </div>
    <div v-show="active" class="dropdown-contents inline-block float-right">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DropdownButton',
  props: {
    label: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      active: false
    }
  },
  methods : {
    toggle() {
      this.active = !this.active
      this.$emit('toggle')
    }
  }
}
</script>

<style lang="postcss" scoped>

</style>