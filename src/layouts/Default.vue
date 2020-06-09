<template>
  <div
    class="site bg-seconday text-complementary min-h-screen transition-colors overflow-hidden relative"
    :class="siteClasses()"
  >
    <AppMenu />
    <AppHeader class="fixed z-30 top-0 right-0 left-0 mt-32 mx-32 lg:mt-48 lg:mx-64 xl:mt-80 xl:mx-96" />
    <div class="relative z-20 pt-20">
      <slot />
    </div>
    <AppFooter class="relative z-20" />
  </div>
</template>

<script>
import AppMenu from '~/components/AppMenu'
import AppHeader from '~/components/AppHeader'
import AppFooter from '~/components/AppFooter';

export default {
  components: {
    AppMenu,
    AppHeader,
    AppFooter
  },
  methods: {
    siteClasses() {
      let grid = ''

      if (this.$store.state.grid) {
        grid = ' grid-lines'
      }

      return this.$store.state.theme + grid 
    }
  },
  mounted() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.$store.commit('darkTheme')
    }
  }
}
</script>

