export default defineNuxtPlugin(async (nuxtApp) => {
    const config = useRuntimeConfig()
    
    const baseURL = config.public.appUrl

    nuxtApp.provide('apiURL', baseURL)
})
