<template>
  <main class="mb-16">
    <Hero title="Children's Ministries" :img="require('~/assets/img/hero/friends_priscilla-du-preez-unsplash.jpg')">
      Hello World
    </Hero>
    <div class="content">
      <!-- TODO: content and images from CMS -->

      <section>
        <h2>Nursery</h2>
        <img src="~/assets/img/hero/friends_priscilla-du-preez-unsplash.jpg" alt="Youth Group" />
        <p>Nursery is provided for infants and toddlers during all services. Our nursery leaders provide a warm, clean and loving environment for infants and toddlers. Instruction sheets are provided and kept on each child so that parents can see the excellent care our leaders provide for their children. Beepers are available to mothers for the services. Please come visit and feel at ease leaving your child at our nursery!</p>
        <div class="mt-6">
          <h3>Sunday</h3>
          <p>Elementary Room 208</p>
          <p>Provided during all services</p>
        </div>
      </section>

      <section>
        <h2>Children's Church</h2>
        <img src="~/assets/img/hero/friends_priscilla-du-preez-unsplash.jpg" alt="Youth Group" />
        <p>We offer children’s church on Sunday morning for those out of the nursery through 2nd grade. For K5-2nd graders, we use an AWANA lesson book to supplement Bible stories the children learn in their AWANA handbooks.</p>
        <p>Children will be dismissed from the main auditorium during the service before the sermon begins. Children may be picked up on the first floor of our elementary building after the morning service.</p>
        <div class="mt-6">
          <h3>Sunday</h3>
          <p>First floor elementary building</p>
          <p>Children’s Church — 10:30am</p>
        </div>
      </section>

      <section>
        <h2>AWANA Clubs</h2>
        <img src="~/assets/img/hero/friends_priscilla-du-preez-unsplash.jpg" alt="Youth Group" />
        <p>AWANA is an exciting club for kids ages two years old through sixth grade. We help kids know, love, and serve God. AWANA also encourages your child to grow in character by learning obedience, courtesy, and building friendships.</p>
        <p>AWANA clubs are <span class="italic">Puggles</span> (ages 2 – 3), <span class="italic">Cubbies</span> (ages K3 – K4), <span class="italic">Sparks</span> (K5 – 2nd grade) and <span class="italic">Truth & Training</span> (3rd – 6th grade). Your children will enjoy learning scripture, hearing stories and participating in games. Bring your children to our gym for check-in at 6:30pm!</p>
        <div class="mt-6">
          <h3>Wednesday</h3>
          <p>Gym</p>
          <p>AWANA — 6:30pm</p>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import Hero from '~/components/Hero'

export default {
  name: 'ChildrensMinistriesPage',
  components: {
    Hero
  }
}
</script>

<style lang="postcss" scoped>
.content > section {
  @apply w-11/12 mt-16;

  &:nth-child(odd) {
    @apply -mr-6 float-right;
  
    & > p {
      @apply mr-6;
    }
  }

  &:nth-child(even) {
    @apply -ml-6 float-left;

    & > h2 {
      @apply text-right;
    }

    & > p, & > div {
      @apply ml-8;
    }
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