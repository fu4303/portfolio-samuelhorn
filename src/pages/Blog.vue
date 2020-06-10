<template>
  <div>
    <div class="container">
      <h1 class="mt-192 mb-64 text-center text-lg font-semibold max-w-672 sm:text-xl lg:text-xxl lg:text-left xl:text-xxxl xl:max-w-768 grid-bg">The blog</h1>
    </div>

    <section class="mb-64 lg:mb-96 container">
      <div class="-mx-16 xl:-mx-32 flex flex-col sm:flex-row sm:flex-wrap">
        <div 
          v-for="edge in $page.posts.edges"
          :key="edge.node.id"
          class="sm:w-1/2 px-16 xl:px-32 flex-shrink-0 mb-32 xl:mb-64 flex"
        >
          <PostCard :data="edge.node" class="flex-1" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import PostCard from '~/components/PostCard.vue'

export default {
  components: {
    PostCard
  },
  metaInfo: {
    title: 'My writings',
    meta: [
      {
        key: 'og:title',
        name: 'og:title',
        content: 'My writings',
      },
      {
        key: 'twitter:title',
        name: 'twitter:title',
        content: 'My writings',
      },
    ]
  }
}
</script>

<page-query>
query {
  posts: allPost(filter: { published: { eq: true }}) {
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