<template>
  <div>
    <HomeHero />
    <HomeBlog :posts="$page.posts" class="relative z-20" />
    <HomeProject :project="$page.project" />
    
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
  data() {
    return {
      isDev: process.env.NODE_ENV === 'development',
    }
  },
  metaInfo () {
    return {
      title: 'Design, thoughts & code for the next web',
      meta: [
        {
          key: 'twitter:image',
          name: 'twitter:image',
          content: 'share.png',
        },
        {
          key: 'twitter:title',
          name: 'twitter:title',
          content: 'Design, thoughts & code for the next web',
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: 'Web designer & front-end web developer from Sweden who craft smooth experiences with modern web technology, always with characteristic design and performance in focus.',
        },
        {
          property: 'og:image',
          content: 'share.png',
        },
        {
          key: 'og:title',
          property: 'og:title',
          content: 'Design, thoughts & code for the next web',
        },
        {
          key: 'og:description',
          property: 'og:description',
          content: 'Web designer & front-end web developer from Sweden who craft smooth experiences with modern web technology, always with characteristic design and performance in focus.',
        }
      ]
    }
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
  project(path: "/projects/tailbase") {
    name
    title
    demo
  }
}
</page-query>
