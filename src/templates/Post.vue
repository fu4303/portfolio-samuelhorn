<template>
  <article>
    <PostHero 
      :post="$page.post"
    />
    <div 
      v-html="$page.post.content"
      class="container markdown max-w-960"
    />
  </article>
</template>

<script>
import PostHero from '~/components/PostHero.vue'
import colors from '../mixins/colors'

export default {
  components: {
    PostHero
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
      ]
    }
  }
}
</script>

<page-query>
query Post ($id: ID!) {
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
}
</page-query>