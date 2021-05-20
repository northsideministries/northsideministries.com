<template>
  <div class="dropdown bg-gray-300 rounded-btn" @click="toggle">
    <div class="flex-row items-center px-5 py-3 cursor-pointer list-none w-full inline-flex">
      <div class="inline-block w-auto">
        <h3 class="inline-block">{{ title }}</h3>
      </div>
      <div class="ml-auto" role="checkbox" tabindex="0" aria-label="dropdown toggle" :aria-checked="active">
        <client-only>
          <unicon v-show="!active" name="angle-down" width="36" height="36" fill="black" class="ml-1 mt-1"></unicon>
          <unicon v-show="active" name="angle-up" width="36" height="36" fill="black" class="ml-1 mt-1"></unicon>
        </client-only>
      </div>
    </div>
    <transition name="slide-up">
      <div class="px-5 pt-2 pb-5" v-show="active">
        <slot />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Dropdown',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      active: false
    }
  },
  methods: {
    toggle() {
      this.active = !this.active
    }
  }
}
</script>
