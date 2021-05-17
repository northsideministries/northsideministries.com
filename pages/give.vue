<template>
  <main class="mb-16">
    <Hero title="Give" :img="require('~/assets/img/hero/friends_priscilla-du-preez-unsplash.jpg')">
      Hello World
    </Hero>

    <div class="content mt-12 leading-6 font-bold text-center text-lg">
      Click "GIVE NOW" to give to Northside Baptist Church.
    </div>

    <div class="embed mt-6 content flex flex-col">
      <LinkButton link="https://onrealm.org/NorthsideMinistries/give" class="mx-auto max-w-md" icon="external-link-alt" iconColor="white" wide>GIVE NOW</LinkButton>
      <script id="r-embed-script"></script>
      <!-- <script type="text/javascript">document.getElementById('r-embed-script').src = 'https://onrealm.org/Assets/Embed/giving-embed.js?v=' + Date.now();</script> -->
    </div>

    <div class="content mt-12 leading-6 font-bold">
      If you need assistance with online giving or have any questions about other payment methods, please <a class="text-primary-600 underline">contact us</a>!
    </div>
  </main>
</template>

<script>
import Hero from '~/components/Hero'
import LinkButton from '~/components/LinkButton'

import { embedModded } from '~/utils/realm-giving'

export default {
  name: 'GivePage',
  components: {
    Hero,
    LinkButton
  },
  mounted() {
    embedModded();
  }
}
</script>