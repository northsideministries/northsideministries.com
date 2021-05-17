<template>
  <div class="inline-block relative">
    <div class="button dropdown-button" :class="[ active ? 'active' : '', expand ? 'expand' : '' ]">
      <a class="text-center w-full px-6 py-3" :href="link ? link : null">{{ label }}</a>

      <div class="ml-auto h-full border-l-2 border-solid border-gray-400 pl-2 py-1 cursor-pointer" tabindex="0" @click="toggle" @keypress.space.prevent="toggle" role="switch" aria-label="Dropdown Control">
        <client-only>
          <unicon v-show="!active" name="angle-down" width="30" height="29" fill="black" class="ml-1 mt-1"></unicon>
          <unicon v-show="active" name="angle-up" width="30" height="29" fill="black" class="ml-1 mt-1"></unicon>
        </client-only>
      </div>
    </div>
    <div v-show="active" class="dropdown-contents">
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
      required: false
    },
    expand: {
      type: Boolean,
      default: true,
      required: false
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

  &.expand {
    @apply w-56;
  }

  &.active {
    @apply bg-gray-200 border-transparent;

    &.expand {
      @apply w-64;
    }
  }
}
</style>