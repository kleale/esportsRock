/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  daisyui: {
    themes: ["emerald", "dark"],
  },
  theme: {
    
    extend: {
      fontSize: {
        xxs: '0.6rem',
      } ,
      fontFamily: {
        sans: ['Inter var', 'Inter var', ...defaultTheme.fontFamily.sans],
        "poppins": ['Poppins', 'sans-serif'] 
      },
      colors: {
        'apple': '#98AA28',
        'odd': '#212D3D',
        'primary': "#333",
        lime: colors.lime,
        //   transparent: 'transparent',
        //   current: 'currentColor',
        //black: colors.black,
        //   white: colors.white,
        //gray: colors.gray,
        //   emerald: colors.emerald,
        //   yellow: colors.yellow,
        //   sky: colors.sky,
      }
    },
   
  },

  plugins: [
    require("@tailwindcss/typography"),
    require('daisyui'),
  ],
}