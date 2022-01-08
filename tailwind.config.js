/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', ...defaultTheme.fontFamily.sans],
        serif: ['Libre Baskerville', ...defaultTheme.fontFamily.serif],
        mono: ['DM Mono',...defaultTheme.fontFamily.mono]
      },
      colors: {
        primary: {
          100: '#E0EDEE',
          200: '#B9D4DE',
          300: '#8EB3D2',
          400: '#5E85CB',
          500: '#2B45C7',
          default: '#2B45C7',
          600: '#2941A3',
          700: '#253B81',
          800: '#203160',
          900: '#182541'
        },
        accent: {
          100: '#F8F0DB',
          200: '#F1E1B2',
          300: '#E9D489',
          400: '#E2C960',
          500: '#DAC037',
          default: '#DAC037',
          600: '#C1A634',
          700: '#A98E30',
          800: '#92772C',
          900: '#7A6227'
        },
        tertiary: {
          100: '#A49FBD',
          200: '#8D88AC',
          300: '#77709B',
          400: '#605989',
          500: '#494278',
          default: '#494278',
          600: '#3F3765',
          700: '#352D51',
          800: '#2A223E',
          900: '#1D172A'
        },
      },
      opacity: {
        '10': '0.1',
        '20': '0.2'
      }
    },
    boxShadow: {
      short: '0 1px 2px 0 rgba(0, 0, 0, 0.25)',
      regular: '0 2px 4px 0 rgba(0, 0, 0, 0.25)',
      tall: '0 4px 8px 0 rgba(0, 0, 0, 0.25)',
    },
    borderRadius: {
      ...defaultTheme.borderRadius,
      btn: '3px',
      default: '7px'
    }
  },
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['components/**/*.vue', 'layouts/**/*.vue', 'pages/**/*.vue', 'plugins/**/*.js', 'nuxt.config.js'],
    options: {
      // Set whitelist in nuxt.config.js -> purgeCSS.whitelist: ['dark-mode', 'light-mode', 'btn', 'icon']
    }
  }
}
