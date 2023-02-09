export default {
  env: {
    BASE_URL: process.env.BASE_URL,
    TITLE: process.env.TITLE,
    DESCRIPTION: process.env.DESCRIPTION,
    OGIMAGE: process.env.OGIMAGE,
  },

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: process.env.TITLE,
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.DESCRIPTION,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: process.env.TITLE,
      },
      {
        hid: 'og:image',
        property: 'og:image',
        ccontent: process.env.BASE_URL + process.env.OGIMAGE,
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: process.env.DESCRIPTION,
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: process.env.BASE_URL,
      },
      {
        keywords: 'portfolio, frontend',
      },
      // ==============================================================================
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:title',
        property: 'og:title',
        content: process.env.TITLE,
      },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: process.env.BASE_URL,
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: process.env.BASE_URL + process.env.OGIMAGE,
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: process.env.DESCRIPTION,
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/eslint-module', '@nuxt/image'],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
  ],

  image: {
    domains: ['josevictor.dev'],
    presets: {
      default: {
        modifiers: {
          loading: 'lazy',
          quality: 95,
          format: 'webp',
        },
      },
    },
    // The screen sizes predefined by `@nuxt/image`:
    screens: {
      xs: 420,
      sm: 640,
      md: 768,
      lg: 1024,
    },
  },

  googleFonts: {
    preload: true,
    preconnect: true,
    families: {
      'Concert+One': true,
      Poppins: [300, 400, 600, 700, 900],
      Lato: [100, 300],
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
}
