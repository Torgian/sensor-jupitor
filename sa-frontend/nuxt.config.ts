// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        'vuetify/lib/styles/main.sass',
        '@mdi/font/css/materialdesignicons.min.css',
    ],

    runtimeConfig: {
      public: {
        baseURL: 'http://127.0.0.1:8000/api/v1.0/',
      }
    },

    // Sourcemap is set to false to avoid warnings for Vuetify .mjs sourcemap issues
    sourcemap: {
      "server": false,
      "client": false,
    },

    build: {
      transpile: ['vuetify'],
    },

    modules: [
        '@pinia/nuxt',
    ],
    
    vite: {
      server: {
        hmr: {
          protocol: 'ws',
        }
      },
      define: {
        'process.env.DEBUG': false,
      },
    },
})
