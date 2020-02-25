
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'InnovateOne Company',

      server: {
          port: 8007, // default: 3000
          host: '192.241.131.11' // default: localhost
      },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Official website of iOneC' },
      { hid: 'author', name: 'author', content: 'iOneC' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~assets/styles/main.scss',
    'aos/dist/aos.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
 '~plugins/aos.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {

  },
  /*
  ** Build configuration
  */
  build: {

  assetsPublicPath: '/',
  assetsSubDirectory: 'static',
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },

    generate: {

        assetsPublicPath: '/',
        assetsSubDirectory: 'static',
        /*
        ** You can extend webpack config here
        */
        extend (config, ctx) {
        }
    }
}
