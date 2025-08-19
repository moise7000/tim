// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Cat Heaven'
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxtjs/google-fonts'],
  css: ['~/assets/global.css'],
  googleFonts: {
    families: {
      Pacifico: true,
      Quicksand: true,
    }
  }
})