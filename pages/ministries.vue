<template>
  <main class="mb-24">
    <Hero title="Ministries" :img="require('~/assets/img/hero/friends_priscilla-du-preez-unsplash.jpg')"></Hero>

    <div class="content">
      <!-- TODO: pull content from CMS -->
      
      <section>
        <h2>Missions</h2>
        <img :src="require('~/assets/img/hero/friends_priscilla-du-preez-unsplash.jpg')" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae erat fringilla, interdum purus sed, tristique leo. Curabitur rutrum quis ipsum ut tempus. Fusce posuere ex sit amet libero ornare, quis tincidunt lacus dictum. Sed ullamcorper lorem et orci posuere, vehicula ultrices felis fermentum.</p>
        <NuxtLinkButton to="/missions" type="secondary" short>SEE WHO WE SUPPORT</NuxtLinkButton>
      </section>

      <section>
        <h2>Children's Ministries</h2>
        <img :src="require('~/assets/img/hero/friends_priscilla-du-preez-unsplash.jpg')" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae erat fringilla, interdum purus sed, tristique leo. Curabitur rutrum quis ipsum ut tempus. Fusce posuere ex sit amet libero ornare, quis tincidunt lacus dictum. Sed ullamcorper lorem et orci posuere, vehicula ultrices felis fermentum.</p>
        <NuxtLinkButton to="/childrens-ministries" type="secondary" short>FIND A PROGRAM</NuxtLinkButton>
      </section>

      <section>
        <h2>Youth Ministries</h2>
        <img :src="require('~/assets/img/hero/friends_priscilla-du-preez-unsplash.jpg')" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae erat fringilla, interdum purus sed, tristique leo. Curabitur rutrum quis ipsum ut tempus. Fusce posuere ex sit amet libero ornare, quis tincidunt lacus dictum. Sed ullamcorper lorem et orci posuere, vehicula ultrices felis fermentum.</p>
        <NuxtLinkButton to="/youth-ministries" type="secondary" short>FIND A PROGRAM</NuxtLinkButton>
      </section>

      <section>
        <h2>Sunday School</h2>
        <img :src="require('~/assets/img/hero/friends_priscilla-du-preez-unsplash.jpg')" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae erat fringilla, interdum purus sed, tristique leo. Curabitur rutrum quis ipsum ut tempus. Fusce posuere ex sit amet libero ornare, quis tincidunt lacus dictum. Sed ullamcorper lorem et orci posuere, vehicula ultrices felis fermentum.</p>
        <NuxtLinkButton to="/sunday-school" type="secondary" short>JOIN A CLASS</NuxtLinkButton>
      </section>

      <section>
        <h2>Sunday School</h2>
        <img :src="require('~/assets/img/hero/friends_priscilla-du-preez-unsplash.jpg')" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae erat fringilla, interdum purus sed, tristique leo. Curabitur rutrum quis ipsum ut tempus. Fusce posuere ex sit amet libero ornare, quis tincidunt lacus dictum. Sed ullamcorper lorem et orci posuere, vehicula ultrices felis fermentum.</p>
        <LinkButton link="https://www.northsidecharleston.com" type="secondary" short>LEARN MORE</LinkButton>
      </section>
    </div>
  </main>
</template>

<script>
import Hero from '~/components/Hero'
import LinkButton from '~/components/LinkButton'
import NuxtLinkButton from '~/components/NuxtLinkButton'

export default {
  name: 'AboutPage',
  components: {
    Hero,
    LinkButton,
    NuxtLinkButton
  }
}
</script>

<style lang="postcss" scoped>
.content > section {
  @apply mt-24 flex flex-col;

  & > img, & > p, & > a {
    @apply mt-6;
  }

  & > img {
    @apply object-cover h-24 w-full;
  }

  & > p {
    @apply leading-6;
  }

  & > a {
    @apply mx-auto;
  }
}
</style>