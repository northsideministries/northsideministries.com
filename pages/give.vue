<template>
  <main class="mb-16">
    <Hero title="Give" :img="content.hero_image">
      {{ content.description }}
    </Hero>

    <!-- TODO: clean up page -->

    <!-- TODO: add content sections for what giving funds go towards -->

    <div class="embed content flex flex-col mt-8">
      <section>
        <h2>Giving grows our ministries.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nam venenatis volutpat mauris, vitae tempor eros faucibus eu.
          Ut placerat nulla eu erat ornare iaculis. Vestibulum scelerisque condimentum aliquam.
        </p>
      </section>
      <LinkButton
        link="https://onrealm.org/NorthsideMinistries/give"
        class="mx-auto max-w-md h-16"
        icon="external-link-alt"
        iconColor="white"
        wide
      >
        GIVE NOW
      </LinkButton>
      <script id="r-embed-script"></script>
      <!-- <script type="text/javascript">document.getElementById('r-embed-script').src = 'https://onrealm.org/Assets/Embed/giving-embed.js?v=' + Date.now();</script> -->
    </div>

    <div class="content mt-12 leading-6 font-bold">
      If you need assistance with online giving or have any questions about
      other payment methods, please
      <a class="text-primary-600 underline">contact us</a>!
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
    embedModded()
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
    const content = await $content('pages', 'give').fetch()

    return {
      content
    }
  }
}
</script>

<style lang="postcss" scoped>
.content > section {
  & > h2 {

  }

  & > p {
    @apply mt-2 mb-6;
  }
}
</style>