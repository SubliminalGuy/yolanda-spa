

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  mode: 'universal',
  target: 'static',
  generate: {
    /*
    routes () {
      return axios.get("https://safe-hamlet-27016.herokuapp.com/volunteers")
        .then(response => {
        return response.data.map(post => `volunteers/${post.id}`)
    })
  }
  */
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'yolanda-spa',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'process.env.npm_package_description' || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/css/styles.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [{
    src: '~/plugins/vuex-persist',
    mode: 'client'
  }, {
    src: '~/plugins/vuelidate',
    ssr: 'true'
  }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios'
  ],

  axios: {
    baseURL: process.env.API_URL,
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config, ctx) {},
    vendor: [
      'vuelidate'
    ]
  }
}
