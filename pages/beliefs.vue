<template>
  <main class="mb-16">
    <Hero title="Beliefs" :img="require('~/assets/img/hero/friends_priscilla-du-preez-unsplash.jpg')">
      Hello World
    </Hero>

    <div class="content mt-8">
      <!-- TODO: pull from CMS (??) -->

      <Dropdown title="God the Father">
        <p class="leading-6">We believe that God the Father is perfect in holiness, infinite in wisdom, and measureless in power; that He concerns Himself mercifully in the affairs of men; that He hears and answers prayer; and that He saves from Hell all who come to Him through Jesus Christ.</p>
        <p class="mt-4 italic text-sm">Psalm 22:3; John 17:11; Psalm 147:5; I John 3:3; Matthew 19:26; John 3:16; Matthew 6:26, 28-30; Psalm 65:2; Hebrews 11:6: Romans 5:8: I Timothy 2:5: John 14:6.</p>
      </Dropdown>
      <Dropdown title="Scriptures" class="mt-4">
        <p class="leading-6">We believe that God the Father is perfect in holiness, infinite in wisdom, and measureless in power; that He concerns Himself mercifully in the affairs of men; that He hears and answers prayer; and that He saves from Hell all who come to Him through Jesus Christ.</p>
        <p class="mt-4 italic text-sm">Psalm 22:3; John 17:11; Psalm 147:5; I John 3:3; Matthew 19:26; John 3:16; Matthew 6:26, 28-30; Psalm 65:2; Hebrews 11:6: Romans 5:8: I Timothy 2:5: John 14:6.</p>
      </Dropdown>
    </div>
  </main>
</template>

<script>
import Dropdown from '~/components/Dropdown'
import Hero from '~/components/Hero'

export default {
  name: 'BeliefsPage',
  components: {
    Dropdown,
    Hero
  }
}
</script>