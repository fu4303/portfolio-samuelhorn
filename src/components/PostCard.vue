<template>
  <article 
    class="relative p-32 xl:p-48 bg-primary rounded-lg flex flex-col"
    :style="bgColor(this.data.color)"
    :class="fgColor(this.data.color)"
  >
    <g-link :to="data.category.path" class="font-semibold text-xxxs uppercase tracking-widest relative z-10">{{ data.category.title }}</g-link>
    <g-link :to="data.path" class="absolute inset-0"></g-link>
    <div class="flex-1" />
    <h2 class="mt-96 mb-16 text-md xl:mb-48 xl:text-lg font-semibold">
      {{ data.title }}
    </h2>
    <div class="flex items-center justify-between">
      <span class="font-medium text-xxs">{{ data.timeToRead }} min read</span>
      <Arrow class="w-32 h-32" />
    </div>
  </article>
</template>

<script>
import Arrow from '~/assets/svg/Arrow.svg'
import colors from '../mixins/colors'

export default {
  components: {
    Arrow
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  mixins: [colors]
}
</script>