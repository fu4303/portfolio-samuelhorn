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
    property: 'og:type',
    content: 'article',
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


  // Apple touch icon
  head.link.push({
    rel: 'apple-touch-icon',
    href: 'assets/static/favicon-192x192.png'
  })

  // Fonts
  head.link.push({
    rel: 'stylesheet',
    href: 'https://use.typekit.net/qfe7lgs.css'
  })

  // Feed
  head.link.push({
    rel: 'feed',
    type: 'text/html',
    href: process.env.GRIDSOME_BASE_PATH + '/feed.xml'
  })
}
