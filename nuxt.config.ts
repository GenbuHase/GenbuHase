// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-09-28',

  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', "nuxt-gtag"],
  devtools: { enabled: true },

  app: {
    baseURL: "/GenbuHase",

    head: {
      link: [
        { rel: "canonical", href: "https://genbuhase.github.io/GenbuHase/" },
        { rel: "icon", href: "./favicon.ico" },
        { rel: "me", href: "https://twitter.com/GenbuHase/" },
      ]
    }
  },

  googleFonts: {
    families: {
      "Material+Symbols+Outlined": true,
      "Zen+Maru+Gothic": true
    }
  },

  gtag: {
    id: "G-63HGG1G8S2"
  }
})