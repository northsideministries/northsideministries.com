<template>
  <main class="mb-16">
    <Hero title="Give" :img="content.hero_image">
      {{ content.description }}
    </Hero>

    <!-- TODO: clean up page -->

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

    <SocialHead
      title="Give"
      :description="content.description"
      :image="content.hero_image"
    />
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
  },
  head() {
    return {
      title: 'Give',
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
    const content = await $content('pages', 'give').fetch();
    
    return {
      content
    }
  }
}
</script>