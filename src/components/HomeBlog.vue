<template>
  <section class="mb-64 lg:mb-96 container">
    <SectionHeader title="Latest writings" link="All writings" path="/blog" />
    <div class="-mx-16 flex flex-col sm:flex-row">
      <div 
        v-for="edge in $page.posts.edges"
        :key="edge.node.id"
        class="sm:w-1/2 px-16 flex-shrink-0 mb-32 sm:mb-0 flex"
      >
        <PostCard :data="edge.node" class="flex-1" />
      </div>
    </div>
    <SectionFooter link="All writings" path="/blog" />
  </section>
</template>

<script>
import PostCard from '~/components/PostCard.vue'
import SectionHeader from '~/components/SectionHeader'
import SectionFooter from '~/components/SectionFooter'

export default {
  components: {
    PostCard,
    SectionHeader,
    SectionFooter
  },
  props: {
    posts: {
      type: Object,
      required: true
    }
  }
}
</script>