import daisyui from "daisyui"
import typography from "@tailwindcss/typography";

/** @type { import('tailwindcss').Config } */
export default {
  content: [],

  theme: {
    extend: {
      screens: {
        "xs": "576px",
        "2xs": "360px",
        "ml": "425px",
        "mm": "375px",
        "ms": "320px"
      }
    },
  },

  plugins: [ daisyui, typography ],

  daisyui: {
    themes: ["light", "dark"],
  },
}

