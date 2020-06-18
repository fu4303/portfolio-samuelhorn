// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const postcssConfig = require('./postcss.config.js')

module.exports = {
  siteName: 'samuelhorn.com',
  siteDescription: 'Web designer & front-end web developer from Sweden who craft smooth experiences with modern web technology, always with characteristic design and performance in focus.',

  templates: {
    Project: '/projects/:title',
    Post: '/:title',
    Category: '/category/:id'
  },

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/*.md',
        refs: {
          category: {
            typeName: 'Category',
            create: true
          }
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Project',
        path: 'content/projects/*.md'
      }
    },
    {
      use: '@zefman/gridsome-source-webmention',
      options: {
        domain: 'samuelhorn.com',
        token: '2VQkvVX5yue7e4UXfCSR1Q',
      },
    },
    {
      use: 'gridsome-plugin-pwa',
      options: {
        // Service Worker Options
        disableServiceWorker: false,
        serviceWorkerPath: 'service-worker.js',
        cachedFileTypes: 'js,json,css,html,png,jpg,jpeg,svg,gif',

        // Manifest Options (https://developer.mozilla.org/en-US/docs/Web/Manifest)
        manifestPath: 'manifest.json',
        title: 'samuelhorn.com',
        startUrl: '/',
        display: 'standalone',
        statusBarStyle: 'default',
        themeColor: '#1C2024',
        backgroundColor: '#ffffff',
        icon: 'favicon.png',
        shortName: 'samuelhorn',               // Optional
        description: 'Web designer & front-end web developer from Sweden who craft smooth experiences with modern web technology, always with characteristic design and performance in focus.',  // Optional
        categories: ['development'],           // Optional
        lang: 'en-US',                         // Optional
        dir: 'auto',                           // Optional
        maskableIcon: true,                    // Optional
        gcmSenderId: undefined,                // Optional
        svgFavicon: 'favicon.svg',    // Optional. Requires favicon.ico fallback
        msTileColor: '#1C2024',                // Optional
        appleMaskIcon: 'favicon.png', // Optional
        appleMaskIconColor: '#1C2024',         // Optional
      }
    }
  ],

  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  },

  css: {
    loaderOptions: {
        postcss: {
            ...postcssConfig
        },
    },
  },

  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  }
}
