<template>
  <div 
    class="bg-primary"
    :style="bgColor(this.post.color)"
    :class="fgColor(this.post.color)"
  >
    <div :style="setHeroHeight()" class="container flex flex-col items-center lg:items-start justify-center py-192 relative">
      <h1 class="p-name text-center text-lg font-semibold max-w-768 sm:text-xl lg:text-xxl lg:text-left xl:text-xxxl xl:max-w-896">{{ post.title }}</h1>
      <Button 
        link="#belowTheFold" 
        class="mt-32 lg:mt-48"
        :theme="post.color"
        anchor
      >
        More below
        <Arrow class="w-32 h-32 ml-16 rotate-90 transform" />
      </Button>
      <div class="absolute right-0 left-0 bottom-0 flex justify-between mb-32 lg:mb-96 mx-32 lg:mx-96 xxl:mx-192">
        <div>
          <span class="caption block opacity-50">Posted</span>
          <time class="dt-published" :datetime="post.date">
            {{ post.date }}
          </time>
        </div>
        <div>
          <span class="caption block opacity-50">Category</span>
          <g-link class="capitalize" :to="post.category.path">{{ post.category.title }}</g-link>
        </div>
        <div>
          <span class="caption block opacity-50">Time to read</span>
          {{ post.timeToRead }} min
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import colors from '../mixins/colors'
import Button from '~/components/Button'
import Arrow from '~/assets/svg/Arrow.svg'

export default {
  components: {
    Button,
    Arrow
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  // mounted() {
  //   document.getElementById('bgSlide').style.backgroundColor = this.post.color
  // },
  mixins: [colors],
  methods: {
    isOdd(num) {
      return num % 2
    },
    setHeroHeight() {
      if (process.isClient) {
        const screenHeight = window.innerHeight

        const screenHeightDiv = screenHeight / 16
        const screenHeightUneven = screenHeightDiv % 1 != 0
        let newHeight = screenHeight

        if (screenHeightUneven) {
          newHeight = Math.ceil(screenHeightDiv) * 16
        }
        
        if (screenHeight > 800) {
          return 'height:'+newHeight+'px'
        } else {
          return
        }
      }
    }
  }
}
</script>