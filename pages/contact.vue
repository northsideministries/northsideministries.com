<template>
  <main class="mb-16">
    <Hero title="Contact Us" :img="require('~/assets/img/hero/friends_priscilla-du-preez-unsplash.jpg')">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel risus magna. Mauris mattis eros vitae metus
      lobortis, ut vehicula augue interdum.
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
        <!-- TODO: export phone to CMS -->
        <p class="font-mono mt-4">(832) 797-2693</p>
        <Button v-show="callable" icon="calling" iconColor="white" class="mt-3">
          <a class="w-full" href="tel:+18437972693">CALL US</a>
        </Button>
      </section>
      <section>
        <h2>Email</h2>
        <!-- TODO: export emails to CMS -->
        <Card title="Jonathan Cresswell" subtitle="Senior Pastor">
          <address>jcresswell@northsideministries.com</address>
          <LinkButton
            type="secondary"
            link="mailto:jcresswell@northsideministries.com"
            icon="envelope-add"
            iconColor="#2941A3"
            wide
            short
          >
            DRAFT EMAIL
          </LinkButton>
        </Card>
        <Card title="Linda McGinnis" subtitle="Secretary">
          <address>lmcginnis@northsideministries.com</address>
          <LinkButton
            type="secondary"
            link="mailto:lmcginnis@northsideministries.com"
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
  }
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
