<template>
  <details ref="dropdown" @click="toggle" class="bg-gray-300 rounded-btn">
    <summary class="flex-row items-center px-5 py-3 cursor-pointer list-none w-full inline-flex">
      <div class="inline-block w-auto">
        <h3 class="inline-block">{{ title }}</h3>
      </div>
      <div class="ml-auto" role="switch">
        <client-only>
          <unicon v-show="!active" name="angle-down" width="36" height="36" fill="black" class="ml-1 mt-1"></unicon>
          <unicon v-show="active" name="angle-up" width="36" height="36" fill="black" class="ml-1 mt-1"></unicon>
        </client-only>
      </div>
    </summary>
    <div class="px-5 pt-2 pb-5">
      <slot />
    </div>
  </details>
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
      this.active = !this.$refs.dropdown.open;
    }
  }
}
</script>

<style lang="postcss">
/* webkit */
details > summary::-webkit-details-marker, details > summary::marker {
  display: none;
}

/* firefox */
details > summary:first-of-type {
    list-style-type: none;
}

details[open] summary ~ * {
  animation: sweep .25s ease-in-out;
}

@keyframes sweep {
  0%    {opacity: 0; margin-left: -10px}
  100%  {opacity: 1; margin-left: 0px}
}
</style>