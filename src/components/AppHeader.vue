<template>
  <header 
    id="siteHeader" 
    class="flex justify-between items-center"
  >
    <g-link to="/">
      <Logo id="headerLogo" class="h-48 md:h-64 grid-bg" />
      <span class="sr-only">{{ $static.metadata.siteName }}</span>
    </g-link>
    <nav id="headerMenu" class="flex items-center grid-bg md:h-64">
      <ToggleGrid />
      <ToggleTheme />
      <ToggleMenu />
    </nav>
  </header>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Logo from '~/assets/svg/Logo.svg'
import ToggleGrid from '~/components/ToggleGrid'
import ToggleTheme from '~/components/ToggleTheme'
import ToggleMenu from '~/components/ToggleMenu'
import { ScrollScene, addIndicators } from 'scrollscene'
import gsap from 'gsap'

export default {
  components: {
    Logo,
    ToggleGrid,
    ToggleTheme,
    ToggleMenu
  },
  mounted() {
    const scrollTrigger = document.querySelector('#belowTheFold')
    const tl = gsap.timeline({paused: true})
    const duration = document.documentElement.clientHeight / 2

    tl.to('#headerLogo', {
      x: -500,
      ease: 'none'
    }, 0)

    tl.to('#headerMenu', {
      x: 500,
      ease: 'none'
    }, 0)

    const scrollScene = new ScrollScene({
      triggerElement: scrollTrigger,
      gsap: {
        timeline: tl,
      },
      duration: duration,
    })
  }
}
</script>

<style lang="postcss" scoped>
.is-dark:not(.menu-is-open) {
  @apply text-dark;
}

.is-light:not(.menu-is-open) {
  @apply text-light;
}
</style>