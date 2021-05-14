<template>
  <div class="inline-block">
    <div class="button dropdown-button" :class="[ active ? 'active' : '' ]">
      <a class="text-center w-full px-6 py-3" :href="link">{{ label }}</a>

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
  watch: {
    $route: 'close'
  },
  methods : {
    toggle() {
      this.active = !this.active
      this.$emit('toggle')
    },
    close() {
      this.active = false;
      this.$emit('close')
    }
  }
}
</script>

<style lang="postcss" scoped>
.button::v-deep {
  @apply px-0;
}

.dropdown-button {
  @apply transition-all duration-200;
  @apply ml-auto;
  @apply w-56;

  &.active {
    @apply bg-gray-200 border-transparent;
    @apply w-64;
  }
}
</style>