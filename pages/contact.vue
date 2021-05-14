<template>
  <main class="mb-16">
    <Hero title="Contact Us" :img="content.hero_image">
      {{ content.description }}
    </Hero>
    <div class="content">
      <section class="service-times">
        <h2>Service Times</h2>
        <div>
          <h4>Sunday</h4>
          <p>Sunday School — 9:30am</p>
          <p>Worship Service — 10:30am</p>
          <p>Children's Church — 10:30am</p>
        </div>
        <div>
          <h4>Wednesday</h4>
          <p>AWANA Clubs — 6:30pm</p>
          <p>Prayer Meeting — 6:30pm</p>
          <p>Youth Group — 6:30pm</p>
        </div>
      </section>
      <section>
        <h2>Phone</h2>
        <p class="font-mono mt-4">{{ content.phone }}</p>
        <Button v-show="callable" icon="calling" iconColor="white" class="mt-3">
          <a class="w-full" :href="`tel:+${parseInt(content.phone.replace(/[^0-9]/g, ''), 10)}`">CALL US</a>
        </Button>
      </section>
      <section>
        <h2>Email</h2>
        <Card v-for="contact in content.contact_list" :key="contact.name" :title="contact.name" :subtitle="contact.occupation">
          <address>{{ contact.email }}</address>
          <LinkButton
            type="secondary"
            :link="'mailto:' + contact.email"
            icon="envelope-add"
            iconColor="#2941A3"
            wide
            short
          >
            DRAFT EMAIL
          </LinkButton>
        </Card>
      </section>
      <Location />
    </div>
  </main>
</template>

<script>
import Button from '~/components/Button'
import LinkButton from '~/components/LinkButton'
import Card from '~/components/Card'
import Hero from '~/components/Hero'
import Location from '~/components/Location'
import { isMobile } from '~/utils/mobile'

export default {
  name: 'ContactPage',
  components: {
    Button,
    LinkButton,
    Location,
    Card,
    Hero
  },
  data() {
    return {
      callable: isMobile() ? true : false
    }
  },
  async asyncData({ $content }) {
    const content = await $content('pages', 'contact').fetch();

    return {
      content
    }
  },
}
</script>

<style lang="postcss" scoped>
.content > section {
  @apply mt-12;
}

.service-times > div {
  @apply mt-6;

  & > p {
    @apply mt-3;
  }
}

.card {
  @apply mt-4;

  & address {
    @apply font-mono text-sm;
  }

  & a {
    @apply mt-4;
  }
}
</style>
