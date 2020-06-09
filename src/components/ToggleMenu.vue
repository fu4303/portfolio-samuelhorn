<template>
  <button @click="toggleMenu" class="focus:outline-none w-48 h-48">
    <Menu class="h-32 mx-auto" />
  </button>
</template>

<script>
import Menu from '~/assets/svg/Menu.svg'
import gsap from 'gsap'

export default {
  components: {
    Menu
  },
  methods: {
    toggleMenu() {
      const menu = this.$store.state.menu
      const header = document.getElementById('siteHeader')

      if (menu) {
        gsap.to('.menu-icon', { rotateZ: 0, duration: .25 });
        gsap.to('.menu-icon__first', { rotateZ: 0, y: 0, duration: .25 });
        gsap.to('.menu-icon__second', { rotateZ: 0, y: 0, duration: .25 });
        gsap.to('.menu-icon__third', { opacity: 1, duration: .25 });
        header.classList.remove('menu-is-open')
      } else {
        gsap.to('.menu-icon', { rotateZ: 90, duration: .25 });
        gsap.to('.menu-icon__first', { transformOrigin: '50%', rotateZ: 45, y: 7, duration: .25 });
        gsap.to('.menu-icon__second', { transformOrigin: '50%', rotateZ: -45, y: -7, duration: .25 });
        gsap.to('.menu-icon__third', { opacity: 0, duration: .25 });
        header.classList.add('menu-is-open')
      }

      this.$store.commit('toggleMenu')
    }
  }
}
</script>