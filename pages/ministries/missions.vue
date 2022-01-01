<template>
  <main class="mb-16">
    <Hero title="Missions" :img="content.hero_image">
      {{ content.description }}
    </Hero>
    <div class="content">
      <section>
        <h2>Fulfilling the Great Commission.</h2>
        <p class="mt-4 leading-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt dictum eros, ac lobortis elit aliquam vel.
          Pellentesque viverra gravida lectus, vitae rhoncus est vehicula eget. Etiam euismod ligula nec orci semper vehicula ut quis lacus.
          Duis quis condimentum ante. Vivamus semper mauris sit amet lacus pretium malesuada. Maecenas ac urna nibh.
          Quisque finibus risus vitae ex vehicula, at dictum ipsum lobortis. Quisque quis augue felis. Sed vulputate tincidunt tellus.
          Cras nec velit facilisis, vulputate arcu nec, porta sem. Fusce semper erat in diam ultricies porttitor.
        </p>
      </section>

      <section class="missions-img-row flex flex-row -mx-3">
        <img src="@/assets/img/missions/annie-spratt-0cgpyigyIkM-unsplash.jpg" alt="Missions Images" />
        <img src="@/assets/img/missions/annie-spratt-cVEOh_JJmEE-unsplash.jpg" alt="Missions Images" />
        <img src="@/assets/img/missions/annie-spratt-0cgpyigyIkM-unsplash.jpg" alt="Missions Images" />
      </section>

      <div class="md:grid grid-cols-2 row-gap-8 col-gap-8">
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
          <div v-for="ministry in content.ministry_list" :key="ministry.name">
            <h4>{{ ministry.name }}</h4>
            <p class="mt-2">
              {{ ministry.description }}
            </p>
          </div>
        </section>
      </div>

      <section>
        <h3>Missionaries</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          condimentum purus velit, quis cursus ligula ullamcorper ac. Praesent
          venenatis egestas finibus. Quisque interdum enim a felis pharetra
          tincidunt.
        </p>

        <div class="missionaries-list mt-6 grid grid-cols-2 row-gap-8">
          <div v-for="country in content.country_list" :key="country.name">
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
.content section {
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
  @apply h-20 w-full object-cover;
}
</style>
