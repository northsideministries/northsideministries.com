<template>
  <main class="mb-16">
    <Hero title="Sunday School" :img="content.hero_image">
      {{ content.description }}
    </Hero>
    <div class="content">
      <section class="p-2 lg:px-16 lg:py-12 lg:max-w-none lg:flex lg:flex-row">
        <div class="lg:w-1/2 lg:my-auto lg:mr-16">
          <h2>Watch Live</h2>
          <p class="mt-2">Sunday School starts at 9:30am and is livestreamed through Zoom.</p>
        </div>
        <LivestreamClassList class="mt-8 p-2 w-full lg:mt-0 lg:w-3/4"/>
      </section>

      <section class="classes">
        <h2>Classes</h2>
        <div>
          <h3>Children</h3>
          <div class="flex flex-col">
            <p
              v-for="_class in content.children_class_list"
              :key="_class.name"
              class="flex flex-row w-full px-5 py-4"
            >
              <span class="w-1/2">{{ _class.name }}</span><span class="flex-1 text-right ml-auto">{{ _class.room }}</span>
            </p>
          </div>
        </div>
        <div>
          <h3>Teens</h3>
          <div class="flex flex-col">
            <p
              v-for="_class in content.teen_class_list"
              :key="_class.name"
              class="flex flex-row w-full px-5 py-4"
            >
              <span class="w-1/2">{{ _class.name }}</span><span class="flex-1 text-right ml-auto">{{ _class.room }}</span>
            </p>
          </div>
        </div>
        <div>
          <h3>Adults</h3>
          <div class="flex flex-col">
            <p
              v-for="_class in content.adult_class_list"
              :key="_class.name"
              class="flex flex-row w-full px-5 py-4"
            >
              <span class="w-1/2">{{ _class.name }}</span><span class="flex-1 text-right ml-auto">{{ _class.room }}</span>
            </p>
          </div>
        </div>
        <div>
          <h3>Senior Citizens</h3>
          <div class="flex flex-col">
            <p
              v-for="_class in content.senior_citizen_class_list"
              :key="_class.name"
              class="flex flex-row w-full px-5 py-4"
            >
              <span class="w-1/2">{{ _class.name }}</span><span class="flex-1 text-right ml-auto">{{ _class.room }}</span>
            </p>
          </div>
        </div>
      </section>
    </div>

    <SocialHead
      title="Sunday School"
      :description="content.description"
      :image="content.hero_image"
    />
  </main>
</template>

<script>
import LivestreamClassList from '~/components/LivestreamClassList'
import Hero from '~/components/Hero'

export default {
  name: 'SundaySchoolPage',
  components: {
    LivestreamClassList,
    Hero
  },
  head() {
    return {
      title: 'Sunday School',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.content.description
        }
      ]
    }
  },
  async asyncData({ $content }) {
    const content = await $content('pages', 'sunday_school').fetch()

    return {
      content
    }
  }
}
</script>

<style lang="postcss" scoped>
.content section {
  @apply mt-16;

  & > h2 {
    @apply text-left;
  }

  & > p {
    @apply mt-6;
  }
}

.classes > div {
  @apply mt-6;

  & > h3 {
    @apply mb-6;
  }

  & > div > p {
    &:nth-child(odd) {
      @apply bg-gray-200;
    }

    &:nth-child(even) {
      @apply bg-gray-100;
    }
  }
}
</style>
