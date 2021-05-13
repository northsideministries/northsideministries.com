<template>
  <main class="mb-16">
    <Hero title="Sunday School" :img="require('~/assets/img/hero/friends_priscilla-du-preez-unsplash.jpg')">
      Hello World
    </Hero>
    <div class="content">
      <!-- TODO: pull content from CMS -->

      <section>
        <h2>Watch Live</h2>
        <p>Sunday School starts at 9:30am and is livestreamed through Zoom.</p>

        <!-- TODO: abstract section to separate component for use on this page and "Watch" page -->
        <div class="watch">
          <h3>Mr. Greg Rysta</h3>
          <p>Challengers Group</p>
          <LinkButton :link="rysta_link" icon="external-link-alt" iconColor="white" type="primary" :disabled="rysta_live" wide short>
            JOIN ON ZOOM
          </LinkButton>
        </div>
        <div class="watch">
          <h3>Dr. Cecil Beach</h3>
          <p>Families in Christ</p>
          <LinkButton :link="beach_link" icon="external-link-alt" iconColor="white" type="primary" :disabled="beach_live" wide short>
            JOIN ON ZOOM
          </LinkButton>
        </div>
      </section>

      <section class="classes">
        <h2>Classes</h2>
        <div>
          <h3>Children</h3>
          <div class="flex flex-col">
            <p v-for="_class in children_classes" :key="_class.name" class="flex flex-row w-full px-5 py-4">{{ _class.name }}<span class="ml-auto">{{ _class.room }}</span></p>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import LinkButton from '~/components/LinkButton'
import Hero from '~/components/Hero'

export default {
  name: 'SundaySchoolPage',
  components: {
    LinkButton,
    Hero
  },
  data() {
    return {
      children_classes: [
        {
          name: 'Nursery',
          room: 'Elementary 208'
        },
        {
          name: 'Toddler (2)',
          room: 'Elementary 209'
        },
        {
          name: 'K5 and 1st Grade',
          room: 'Elementary 212'
        },
        {
          name: 'Grades 2-3',
          room: 'Elementary 203'
        },
      ]
    }
  }
}
</script>

<style lang="postcss" scoped>
.content > section {
  @apply mt-16;

  & > h2 {
    @apply text-center;
  }

  & > p {
    @apply mt-4;
  }
}

.watch {
  @apply mt-6;

  & > p {
    @apply mt-2;
  }

  & > a {
    @apply mt-2;
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