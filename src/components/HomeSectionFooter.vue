<template>
  <footer class="sm:hidden text-center">
    <g-link to="/about" class="h-48 px-32 pt-8 pb-8 font-normal text-xs border-2 rounded-full hover:bg-complementary-10 hover:text-complementary border-transparent sm:border-complementary-10 hover:border-transparent transition-colors duration-200 grid-bg">{{ link }}</g-link>
  </footer>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true
    }
  }
}
</script>