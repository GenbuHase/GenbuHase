// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-09-28',

  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
  devtools: { enabled: true },

  app: {
    baseURL: "/GenbuHase"
  },

  googleFonts: {
    families: {
      "Material+Symbols+Outlined": true,
      "Zen+Maru+Gothic": true
    }
  }
})