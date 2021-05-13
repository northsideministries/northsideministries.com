<template>
  <main class="mb-16">
    <Hero title="Missions" :img="require('~/assets/img/hero/friends_priscilla-du-preez-unsplash.jpg')">
      Hello World
    </Hero>
    <div class="content">
      <section>
        <h2>Home Missionaries</h2>
        <p>We support missionaries directly sent from our church out into the mission field.</p>

        <!-- TODO: import from CMS -->

        <div class="mt-4">
          <p><span class="font-bold">Rickson Kihleng</span> – Micronesia</p>
          <p><span class="font-bold">Roland Mitchum</span> – British Columbia</p>
          <p><span class="font-bold">Jim Stackhouse</span> – Papua New Guinea</p>
          <p><span class="font-bold">Robert Sulik</span> – Poland</p>
        </div>
      </section>

      <section>
        <h2>Ministries</h2>
        <h4>Shalom</h4>
        <p class="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer velit dui, consectetur et dolor fringilla, molestie convallis dui.</p>
      </section>

      <section>
        <h2>Missionaries</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum purus velit, quis cursus ligula ullamcorper ac. Praesent venenatis egestas finibus. Quisque interdum enim a felis pharetra tincidunt.</p>

        <div class="missionaries-list mt-6 grid grid-cols-2 row-gap-8">
          <div>
            <h4>Japan</h4>
            <ul>
              <li>Tim Melton</li>
              <li>John Knox</li>
              <li>Matthew Starin</li>
            </ul>
          </div>
          <div>
            <h4>Italy</h4>
            <ul>
              <li>Frank Maietta</li>
              <li>Joey Tacon</li>
            </ul>
          </div>
          <div>
            <h4>Italy</h4>
            <ul>
              <li>Frank Maietta</li>
              <li>Joey Tacon</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import Hero from '~/components/Hero'

export default {
  name: 'MissionsPage',
  components: {
    Hero
  }
}
</script>

<style lang="postcss" scoped>
.content > section {
  @apply mt-16;

  & > h2 {
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
</style>