<template>
  <div>
    <HomeHero />
    <HomeBlog :posts="$page.posts" class="relative z-20" />
    <HomeProject project="jamdocs" />
  </div>
</template>

<script>
import HomeHero from '~/components/HomeHero'
import HomeBlog from '~/components/HomeBlog'
import HomeProject from '~/components/HomeProject'

export default {
  components: {
    HomeHero,
    HomeBlog,
    HomeProject
  },
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<page-query>
query {
  posts: allPost(limit: 2, filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        date (format: "D. MMMM YYYY")
        timeToRead
        description
        color
        path
        category {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>
