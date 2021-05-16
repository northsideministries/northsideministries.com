<template>
  <div class="hero flex flex-col">
    <div class="h-64 w-full">
      <img class="h-64 object-cover w-full" :src="img" :alt="title" />
    </div>

    <div class="mx-auto -mt-16 w-full px-6 hero-content md:w-3/4 lg:w-1/2">
      <div class="bg-white font-serif py-6 px-8 text-2xl text-primary-600">
        <h1>{{ title }}</h1>
      </div>
      <p class="bg-primary-700 text-white pt-6 pb-8 px-8 leading-7">
        <slot />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    img: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="postcss" scoped>
.hero-content {
  @media (max-width: 767px) {
    margin-top: -78px;
  }
}
</style>
