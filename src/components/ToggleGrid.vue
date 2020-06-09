<template>
  <button 
    @click="toggleGrid" 
    class="focus:outline-none w-48 h-48"
    aria-label="Toggle grid overlay"
  >
    <Grid class="h-32 mx-auto" />
  </button>
</template>

<script>
import Grid from '~/assets/svg/Grid.svg'
import gsap from 'gsap'

export default {
  components: {
    Grid
  },
  methods: {
    toggleGrid() {
      const grid = this.$store.state.grid

      if (grid) {
        gsap.to('.grid-icon', { rotateZ: 0, duration: .25 });
        gsap.to('.grid-icon__first', { x: 0, duration: .25 });
        gsap.to('.grid-icon__second', { x: 0, duration: .25 });
        gsap.to('.grid-icon__third', { y: 0, duration: .25 });
        gsap.to('.grid-icon__forth', { y: 0, duration: .25 });
      } else {
        gsap.to('.grid-icon', { rotateZ: 90, duration: .25 });
        gsap.to('.grid-icon__first', { x: -4, duration: .25 });
        gsap.to('.grid-icon__second', { x: 4, duration: .25 });
        gsap.to('.grid-icon__third', { y: -4, duration: .25 });
        gsap.to('.grid-icon__forth', { y: 4, duration: .25 });
      }

      this.$store.commit('toggleGrid')
    }
  }
}
</script>