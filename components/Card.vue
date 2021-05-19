<template>
  <div
    class="card flex flex-col rounded-btn shadow-regular bg-white"
    role="region"
  >
    <div v-if="img">
      <img
        :src="img"
        :alt="title"
        class="object-cover w-full h-32 rounded-t-btn"
      />
    </div>
    <div class="px-4 py-6">
      <h3>{{ title }}</h3>
      <h5 v-if="subtitle !== ''" class="mt-1">{{ subtitle }}</h5>
      <div class="mt-5">
        <slot />
      </div>
      <div v-if="location || time" class="details font-mono mt-5 -ml-1">
        <div v-if="location">
          <client-only
            ><unicon
              name="map-marker-alt"
              fill="black"
              width="19"
              height="19"
            ></unicon
          ></client-only>
          <p>{{ location }}</p>
        </div>
        <div v-if="time">
          <client-only
            ><unicon
              name="clock-three"
              fill="black"
              width="19"
              height="19"
            ></unicon
          ></client-only>
          <p>{{ time }}</p>
        </div>
      </div>
      <LinkButton v-if="link" type="secondary" class="mt-4" :link="link" wide
        >READ MORE</LinkButton
      >
    </div>
  </div>
</template>

<script>
import LinkButton from '~/components/LinkButton'

export default {
  name: 'Card',
  components: {
    LinkButton
  },
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: false
    },
    location: {
      type: String,
      required: false
    },
    time: {
      type: String,
      required: false
    },
    link: {
      type: String,
      required: false
    }
  }
}
</script>

<style lang="postcss" scoped>
h3 {
  @apply text-xl font-medium;
}

.details > div {
  @apply flex flex-row items-center mt-1;

  & > p {
    @apply ml-2 text-sm;
  }
}
</style>
