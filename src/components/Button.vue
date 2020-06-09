<template>
  <g-link 
    v-if="!anchor"
    :to="link" 
    :class="hoverColor(theme)"
    class="button flex h-64 px-48 pt-14 pb-18 font-normal text-xs border-2 rounded-full transition-colors duration-200 grid-bg"
  >
    <slot/>
  </g-link>
  <a 
    v-else
    :href="link" 
    :class="hoverColor(theme)"
    class="button flex h-64 px-48 pt-14 pb-18 font-normal text-xs border-2 rounded-full transition-colors duration-200 grid-bg"
  >
    <slot/>
  </a>
</template>

<script>
import colors from '../mixins/colors'

export default {
  props: {
    link: {
      type: String,
      required: true
    },
    anchor: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: ''
    }
  },
  mixins: [colors]
}
</script>