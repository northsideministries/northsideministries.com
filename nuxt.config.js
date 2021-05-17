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

  env: {
    url:
      process.env.NODE_ENV === 'production'
        ? process.env.URL || 'https://www.northsideministries.com'
        : 'http://localhost:3000',
  },

  head: {
    htmlAttrs: {
      lang: 'en-US'
    },
    titleTemplate: (titleChunk) => {
      // If undefined or blank then we don't need the hyphen
      return titleChunk && titleChunk !== 'Northside Baptist Church' ? `${titleChunk} - Northside Baptist Church` : 'Northside Baptist Church'
    },
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
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: true
      },
      {
        rel: 'preload',
        as: 'style',
        href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap',
        media: 'print',
        onload: `this.media='all'`
      },
      {
        rel: 'preload',
        as: 'style',
        href: 'https://fonts.googleapis.com/css2?family=DM+Mono&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=DM+Mono&display=swap',
        media: 'print',
        onload: `this.media='all'`
      },
      {
        rel: 'preload',
        as: 'style',
        href: 'https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap',
        media: 'print',
        onload: `this.media='all'`
      }
    ],
    noscript: [
      {
        innerHTML:
          '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Mono&display=swap"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap">'
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
    { src: '~/plugins/mapbox.js', mode: 'client', ssr: false },
    '~/plugins/vue-content-placeholders.js',
    '~/plugins/vue-socialhead.js'
  ],

  buildModules: ['@nuxtjs/tailwindcss', '@nuxtjs/svg', '@nuxtjs/pwa'],

  modules: ['nuxt-purgecss', '@nuxt/content', '@nuxtjs/sitemap'],
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

    // TODO: only test in pre-production
    // analyze: true,

    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) { }
  },

  sitemap: {
    hostname: 'https://northsideministries.com',
    exclude: ['/static/admin/**'],
    gzip: true
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