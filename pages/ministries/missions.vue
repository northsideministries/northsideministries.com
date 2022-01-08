<template>
  <main class="mb-16">
    <Hero title="Missions" :img="content.hero_image">
      {{ content.description }}
    </Hero>

    <div class="bg-primary-800 text-white py-12 px-8 -mt-24 pt-24 md:pb-16 md:-mx-16 md:px-32 md:grid lg:grid-cols-3 col-gap-8">
      <section>
        <h2>Fulfilling the Great Commission.</h2>
        <p class="mt-4 leading-6 md:max-w-xl">
          {{ content.paragraph }}
        </p>
      </section>
      <section>
        <h3>Home Missionaries</h3>
        <p>
          We support missionaries directly sent from our church out into the
          mission field.
        </p>

        <div class="mt-4">
          <p v-for="missionary in content.home_list" :key="missionary.name">
            <span class="font-bold">{{ missionary.name }}</span> –
            {{ missionary.location }}
          </p>
        </div>
      </section>
      <section>
          <h3>Ministries</h3>
          <div class="mt-4" v-for="ministry in content.ministry_list" :key="ministry.name">
            <h4>{{ ministry.name }}</h4>
            <p class="mt-2">
              {{ ministry.description }}
            </p>
          </div>
        </section>
    </div>

    <div class="missions-img-row flex flex-row -mx-16">
      <img src="@/assets/img/missions/annie-spratt-0cgpyigyIkM-unsplash.jpg" alt="Missions Images" />
      <img src="@/assets/img/missions/annie-spratt-cVEOh_JJmEE-unsplash.jpg" alt="Missions Images" />
      <img src="@/assets/img/missions/annie-spratt-0cgpyigyIkM-unsplash.jpg" alt="Missions Images" />
    </div>

    <div class="content">
      <section>
        <h3>Missionaries</h3>
        <p>
          We support numerous missionaries across the globe who are actively spreading the gospel.
        </p>

        <div class="missionaries-list mt-6 grid grid-cols-2 row-gap-8">
          <div v-for="country in sorted_missionaries" :key="country.name">
            <h4>{{ country.name }}</h4>
            <ul>
              <li
                v-for="missionary in country.missionary_list"
                :key="missionary.name"
              >
                {{ missionary.name }}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>

    <SocialHead
      title="Missions"
      :description="content.description"
      :image="content.hero_image"
    />
  </main>
</template>

<script>
import Hero from '~/components/Hero'

export default {
  name: 'MissionsPage',
  components: {
    Hero
  },
  computed: {
    sorted_missionaries() {
      // https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
      return this.content.country_list.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    }
  },
  head() {
    return {
      title: 'Missions',
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
    const content = await $content('pages', 'missions').fetch()

    return {
      content
    }
  }
}
</script>

<style lang="postcss" scoped>
section {
  @apply mt-16;

  & > h3 {
    @apply mb-4 text-center;
  }

  & > div > p {
    @apply mt-1;
  }
}

.missionaries-list > div {
  & > h4 {
    @apply mb-3;
  }

  & li {
    @apply mt-1;
  }
}

.missions-img-row img {
  @apply h-16 w-full object-cover;
}
</style>
