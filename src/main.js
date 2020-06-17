// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
require('~/assets/css/tailwind.css')
import Vuex from 'vuex'

export default function (Vue, { router, head, isClient, appOptions }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // Wait for out transition before scrolling to top
  router.options.scrollBehavior = function(to, from, savedPosition) {
    if (to.hash) {
      const element = document.getElementById(to.hash.slice(1));
        if (element) {
            return window.scrollTo({
                top: element.offsetTop,
                behavior: 'smooth'
            });
        }
    }
    
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          x: 0,
          y: 0
        })
      }, 750)
    })
  }

  // Twitter cards
  head.meta.push({
    name: 'twitter:card',
    content: 'summary_large_image',
  })

  head.meta.push({
    name: 'twitter:site',
    content: '@pixelcrook',
  })

  head.meta.push({
    name: 'twitter:creator',
    content: '@pixelcrook',
  })

  head.meta.push({
    name: 'twitter:image',
    content: process.env.GRIDSOME_BASE_PATH + '/share.png',
  })

  head.meta.push({
    key: 'twitter:title',
    name: 'twitter:title',
    content: 'Design, thoughts & code for the next web',
  })

  head.meta.push({
    key: 'twitter:description',
    name: 'twitter:description',
    content: 'Web designer & front-end web developer from Sweden who craft smooth experiences with modern web technology, always with characteristic design and performance in focus.',
  })

  // OG tags
  head.meta.push({
    key: 'og:title',
    property: 'og:title',
    content: 'Design, thoughts & code for the next web',
  })

  head.meta.push({
    key: 'og:description',
    property: 'og:description',
    content: 'Web designer & front-end web developer from Sweden who craft smooth experiences with modern web technology, always with characteristic design and performance in focus.',
  })

  head.meta.push({
    property: 'og:type',
    content: 'article',
  })

  head.meta.push({
    property: 'og:image',
    content: process.env.GRIDSOME_BASE_PATH + '/share.png',
  })

  router.beforeEach((to, _from, next) => {
    head.meta.push({
      key: 'og:url',
      property: 'og:url',
      content: process.env.GRIDSOME_BASE_PATH + to.path,
    })
    next()
  })

  // Setup store
  Vue.use(Vuex)

  appOptions.store = new Vuex.Store({
    state: {
      menu: false,
      theme: 'light-mode',
      grid: false,
      postColor: ''
    },
    mutations: {
      toggleMenu(state) {
        state.menu = !state.menu
      },
      closeMenu(state) {
        state.menu = false
      },
      toggleTheme(state) {
        if (state.theme === 'light-mode') {
          state.theme = 'dark-mode'
        } else {
          state.theme = 'light-mode'
        }
      },
      darkTheme(state) {
        state.theme = 'dark-mode'
      },
      toggleGrid(state) {
        state.grid = !state.grid
      },
      setPostColor(state, payload) {
        state.postColor = payload
      },
    }
  })

  // Link to Twitter for Webmentions
  head.link.push({
    rel: 'me',
    href: 'https://twitter.com/pixelcrook',
  });

  // Apple touch icon
  head.link.push({
    rel: 'apple-touch-icon',
    href: './assets/static/favicon-192x192.png'
  })

  // Fonts
  head.link.push({
    rel: 'stylesheet',
    href: 'https://use.typekit.net/qfe7lgs.css'
  })
}
