<template>
  <main class="mb-16">
    <Hero title="Contact Us" :img="page.hero_image">
      {{ page.description }}
    </Hero>
    <div class="content">
      <section class="service-times">
        <h2>Service Times</h2>
        <div>
          <h4>Sunday</h4>
          <p v-for="service in sunday_services" :key="service.name">{{ service.name }} — {{ service.time }}</p>
        </div>
        <div>
          <h4>Wednesday</h4>
          <p v-for="service in wednesday_services" :key="service.name">{{ service.name }} — {{ service.time }}</p>
        </div>
      </section>
      <section>
        <h2>Phone</h2>
        <p class="font-mono mt-4">{{ contact.phone }}</p>
        <Button v-show="callable" icon="calling" iconColor="white" class="mt-3">
          <a class="w-full" :href="`tel:+${parseInt(contact.phone.replace(/[^0-9]/g, ''), 10)}`">CALL US</a>
        </Button>
      </section>
      <section>
        <h2>Email</h2>
        <Card v-for="contact in page.contact_list" :key="contact.name" :title="contact.name" :subtitle="contact.occupation">
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
    const page = await $content('pages', 'contact').fetch();
    const contact = await $content('church', 'contact').fetch();
    const service_times = await $content('church', 'service_times').fetch();
    const sunday_services = service_times.services.filter(service => service.day === 'Sunday');
    const wednesday_services = service_times.services.filter(service => service.day === 'Wednesday');

    return {
      page,
      contact,
      sunday_services,
      wednesday_services
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
