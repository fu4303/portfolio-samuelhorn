<template>
  <div class="container">
    <section ref="hero" class="h-screen mb-64 flex flex-col items-center lg:flex-row relative lg:h-auto">
      <div class="-mb-64 relative flex-1 overflow-y-hidden lg:order-2 lg:mb-0 -mx-32 xs:-mx-96 lg:mx-0 lg:absolute lg:top-0 lg:right-0 lg:mt-64 lg:-mr-448 lg:flex-none xl:-mr-384 xxl:-mr-128 xxl:-mt-32">
        <div 
          class="absolute inset-0 bg-seconday z-10" 
          style="mix-blend-mode: multiply;"
        />
        <g-image
          class="object-cover h-full relative mx-auto lg:max-w-896 lg:h-auto xl:max-w-960 xxl:max-w-1200"
          src="~/assets/img/me.jpg"
          width="1200"
          alt="Portrait of Samuel Horn af Rantzien smiling"
        />
      </div>
      <div class="flex flex-col justify-end items-center lg:items-start relative z-10 lg:mt-256">
        <h1 class="text-center text-lg font-semibold max-w-672 sm:text-xl lg:text-xxl lg:text-left xl:text-xxxl xl:max-w-768 grid-bg">Design, thoughts & code for the next web.</h1>
        <p class="mt-32 max-w-672 xl:max-w-896 xl:text-md xl:leading-48 hidden lg:block opacity-75 grid-bg">Im Samuel Horn af Rantzien, a passionate web designer & front-end web developer from Sweden. I craft smooth experiences with modern web technology, always with characteristic design and performance in focus.</p>
        <Button 
          link="/about"
          class="mb-64 mt-32 lg:mt-48"
        >
          More about me
          <Arrow class="w-32 h-32 ml-16" />
        </Button>
      </div>
    </section>
  </div>
</template>

<script>
import Button from '~/components/Button'
import Arrow from '~/assets/svg/Arrow.svg'

export default {
  components: {
    Button,
    Arrow
  },
  data() {
    return {
      window: {
        width: 0,
        height: 0
      }
    }
  },
  methods: {
    handleResize() {
      if (process.browser) {
        this.window.width = window.innerWidth
        this.window.height = window.innerHeight
      }
      this.setHeight(this.window, this.$refs.hero)
    },
    setHeight(ref, tgt) {
      if (tgt) tgt.style.height = 'auto'

      const actualHeight = ref.height
      const splitHeight = actualHeight / 16
      const splitHeightRnd = Math.round(splitHeight)
      let newHeight = splitHeightRnd * 16

      newHeight = newHeight + 16

      if (this.window.width < 1024) {
        if (tgt) tgt.style.height = newHeight + 'px'
      }
    }
  },
  created() {
    if (process.browser) {
      window.addEventListener('resize', this.handleResize)
    }
    this.handleResize()
  },
  mounted() {
    this.setHeight(this.window, this.$refs.hero)
  },
  destroyed() {
    if (process.browser) {
      window.removeEventListener('resize', this.handleResize)
    }
  }
}
</script>