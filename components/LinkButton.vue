<template>
  <a
    class="button"
    role="link"
    target="_blank"
    :href="disabled ? false : link"
    :class="[
      type ? type : '',
      wide ? 'wide' : '',
      icon ? 'icon' : '',
      short ? 'short' : '',
      disabled ? 'disabled' : ''
    ]"
  >
    <!-- add unicon prop -->
    <client-only v-if="icon">
      <unicon :name="icon" :fill="iconColor"></unicon>
    </client-only>

    <slot />
  </a>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true,
      default: '#'
    },
    icon: {
      type: String,
      validator(value) {
        return value.length > 0
      },
      required: false
    },
    iconColor: {
      type: String,
      required: false
    },
    type: {
      type: String,
      default: 'primary',
      validator(value) {
        return ['primary', 'secondary', 'cta', 'tertiary'].indexOf(value) !== -1
      },
      required: false
    },
    wide: {
      type: Boolean,
      default: false,
      required: false
    },
    short: {
      type: Boolean,
      default: false,
      requried: false
    },
    disabled: {
      type: Boolean,
      default: false,
      requried: false
    }
  }
}
</script>
