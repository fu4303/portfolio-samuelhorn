<template>
  <div class="container">
    <h1 class="mt-192 xl:mt-256 mb-64 text-center text-lg font-semibold max-w-672 sm:text-xl lg:text-xxl lg:text-left xl:text-xxxl xl:max-w-768 grid-bg">Projects</h1>
    <div class="flex flex-col md:flex-row md:flex-wrap -mx-32">
      <article
        v-for="edge in $page.projects.edges"
        :to="edge.node.path"
        :key="edge.node.id"
        class="md:w-1/2 px-32 flex-shrink-0 mb-32"
      >
        <g-image :src="edge.node.image" class="rounded-t-lg" />
        <div class="bg-primary p-32 rounded-b-lg">
          <h2 class="mb-16 text-sm xl:mb-32 xl:text-md font-semibold">
            {{ edge.node.title }}
          </h2>
          <nav class="flex justify-center">
            <g-link :to="edge.node.demo" class="h-48 px-32 pt-6 pb-10 font-normal text-xs border-2 rounded-l-full hover:bg-complementary hover:text-primary border-complementary hover:border-transparent transition-colors duration-200 grid-bg">
              Demo
            </g-link>
            <g-link :to="edge.node.git" class="-ml-2 h-48 px-32 pt-6 pb-10 font-normal text-xs border-2 rounded-r-full hover:bg-complementary hover:text-primary border-complementary hover:border-transparent transition-colors duration-200 grid-bg">
              Contribute
            </g-link>
          </nav>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import Button from '~/components/Button'
import Arrow from '~/assets/svg/Arrow.svg'

export default {
  components: {
    Button,
    Arrow
  },
  metaInfo: {
    title: 'My projects',
    meta: [
      {
        key: 'og:title',
        property: 'og:title',
        content: 'My projects',
      },
      {
        key: 'twitter:title',
        name: 'twitter:title',
        content: 'My projects',
      },
      {
        key: 'twitter:description',
        name: 'twitter:description',
        content: 'Web designer & front-end web developer from Sweden who craft smooth experiences with modern web technology, always with characteristic design and performance in focus.',
      },
      {
        key: 'og:description',
        property: 'og:description',
        content: 'Web designer & front-end web developer from Sweden who craft smooth experiences with modern web technology, always with characteristic design and performance in focus.',
      },
      {
        key: 'og:image',
        property: 'og:image',
        content: 'share.png',
      },
      {
        key: 'twitter:image',
        name: 'twitter:image',
        content: 'share.png',
      }
    ]
  }
}
</script>

<page-query>
query {
  projects: allProject {
    edges {
      node {
        id
        title
        path
        image
        demo
        git
      }
    }
  }
}
</page-query>