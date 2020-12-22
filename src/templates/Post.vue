<template>
  <article class="h-entry">
    <PostHero 
      :post="$page.post"
    />
    <div 
      v-html="$page.post.content"
      class="e-content container markdown max-w-960 mb-64"
    />
    <PostMentions :mentions="$page.mentions" :url="$page.post.path" :title="$page.post.title" />
  </article>
</template>

<script>
import PostHero from '~/components/PostHero.vue'
import PostMentions from '~/components/PostMentions.vue'
import colors from '../mixins/colors'

export default {
  components: {
    PostHero,
    PostMentions
  },
  mixins: [colors],
  mounted() {
    const color = this.$page.post.color
    const theme = this.$store.state.theme
    const header = document.getElementById('siteHeader')

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
        {
          key: 'twitter:image',
          name: 'twitter:image',
          content: 'https://samuelhorn.com'+ this.$page.post.path.replace(/\/$/, "") +'.png',
        },
        {
          key: 'og:image',
          property: 'og:image',
          content: 'https://samuelhorn.com'+ this.$page.post.path.replace(/\/$/, "") +'.png',
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
    date (format: "Y / MM / D")
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

