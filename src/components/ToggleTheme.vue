<template>
  <button @click="toggleTheme" class="focus:outline-none w-48 h-48">
    <Theme class="h-32 mx-auto" />
  </button>
</template>

<script>
import Theme from '~/assets/svg/Theme.svg'
import gsap from 'gsap'

export default {
  components: {
    Theme
  },
  methods: {
    toggleTheme() {
      const theme = this.$store.state.theme

      if (theme === 'dark-mode') {
        gsap.to('.theme-icon', { rotateZ: 90, duration: .25 });
        gsap.to('.theme-icon__moon', { strokeOpacity: 0, duration: .25 });
        gsap.to('.theme-icon__sun', { strokeOpacity: 1, duration: .25 });
      } else {
        gsap.to('.theme-icon', { rotateZ: 0, duration: .25 });
        gsap.to('.theme-icon__sun', { strokeOpacity: .2, duration: .25 });
        gsap.to('.theme-icon__moon', { strokeOpacity: 1, duration: .25 });
      }

      this.$store.commit('toggleTheme')
    }
  }
}
</script>