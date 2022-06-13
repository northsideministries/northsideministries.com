<template>
  <section class="service-times mt-8">
    <h2>Service Times</h2>
    <div class="ml-8">
      <h4>Sunday</h4>
      <p v-for="service in sundayServices" :key="service.name">
        {{ service.name }} — {{ service.time }}
      </p>
    </div>
    <div class="ml-8">
      <h4>Wednesday</h4>
      <p v-for="service in wednesdayServices" :key="service.name">
        {{ service.name }} — {{ service.time }}
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServiceTimes',
  props: {
    sundayServices: {
      type: Array,
      required: true
    },
    wednesdayServices: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="postcss" scoped>
section {
  @apply mt-12;
  
  & > h2 {
    @apply text-center;
  }
}

.service-times > div {
  @apply mt-6;

  & > p {
    @apply mt-3;
  }
}
</style>