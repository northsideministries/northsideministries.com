<template>
  <nav class="px-8 py-6 w-full bg-white top-0 overflow-hidden fixed max-h-screen z-10" :class="[mobile_menu_enabled ? 'h-screen overflow-y-scroll' : '']">
    <div class="flex flex-row items-center">
      <nuxt-link to="/">
        <h1 v-show="!mobile_menu_enabled" class="tracking-tighter font-serif font-bold text-xl">NORTHSIDE</h1>
      </nuxt-link>

      <Button type="secondary" class="ml-auto" @click.native="toggleMenu">
        <p v-show="mobile_menu_enabled">CLOSE MENU</p>
        <p v-show="!mobile_menu_enabled">MENU</p>
      </Button>
    </div>
    <transition name="slide-right">
      <div v-show="mobile_menu_enabled" class="mobile-menu absolute top-0 right-0 w-full bg-white mt-20 pb-16 pr-8 z-10">
        <ul class="flex flex-col items-end">
          <li><NuxtLinkButton type="tertiary" to="/">Home</NuxtLinkButton></li>
          <li>
            <DropdownButton label="About" link="/about" @toggle="about_display = !about_display" @close="about_display = false">
              <transition-group name="dropdown" tag="div" class="dropdown-content flex flex-col items-end">
                <NuxtLinkButton type="tertiary" :to="link.href" v-show="about_display" v-for="link in about_links" :key="link.label">{{ link.label }}</NuxtLinkButton>
              </transition-group>
            </DropdownButton>
          </li>
          <li>
            <DropdownButton label="Ministries" link="/ministries" @toggle="ministries_display = !ministries_display" @close="ministries_display = false">
              <transition-group name="dropdown" tag="div" class="dropdown-content flex flex-col items-end">
                <NuxtLinkButton type="tertiary" :to="link.href" v-for="link in ministry_links" v-show="ministries_display" :key="link.label">{{ link.label }}</NuxtLinkButton>
                <LinkButton type="tertiary" link="https://www.northsidecharleston.com/" v-show="ministries_display" key="Northside Christian School">Northside Christian School</LinkButton>
              </transition-group>
            </DropdownButton>
          </li>
          <li><NuxtLinkButton type="tertiary" to="/events">Events</NuxtLinkButton></li>
          <li><NuxtLinkButton type="tertiary" to="/watch">Watch</NuxtLinkButton></li>
          <li><NuxtLinkButton type="tertiary" to="/give">Give</NuxtLinkButton></li>
          <li><NuxtLinkButton type="tertiary" to="/contact">Contact</NuxtLinkButton></li>
        </ul>
      </div>
    </transition>
  </nav>
</template>

<script>
import Button from '~/components/Button'
import LinkButton from '~/components/LinkButton'
import NuxtLinkButton from '~/components/NuxtLinkButton'
import DropdownButton from '~/components/DropdownButton'

export default {
  name: 'Header',
  components: {
    Button,
    NuxtLinkButton,
    LinkButton,
    DropdownButton
  },
  data() {
    return {
      mobile_menu_enabled: false,
      last_scroll: 0,
      about_links: [
        {
          label: "Beliefs",
          href: "/about/beliefs"
        },
        {
          label: "Our Leadership",
          href: "/about/leadership"
        },
      ],
      ministry_links: [
        {
          label: "Missions",
          href: "/ministries/missions"
        },
        {
          label: "Children's Ministries",
          href: "/ministries/childrens-ministries"
        },
        {
          label: "Youth Ministries",
          href: "/ministries/youth-ministries"
        },
        {
          label: "Sunday School",
          href: "/ministries/sunday-school"
        },
      ],
      about_display: false,
      ministries_display: false,
    }
  },
  watch: {
    $route: 'closeMenu',
  },
  methods: {
    toggleMenu() {
      this.mobile_menu_enabled = !this.mobile_menu_enabled
      this.toggleHidden()
    },
    closeMenu() {
      this.mobile_menu_enabled = false
      this.about_display = false
      this.ministries_display = false

      this.last_scroll = 0
      this.toggleHidden()
    },
    toggleHidden() {
      // grab all top-level elements except the navbar
      const html = document.querySelectorAll('.container > *:not(nav)')
      const className = 'hidden'
      if (this.mobile_menu_enabled) {
        this.last_scroll = window.pageYOffset || document.documentElement.scrollTop;
        html.forEach(el => el.classList.add(className))
      } else {
        html.forEach(el => el.classList.remove(className))
        window.scrollTo(0, this.last_scroll)
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
nav {
  /* @apply ma */
}

.mobile-menu > ul > li {
  @apply mt-4;
}

.dropdown-content {
  @apply mb-6;

  & > a {
    @apply mt-2;
  }
}

.dropdown-enter,
.dropdown-leave-active {
  opacity: 0;
  position: absolute;
  transform: translateX(-55vw) translateY(-45vh);
}
.dropdown-leave-active {
  /* position: absolute; */
  transform: translateX(50vw);
}

.dropdown-contents > div > a {
  display: flex;
  transition: all 0.5s;
  width: auto;
}
</style>
