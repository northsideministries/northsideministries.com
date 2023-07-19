<template>
  <section class="service-times mt-8">
    <h2>Service Times</h2>
    <div class="md:ml-8 flex flex-row">
      <h4 class="w-1/3 text-right">Sunday</h4>
      <div class="flex flex-col ml-4">
        <p class="mb-1" v-for="service in sundayServices" :key="service.name">
          {{ service.name }} — {{ service.time }}
        </p>
      </div>
    </div>
    <div class="md:ml-8 flex flex-row">
      <h4 class="w-1/3 text-right">Wednesday</h4>
      <div class="flex flex-col ml-4">
        <p class="mb-2" v-for="service in wednesdayServices" :key="service.name">
          {{ service.name }} — {{ service.time }}
        </p>
      </div>
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