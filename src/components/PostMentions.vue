<template>
  <section class="py-48 md:py-64 relative">
    <div class="container relative z-10 flex flex-col justify-center items-center">
      <SectionHeader :title="wmCounts.interactions" link="Interact" :url="'https://twitter.com/intent/tweet?via=pixelcrook&text='+title+'&url='+basePath+url" class="self-stretch" />
      <h2 class="text-lg md:text-xl font-semibold max-w-768 text-center mt-96 grid-bg">Want to respond?</h2>
      <a 
        :href="'https://twitter.com/intent/tweet?via=pixelcrook&text='+title+'&url='+basePath+url" 
        class="flex mb-128 mt-32 h-64 px-48 pt-14 pb-18 font-normal text-xs border-2 rounded-full hover:bg-complementary hover:text-primary hover:border-complementary transition-colors duration-200 mx-auto grid-bg"
      >
        Tweet this post!
        <Arrow class="w-32 h-32 ml-16" />
      </a>
      <div class="flex justify-center w-full mb-64 flex-wrap">
        <div v-if="wmCounts.likes != '0 Likes'" class="mr-32 mb-32">
          <h2 class="text-sm font-semibold mb-16">{{ wmCounts.likes }}</h2>
          <div class="flex flex-wrap pl-16">
            <a class="flex-shrink-0 -ml-16" v-for="edge in wmLikes" :key="edge.node.wmId" :href="edge.node.wmSource" target="_blank" rel="noopener" title="">
              <img class="w-64 h-64 rounded-full" :src="edge.node.author.photo" :alt="'Twitter profile picture of' + edge.node.author.name" />
            </a>
          </div>
        </div>
        <div v-if="wmCounts.reposts != '0 Reposts'" class="mb-32">
          <h2 class="text-sm font-semibold mb-16">{{ wmCounts.reposts }}</h2>
          <div class="flex flex-wrap pl-16">
            <a class="flex-shrink-0 -ml-16" v-for="edge in wmReposts" :key="edge.node.wmId" :href="edge.node.wmSource" target="_blank" rel="noopener" title="">
              <img class="w-64 h-64 rounded-full" :src="edge.node.author.photo" :alt="'Twitter profile picture of' + edge.node.author.name" />
            </a>
          </div>
        </div>
      </div>
      <div v-if="wmCounts.replies != '0 Replies'" class="flex flex-col w-full max-w-512">
        <h2 class="text-sm font-semibold mb-16">{{ wmCounts.replies }}</h2>
        <a class="flex mb-32" v-for="edge in wmReplies" :key="edge.node.wmId" :href="edge.node.wmSource" target="_blank" rel="noopener" title="">
          <img class="w-64 h-64 rounded-full mr-16" :src="edge.node.author.photo" :alt="'Twitter profile picture of' + edge.node.author.name" />
          <div>
            <h3 class="font-medium">{{edge.node.author.name}}</h3>
            {{edge.node.content.text}}
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import SectionHeader from '~/components/SectionHeader'
import Arrow from '~/assets/svg/Arrow.svg'

export default {
  props: {
    mentions: {
      type: Object,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  components: {
    SectionHeader,
    Arrow
  },
  data() {
    return {
      wmCounts: {
        interactions: '0',
        likes: 0,
        reposts: 0,
        replies: 0
      }
    }
  },
  computed: {
    wmLikes: function () {
      return this.$page.mentions.edges.filter(edge => edge.node.wmProperty === 'like-of')
    },
    wmReposts: function () {
      return this.$page.mentions.edges.filter(edge => edge.node.wmProperty === 'repost-of')
    },
    wmReplies: function () {
      return this.$page.mentions.edges.filter(edge => edge.node.wmProperty === 'mention-of')
    },
    basePath: function() {
      return process.env.GRIDSOME_BASE_PATH
    }
  },
  methods: {
    webMentions() {
      let wm = this.wmCounts

      this.$page.mentions.edges.forEach(edge => {
        wm.interactions++

        if (edge.node.wmProperty === 'like-of') {
          wm.likes++
        } else if (edge.node.wmProperty === 'repost-of') {
          wm.reposts++
        } else if (edge.node.wmProperty === 'mention-of') {
          wm.replies++
        }
      })

      if (wm.responses === 1) {
        wm.interactions = wm.interactions + ' Interaction'
      } else {
        wm.interactions = wm.interactions + ' Interactions'
      }

      if (wm.likes === 1) {
        wm.likes = wm.likes + ' Like'
      } else {
        wm.likes = wm.likes + ' Likes'
      }

      if (wm.reposts === 1) {
        wm.reposts = wm.reposts + ' Repost'
      } else {
        wm.reposts = wm.reposts + ' Reposts'
      }

      if (wm.replies === 1) {
        wm.replies = wm.replies + ' Reply'
      } else {
        wm.replies = wm.replies + ' Replies'
      }
    }
  },
  mounted() {
    this.webMentions()
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