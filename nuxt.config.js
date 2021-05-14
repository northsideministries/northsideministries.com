import path from 'path'
import postcssImport from 'postcss-import'
import postcssNesting from 'postcss-nesting'
import postcssPresetEnv from 'postcss-preset-env'
import * as SITE_INFO from './content/site/info.json'

export default {
  target: 'static',
  components: true,
  generate: {
    fallback: true,
  },
  // ? The env Property: https://nuxtjs.org/api/configuration-env/
  env: {
    url:
      process.env.NODE_ENV === 'production'
        ? process.env.URL || 'https://www.northsideministries.com'
        : 'http://localhost:3000',
    lang: SITE_INFO.sitelang || 'en-US'
  },

  head: {
    title: SITE_INFO.sitename || process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: SITE_INFO.sitedescription || process.env.npm_package_description || ''
      }
    ],
    link: [
      { // mapbox styles
        rel: 'stylesheet',
        href: 'https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.0/mapbox-gl.css'
      }
    ],
    __dangerouslyDisableSanitizers: ['noscript']
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#526488' },

  css: ['@/assets/css/tailwind.css', '@/assets/css/main.pcss'],

  plugins: [
    { src: '~/plugins/vue-unicons', mode: 'client', ssr: false },
    { src: '~/plugins/fontsource.js', mode: 'client', ssr: false },
    { src: '~/plugins/mapbox.js', mode: 'client', ssr: false },
    '~/plugins/vue-content-placeholders.js'
  ],

  buildModules: ['@nuxtjs/tailwindcss', '@nuxtjs/svg', '@nuxtjs/pwa'],

  modules: ['nuxt-purgecss', '@nuxt/content'],
  markdownit: {
    injected: true
  },

  build: {
    extractCSS: true,
    postcss: {
      plugins: {
        'postcss-import': postcssImport,
        tailwindcss: path.resolve(__dirname, './tailwind.config.js'),
        'postcss-nesting': postcssNesting,
        'postcss-preset-env': postcssPresetEnv({
          stage: 1,
          features: {
            'nesting-rules': false
          }
        })
      },
    },

    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) { }
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    exposeConfig: false // enables `import { theme } from '~tailwind.config'`
  },
  purgeCSS: {
    mode: 'postcss',
    // ? Whitelisting docs: https://v1.purgecss.com/whitelisting
    whitelist: ['dark-mode', 'light-mode', 'btn', 'icon', 'main'],
    whitelistPatterns: [/^card/, /^nuxt-content/, /image$/, /title$/],
    whitelistPatternsChildren: [/^nuxt-content/, /code/, /pre/, /token/, /^vue-content-placeholders/]
  },

  pwa: {
    icon: {
      source: 'static/icon.png',
      filename: 'icon.png'
    },
    manifest: { name: SITE_INFO.sitename || process.env.npm_package_name || '', lang: process.env.lang },
    meta: {
      name: SITE_INFO.sitename || process.env.npm_package_name || '',
      lang: process.env.lang,
      ogHost: process.env.URL,
      ogImage: '/ogp.jpg'
    }
  }
}