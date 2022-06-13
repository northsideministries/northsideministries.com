<template>
  <main class="mb-16">
    <Hero title="Contact Us" :img="page.hero_image">
      {{ page.description }}
    </Hero>
    <div class="content">
      <div class="md:grid grid-cols-2">
        <ServiceTimes :wednesdayServices="wednesday_services" :sundayServices="sunday_services" />
        <section class="mt-8 md:ml-16">
          <h2>Phone</h2>
          <p class="font-mono mt-4 text-center">{{ contact.phone }}</p>
          <Button v-show="callable" icon="calling" iconColor="white" class="mt-3 mx-auto">
            <a
              class="w-full"
              :href="`tel:+${parseInt(contact.phone.replace(/[^0-9]/g, ''), 10)}`"
              >
              CALL US
            </a>
          </Button>
        </section>
      </div>
      <section>
        <h2>Email</h2>

        <!-- text overflow on certain md screen sizes -->
        <div class="md:grid md:grid-cols-2 md:col-gap-4 md:row-gap-2">
          <Card
            v-for="contact in page.contact_list"
            :key="contact.name"
            :title="contact.name"
            :subtitle="contact.occupation"
          >
            <address>{{ contact.email }}</address>
            <LinkButton
              type="secondary"
              :link="'mailto:' + contact.email"
              icon="envelope-add"
              iconColor="#2941A3"
              wide
              short
            >
              SEND EMAIL
            </LinkButton>
          </Card>
        </div>
      </section>

      <section>
        <h2>Our Location</h2>
        <Location class="mt-6" />
      </section>
    </div>

    <SocialHead
      title="Contact Us"
      :description="page.description"
      :image="page.hero_image"
    />
  </main>
</template>

<script>
import Button from '~/components/Button'
import LinkButton from '~/components/LinkButton'
import Card from '~/components/Card'
import Hero from '~/components/Hero'
import Location from '~/components/Location'
import ServiceTimes from '~/components/ServiceTimes'
import { isMobile } from '~/utils/mobile'

export default {
  name: 'ContactPage',
  components: {
    Button,
    LinkButton,
    Location,
    Card,
    Hero,
    ServiceTimes
  },
  data() {
    return {
      callable: isMobile() ? true : false
    }
  },
  head() {
    return {
      title: 'Contact Us',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.description
        }
      ]
    }
  },
  async asyncData({ $content }) {
    const page = await $content('pages', 'contact').fetch()
    const contact = await $content('church', 'contact').fetch()
    const service_times = await $content('church', 'service_times').fetch()
    const sunday_services = service_times.services.filter(
      service => service.day === 'Sunday'
    )
    const wednesday_services = service_times.services.filter(
      service => service.day === 'Wednesday'
    )

    return {
      page,
      contact,
      sunday_services,
      wednesday_services
    }
  }
}
</script>

<style lang="postcss" scoped>
.content section {
  @apply mt-12;
  
  & > h2 {
    @apply text-center;
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
