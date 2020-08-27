<template>
  <div>
    <div class="container">
      <h1 class="mt-192 xl:mt-256 mb-64 text-center text-lg font-semibold max-w-672 sm:text-xl lg:text-xxl lg:text-left xl:text-xxxl xl:max-w-768 grid-bg">
        {{ $page.category.title.charAt(0).toUpperCase() + $page.category.title.slice(1) + ' writings' }}
      </h1>
    </div>

    <section class="mb-64 lg:mb-96 container">
      <div class="-mx-16 flex flex-col sm:flex-row sm:flex-wrap">
        <div 
          v-for="edge in $page.category.belongsTo.edges"
          :key="edge.node.id"
          class="sm:w-1/2 px-16 flex-shrink-0 mb-32 flex"
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
  metaInfo() {
    return {
      title: this.$page.category.title.charAt(0).toUpperCase() + this.$page.category.title.slice(1) + ' writings',
      meta: [
        {
          key: 'og:title',
          property: 'og:title',
          content: this.$page.category.title.charAt(0).toUpperCase() + this.$page.category.title.slice(1) + ' writings'
        },
        {
          key: 'twitter:title',
          name: 'twitter:title',
          content: this.$page.category.title.charAt(0).toUpperCase() + this.$page.category.title.slice(1) + ' writings'
        },
      ],
    }
  }
}
</script>

<page-query>

query Category ($id: ID!) {
  category (id: $id) {
    title
    belongsTo {
      edges {
        node {
          ...on Post {
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
  }
}
</page-query>