const path = require('path')

import axios from 'axios'
import folders from './contents/folders.js'

const nodeExternals = require('webpack-node-externals')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/vuetifyjs-nuxt/'
  }
} : {}

module.exports = {
  /*
  ** Router base
  */
 ...routerBase,

  mode: 'universal',

  /*
  ** Generate routes SSR
  */
  generate: {
    routes: async function () {
      let users = await axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
        return res.data.map((user) => {
          return {
            route: '/users/' + user.id,
            payload: user
          }
        })
      })
      let files = folders.map(file => '/folders/' + file)
      return Promise.all([users, files]).then(values => {
        return [...values[0], ...values[1]]
      })
    }
  },

  /*
  ** Headers of the page
  */
  head: {
    title: 'vuetifyjs-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js + Vuetify.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
  ],

  /*
  ** axios configuration
  */
  axios: {
    baseUrl: ''
  },

  plugins: ['~/plugins/vuetify.js'],
  css: ['~/assets/style/app.styl'],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^vuetify/],
    plugins: [
      new VuetifyLoaderPlugin()
    ],
    extractCSS: true,
    extend (config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      if (process.server) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ]
      }
      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        include: path.resolve(__dirname, 'static'),
        options: {
          vue: {
            root: "dynamicMarkdown"
          }
        }
      })
    }
  }
}
