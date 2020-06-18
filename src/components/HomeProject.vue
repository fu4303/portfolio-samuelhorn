<template>
  <section class="py-48 md:py-64 relative">
    <div class="container relative z-10 flex flex-col justify-center items-center">
      <SectionHeader title="Project in focus" link="All projects" path="/projects" class="self-stretch" />
      <h2 class="text-lg md:text-xl font-semibold max-w-768 text-center mt-96 grid-bg">The perfect docs theme for the JAM-stack</h2>
      <g-link :to="'/projects/' + project" class="flex mb-128 mt-32 h-64 px-48 pt-14 pb-18 font-normal text-xs border-2 rounded-full hover:bg-complementary hover:text-primary hover:border-complementary transition-colors duration-200 mx-auto grid-bg">
        Check out Jamdocs
        <Arrow class="w-32 h-32 ml-16" />
      </g-link>
      <SectionFooter link="All projects" path="/projects" />
    </div>
  </section>
</template>

<script>
import SectionHeader from '~/components/SectionHeader'
import SectionFooter from '~/components/SectionFooter'
import Arrow from '~/assets/svg/Arrow.svg'

export default {
  props: {
    project: {
      type: String,
      required: true
    }
  },
  components: {
    SectionHeader,
    SectionFooter,
    Arrow
  }
}
</script>

<style lang="postcss" scoped>
section:after {
  @apply bg-complementary-5 absolute inset-0;
  content: '';
}

@screen lg {
  section:after {
    @apply rounded-lg mx-32;
  }
}
</style>