export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'José Victor - Frontend Developer',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Hi, I’m José Victor, frontend developer. I started programming in 2017. I want to be a great developer and I am every day studying and striving more and more to become one.',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'José Victor - Frontend Developer',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        ccontent: 'https://www.josevictor.dev/' + '/ogImage.webp',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Hi, I’m José Victor, frontend developer. I started programming in 2017. I want to be a great developer and I am every day studying and striving more and more to become one.',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://www.josevictor.dev/',
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
        content: 'José Victor - Frontend Developer',
      },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://www.josevictor.dev/',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://www.josevictor.dev/' + '/ogImage.webp',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          'Hi, I’m José Victor, frontend developer. I started programming in 2017. I want to be a great developer and I am every day studying and striving more and more to become one.',
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
    families: {
      'Concert+One': true,
      Poppins: [300, 400, 600, 700, 900],
      Lato: [100, 300],
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
}
