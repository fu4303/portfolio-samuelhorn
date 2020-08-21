<template>
  <transition
    enter-active-class="transition-all duration-300 ease-in-out"
    leave-active-class="transition-all duration-300 ease-in-out"
    enter-class="opacity-0"
    enter-to-class="opacity-100"
    leave-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div 
      class="fixed z-30 bg-seconday inset-0 flex items-center justify-center"
      v-if="this.$store.state.menu"
    >
      <nav class="flex flex-col items-center text-lg">
        <AppMenuLink to="/">Home</AppMenuLink>
        <AppMenuLink to="/blog">Blog</AppMenuLink>
        <AppMenuLink to="/projects">Projects</AppMenuLink>
      </nav>
    </div>
  </transition>
</template>

<script>
import AppMenuLink from '~/components/AppMenuLink'
import gsap from 'gsap'

export default {
  components: {
    AppMenuLink
  },
  watch: {
    $route () {
      const status = this.$store.state.menu
      
      if (status === true) {
        setTimeout(() => {
          this.$store.commit('closeMenu')
          document.getElementById('siteHeader').classList.remove('menu-is-open')

          gsap.to('.menu-icon', { rotateZ: 0, duration: .25 })
          gsap.to('.menu-icon__first', { rotateZ: 0, y: 0, duration: .25 })
          gsap.to('.menu-icon__second', { rotateZ: 0, y: 0, duration: .25 })
          gsap.to('.menu-icon__third', { opacity: 1, duration: .25 })
        }, 1000)
      }
    }
  }
}
</script>