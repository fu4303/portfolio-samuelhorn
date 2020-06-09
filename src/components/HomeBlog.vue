<template>
  <section class="mb-64 lg:mb-96 container">
    <HomeSectionHeader title="Latest writings" link="All writings" path="/blog" />
    <div class="-mx-16 xl:-mx-32 flex flex-col sm:flex-row">
      <div 
        v-for="edge in $page.posts.edges"
        :key="edge.node.id"
        class="sm:w-1/2 px-16 xl:px-32 flex-shrink-0 mb-32 sm:mb-0 flex"
      >
        <PostCard :data="edge.node" class="flex-1" />
      </div>
    </div>
    <HomeSectionFooter link="All writings" />
  </section>
</template>

<script>
import PostCard from '~/components/PostCard.vue'
import HomeSectionHeader from '~/components/HomeSectionHeader'
import HomeSectionFooter from '~/components/HomeSectionFooter'

export default {
  components: {
    PostCard,
    HomeSectionHeader,
    HomeSectionFooter
  },
  props: {
    posts: {
      type: Object,
      required: true
    }
  }
}
</script>