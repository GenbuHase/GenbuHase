import daisyui from "daisyui"
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: [],

  theme: {
    extend: {
      screens: {
        "2xs": "360px"
      }
    },
  },

  plugins: [ daisyui, typography ],
}

