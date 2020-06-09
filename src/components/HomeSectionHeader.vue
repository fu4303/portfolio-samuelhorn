<template>
  <header class="flex items-center justify-between mb-32 sm:mb-48 flex-col sm:flex-row">
    <h2 class="text-sm lg:text-md leading-48 lg:leading-48 font-semibold grid-bg">{{ title }}</h2>
    <g-link :to="path" class="h-48 px-32 pt-6 pb-10 font-normal text-xs border-2 rounded-full hover:bg-complementary-10 hover:text-complementary border-transparent sm:border-complementary-10 hover:border-transparent transition-colors duration-200 hidden sm:block grid-bg">{{ link }}</g-link>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: true
    }
  }
}
</script>