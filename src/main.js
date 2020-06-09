// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
require('~/assets/css/tailwind.css')
import Vuex from 'vuex'

export default function (Vue, { router, head, isClient, appOptions }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

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

  // Fonts
  head.link.push({
    rel: 'stylesheet',
    href: 'https://use.typekit.net/qfe7lgs.css'
  })
}
