<template>
  <article>
    <PostHero 
      :post="$page.post"
    />
    <div 
      v-html="$page.post.content"
      class="container markdown max-w-960"
    />
    <div>
      <h2>{{ wmCounts.responses }}</h2>
      <h2>{{ wmCounts.likes }}</h2>
      <div v-for="edge in wmLikes" :key="edge.node.wmId">
        <a :href="edge.node.wmSource" target="_blank" rel="noopener" title="">
          <img class="w-64 h-64 rounded-full" :src="edge.node.author.photo" :alt="'Twitter profile picture of' + edge.node.author.name" />
        </a>
      </div>
      <h2>{{ wmCounts.replies }}</h2>
      <div v-for="edge in wmReplies" :key="edge.node.wmId">
        <a :href="edge.node.wmSource" target="_blank" rel="noopener" title="" class="flex">
          <img class="w-64 h-64 rounded-full" :src="edge.node.author.photo" :alt="'Twitter profile picture of' + edge.node.author.name" />
          <div>
            <h3>{{edge.node.author.name}}</h3>
            {{edge.node.content.text}}
          </div>
        </a>
      </div>
    </div>
  </article>
</template>

<script>
import PostHero from '~/components/PostHero.vue'
import colors from '../mixins/colors'

export default {
  components: {
    PostHero
  },
  data() {
    return {
      wmCounts: {
        responses: 0,
        likes: 0,
        reposts: 0,
        replies: 0
      }
    }
  },
  mixins: [colors],
  computed: {
    wmLikes: function () {
      return this.$page.mentions.edges.filter(edge => edge.node.wmProperty === 'like-of')
    },
    wmReplies: function () {
      return this.$page.mentions.edges.filter(edge => edge.node.wmProperty === 'mention-of')
    }
  },
  methods: {
    webMentions() {
      let wm = this.wmCounts

      this.$page.mentions.edges.forEach(edge => {
        wm.responses++

        if (edge.node.wmProperty === 'like-of') {
          wm.likes++
        } else if (edge.node.wmProperty === 'mention-of') {
          wm.replies++
        }
      })

      if (wm.responses === 1) {
        wm.responses = wm.responses + ' Response'
      } else {
        wm.responses = wm.responses + ' Responses'
      }

      if (wm.likes === 1) {
        wm.likes = wm.likes + ' Like'
      } else {
        wm.likes = wm.likes + ' Likes'
      }

      if (wm.replies === 1) {
        wm.replies = wm.replies + ' Reply'
      } else {
        wm.replies = wm.replies + ' Replies'
      }

      
    }
  },
  mounted() {
    const color = this.$page.post.color
    const theme = this.$store.state.theme
    const header = document.getElementById('siteHeader')

    this.webMentions()

    if (color !== '') {
      this.$store.commit('setPostColor', color)
      
      if (this.getContrast(color) === 'dark') {
        header.classList.add('is-dark')
      } else {
        header.classList.add('is-light')
      }
    } else {
      if (theme === 'light-mode') {
        this.$store.commit('setPostColor', '#ffffff')
      } else {
        this.$store.commit('setPostColor', '#1C2024')
      }
    }
  },
  destroyed() {
    const header = document.getElementById('siteHeader')
    const theme = this.$store.state.theme

    header.classList.remove('is-dark')
    header.classList.remove('is-light')

    if (theme === 'light-mode') {
      this.$store.commit('setPostColor', '#ffffff')
    } else {
      this.$store.commit('setPostColor', '#1C2024')
    }
  },
  metaInfo () {
    return {
      title: this.$page.post.title,
      meta: [
        {
          key: 'og:title',
          property: 'og:title',
          content: this.$page.post.title,
        },
        {
          key: 'twitter:title',
          name: 'twitter:title',
          content: this.$page.post.title,
        },
        {
          key: 'description',
          name: 'description',
          content: this.$page.post.description,
        },
        {
          key: 'og:description',
          property: 'og:description',
          content: this.$page.post.description,
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: this.$page.post.description,
        },
      ]
    }
  }
}
</script>

<page-query>
query Post ($id: ID!, $path: String!) {
  post: post (id: $id) {
    title
    path
    date (format: "D / MM / YY")
    timeToRead
    color
    category {
      id
      title
      path
    }
    description
    content
  }
  mentions: allWebMention(filter: { wmTarget: { regex: $path } }) {
    edges {
      node {
        wmId
        url
        wmProperty
        wmSource
        content {
          text
        }
        author {
          name
          photo
          url
        }
      }
    }
  }
}
</page-query>

