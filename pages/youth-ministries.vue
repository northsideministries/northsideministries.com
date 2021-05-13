<template>
  <main class="mb-16">
    <Hero title="Youth Ministries" :img="require('~/assets/img/hero/friends_priscilla-du-preez-unsplash.jpg')">
      Hello World
    </Hero>
    <div class="content">
      <!-- TODO: content and images from CMS -->

      <section>
        <h2>Youth Group</h2>
        <img src="~/assets/img/hero/friends_priscilla-du-preez-unsplash.jpg" alt="Youth Group" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam congue dolor in turpis consectetur tempus eu ut orci. Nunc a urna pellentesque, malesuada velit eu, tempus eros. Nam aliquam feugiat leo, sit amet semper ante consequat quis. Vestibulum tempus sit amet enim in convallis. Praesent consequat ut tortor vel tempor.</p>
        <div class="mt-6">
          <h3>Wednesday</h3>
          <p>Upstairs Youth Center</p>
          <p>Youth Group — 6:30pm</p>
        </div>
      </section>

      <section>
        <h2>Community</h2>
        <img src="~/assets/img/hero/friends_priscilla-du-preez-unsplash.jpg" alt="Youth Group" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam congue dolor in turpis consectetur tempus eu ut orci. Nunc a urna pellentesque, malesuada velit eu, tempus eros. Nam aliquam feugiat leo, sit amet semper ante consequat quis. Vestibulum tempus sit amet enim in convallis. Praesent consequat ut tortor vel tempor.</p>
        <div class="mt-4 inline-block">
          <NuxtLinkButton to="/events" type="secondary" short>
            FIND AN EVENT
          </NuxtLinkButton>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import NuxtLinkButton from '~/components/NuxtLinkButton'
import Hero from '~/components/Hero'

export default {
  name: 'YouthMinistriesPage',
  components: {
    NuxtLinkButton,
    Hero
  }
}
</script>

<style lang="postcss" scoped>
.content > section {
  @apply w-11/12 mt-16;

  &:nth-child(odd) {
    @apply -mr-6 float-right;
  }

  &:nth-child(even) {
    @apply -ml-6 float-left;

    & > h2 {
      @apply text-right;
    }

    & > p, & > div {
      @apply ml-8;
    }

    /* & > img {
      @apply -ml-6;
    } */
  }

  & > h2 {
    @apply font-normal text-2xl;
  }

  & > img {
    @apply mt-4;
  }

  & > p {
    @apply mt-4 leading-6;
  }

  & > div {
    & > h3 {
      @apply mb-2;
    }

    & > p {
      @apply mt-1;
    }
  }
}
</style>