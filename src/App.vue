<template>
  <Layout>
    <transition
      @beforeEnter="before"
      @enter="enter"
      @leave="leave"
      @afterLeave="after"
      :css="false"
      mode="out-in"
    >
      <router-view :key="key" />
    </transition>
  </Layout>
</template>

<script>
import gsap from 'gsap'

export default {
  methods: {
    before(el) {
    },
    enter(el, done) {
      let tl = gsap.timeline({onComplete: done})

      tl.fromTo('#bgSlideText', {
        autoAlpha: 1,
        scale: 1
      },{
        duration: .4,
        ease: 'power4.out',
        autoAlpha: 0,
        delay: .05,
        scale: .5
      })

      tl.fromTo('#bgSlide', {
        autoAlpha: 1,
        y: 0
      },{
        duration: .4,
        ease: 'power4.in',
        autoAlpha: 1,
        y: '100%'
      }, '-=.4')

      tl.set('#bgSlideText', { autoAlpha: 1, scale: 1 })
    },
    leave(el, done) {
      let tl = gsap.timeline({onComplete: done})

      tl.fromTo('#bgSlide', {
        y: '100%',
        autoAlpha: 1
      },{
        duration: 1,
        ease: 'power4.out',
        y: 0,
        autoAlpha: 1
      })

      let tl2 = gsap.timeline()

      tl2.fromTo('.char', {
        translateY: 30,
        autoAlpha: 0,
        transformOrigin: '50%, 50%'
      },{
        duration: .3,
        delay: .35,
        translateY: 0,
        autoAlpha: 1,
        stagger: .03,
        ease: 'power2.out',
        repeat: 0
      })
    },
    after(el) {
    }
  },
  computed: {
    key() {
      const key = this.$route.path
      return key
    }
  },
  metaInfo() {
    return {
      title: this.$static.metadata.siteName,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$static.metadata.siteDescription
        }
      ]
    }
  },
  mounted() {
    console.log(process.env.NODE_ENV)
  }
}
</script>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>