<template>
  <div
    class="site bg-seconday text-complementary min-h-screen transition-colors overflow-hidden relative"
    :class="siteClasses()"
  >
    <div id="belowTheFold" class="absolute" style="top:100vh;"></div>
    <AppMenu />
    <AppHeader class="fixed z-30 top-0 right-0 left-0 mt-32 mx-32 lg:mt-48 lg:mx-64 xl:mt-80 xl:mx-96" />
    <div class="relative z-20 pt-20">
      <slot />
    </div>
    <AppFooter class="relative z-20" />
    <div id="bgSlide" class="fixed inset-0 z-50 transform translate-y-full bg-primary flex items-center justify-center flex-col">
      <span id="bgSlideText" class="mt-16 text-lg font-medium" v-html="randomWords()" />
    </div>
  </div>
</template>

<script>
import AppMenu from '~/components/AppMenu'
import AppHeader from '~/components/AppHeader'
import AppFooter from '~/components/AppFooter';
import Logo from '~/assets/svg/Logo.svg'

export default {
  components: {
    AppMenu,
    AppHeader,
    AppFooter,
    Logo
  },
  methods: {
    randomWords() {
      const words = [
        'Routing page',
        'Transfering',
        'Recieving bytes',
        'Moving parts',
        'Peeeow Peeeow',
        'Zappin!'
      ]

      const string = words[0 + Math.floor(Math.random() * words.length )]
      string.split('');
      let i = 0
      const length = string.length
      let text = ''

      for (i; i < length; i++) {
        if (string[i] === ' ') {
          text += '&nbsp;'
        } else {
          text += '<span class="char inline-block">' + string[i] + '</span>'
        }
      }

      return text
    },
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

