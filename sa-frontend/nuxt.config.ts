// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        'vuetify/lib/styles/main.sass',
        '@mdi/font/css/materialdesignicons.min.css',
    ],

    runtimeConfig: {
      public: {
        appUrl: 'http://127.0.0.1:8000/api/v1.0',
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
          clientPort: 24678,
          port: 24678,
        },

        // watch: {
        //   usePolling: true,
        // },
      },
      define: {
        'process.env.DEBUG': false,
      },
    },
})
