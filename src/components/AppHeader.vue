<template>
  <header 
    id="siteHeader" 
    class="flex justify-between items-center"
  >
    <g-link to="/">
      <Logo class="h-48 md:h-64 grid-bg" />
      <span class="sr-only">{{ $static.metadata.siteName }}</span>
    </g-link>
    <nav class="flex items-center grid-bg md:h-64">
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

export default {
  components: {
    Logo,
    ToggleGrid,
    ToggleTheme,
    ToggleMenu
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