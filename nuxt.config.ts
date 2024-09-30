// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-09-28',

  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', "@nuxt/icon", "nuxt-gtag"],
  devtools: { enabled: true },

  app: {
    baseURL: "/GenbuHase",

    head: {
      link: [
        { rel: "canonical", href: "https://genbuhase.github.io/GenbuHase/" },
        { rel: "icon", href: "./favicon.ico" },
        { rel: "me", href: "https://twitter.com/GenbuHase/" },

        { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/yakuhanjp@4.1.1/dist/css/yakuhanjp.css" },
        { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/yakuhanjp@4.1.1/dist/css/yakuhanrp.css" }
      ]
    },

    pageTransition: {
      name: "page",
      mode: "out-in"
    },

    layoutTransition: {
      name: "layout",
      mode: "out-in"
    }
  },

  googleFonts: {
    families: {
      "Zen+Maru+Gothic": true,
      "Material+Symbols+Outlined": true
    }
  },

  gtag: {
    id: "G-63HGG1G8S2"
  }
})