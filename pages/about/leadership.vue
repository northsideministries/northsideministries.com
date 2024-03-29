<template>
  <main class="mb-24">
    <Hero title="Our Leadership" :img="content.hero_image">
      {{ content.description }}
    </Hero>
    <div class="content md:mx-auto">
      <section
        v-for="leader in content.leadership_list"
        :key="leader.name"
        class="mt-12 flex flex-col max-w-lg mx-auto md:mt-24 md:flex-row"
      >
        <img class="w-48 mx-auto md:mx-0 flex-shrink-0" :src="leader.image" :alt="leader.name" />
        <div class="mt-4 max-w-xs md:mt-0 md:mx-0">
          <h3 class="md:mt-8 md:text-2xl">{{ leader.name }}</h3>
          <h5 class="mt-1 md:mt-2">{{ leader.occupation }}</h5>
          <p class="mt-4">{{ leader.description }}</p>
          <div class="phone flex flex-row items-center mt-4" v-if="leader.phone">
            <client-only
              ><unicon
                name="phone-alt"
                fill="black"
                width="19"
                height="19"
              ></unicon
            ></client-only>
            <p class="text-sm font-mono ml-2">{{ leader.phone }}</p>
          </div>
          <div class="email flex flex-row items-center mt-4">
            <client-only
              ><unicon
                name="envelope-add"
                fill="black"
                width="19"
                height="19"
              ></unicon
            ></client-only>
            <p class="text-sm ml-2">{{ leader.email }}</p>
          </div>
        </div>
      </section>
    </div>

    <SocialHead
      title="Our Leadership"
      :description="content.description"
      :image="content.hero_image"
    />
  </main>
</template>

<script>
import Hero from '~/components/Hero'

export default {
  name: 'LeadershipPage',
  components: {
    Hero
  },
  head() {
    return {
      title: 'Our Leadership',
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
    const content = await $content('pages', 'leadership').fetch()

    return {
      content
    }
  }
}
</script>

<style lang="postcss" scoped>
.content > section {
  &:nth-child(odd) {
    & > img {
      @apply ml-0;
    }

    @screen md {
      @apply flex-row-reverse mx-auto;

      & > img {
        @apply ml-8;
      }
    }
  }

  &:nth-child(even) {
    @apply text-right;

    & > div {
      @apply ml-auto;
    }

    & .phone > .unicon, & .email > .unicon {
      @apply ml-auto;
    }

    & > img {
      @apply mr-0;
    }

    @screen md {
      @apply mx-auto text-left;

      & > img {
        @apply mr-8;
      }

      & .phone > .unicon, & .email > .unicon {
        @apply ml-0;
      }
    }
  }
}
</style>