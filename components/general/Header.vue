<template>
  <nav class="px-8 py-6 flex flex-row items-center w-full bg-white top-0 fixed z-100">
    <transition name="fade">
      <h1 v-show="!mobile_menu_enabled" class="tracking-tighter font-serif font-bold text-xl">NORTHSIDE</h1>
    </transition>

    <Button type="secondary" class="ml-auto" @click.native="toggleMenu">
      <p v-show="mobile_menu_enabled">CLOSE MENU</p>
      <p v-show="!mobile_menu_enabled">MENU</p>
    </Button>
    <transition name="slide-right">
      <div v-show="mobile_menu_enabled" class="mobile-menu absolute top-0 right-0 w-full h-screen bg-white mt-20 pr-8">
        <ul class="flex flex-col items-end">
          <li><LinkButton type="tertiary" link="#">Home</LinkButton></li>
          <li>
            <DropdownButton label="About" link="#" @toggle="about_display = !about_display">
              <transition-group name="dropdown" tag="div" class="dropdown-content flex flex-col items-end">
                <LinkButton type="tertiary" :link="link.href" v-show="about_display" v-for="link in about_links" :key="link.label">{{ link.label }}</LinkButton>
              </transition-group>
            </DropdownButton>
          </li>
          <li>
            <DropdownButton label="Ministries" link="#" @toggle="ministries_display = !ministries_display">
              <transition-group name="dropdown" tag="div" class="dropdown-content flex flex-col items-end">
                <LinkButton type="tertiary" :link="link.href" v-show="ministries_display" v-for="link in ministry_links" :key="link.label">{{ link.label }}</LinkButton>
              </transition-group>
            </DropdownButton>
          </li>
          <li><LinkButton type="tertiary" link="#">Events</LinkButton></li>
          <li><LinkButton type="tertiary" link="#">Watch</LinkButton></li>
          <li><LinkButton type="tertiary" link="#">Contact</LinkButton></li>
        </ul>
      </div>
    </transition>
  </nav>
</template>

<script>
import Button from '~/components/Button'
import LinkButton from '~/components/LinkButton'
import DropdownButton from '~/components/DropdownButton'

export default {
  name: 'Header',
  components: {
    Button,
    LinkButton,
    DropdownButton
  },
  data() {
    return {
      mobile_menu_enabled: false,
      about_links: [
        {
          label: "Our Leadership",
          href: "#"
        },
        {
          label: "Beliefs",
          href: "#"
        }
      ],
      ministry_links: [
        {
          label: "Missions",
          href: "#"
        },
        {
          label: "Children's Ministries",
          href: "#"
        },
        {
          label: "Youth Ministries",
          href: "#"
        },
        {
          label: "Sunday School",
          href: "#"
        },
        {
          label: "Northside Christian School",
          href: "https://www.northsidecharleston.com/"
        }
      ],
      about_display: false,
      ministries_display: false,
    }
  },
  methods: {
    toggleMenu() {
      this.mobile_menu_enabled = !this.mobile_menu_enabled
    }
  }
}
</script>

<style lang="postcss" scoped>
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
