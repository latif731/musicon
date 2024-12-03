/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        kontol: ['DM Sans', 'sans-serif'],
        tempek:['Poppins', 'sans-serif']
      },
      backgroundColor:{
        'nav': 'rgba(31, 29, 43, 1)',
        'input':'rgba(33, 36, 46, 1)',
        'sidebar':"rgba(31, 29, 43, 1)",
        'layout':"rgba(60, 65, 86, 1)",
        'player':"rgba(37, 40, 54, 1)",
        'card':"rgba(31, 29, 43, 1)"
      },
      textColor:{
        'email':"rgba(146, 146, 157, 1)",
        'sidebar':"rgba(146, 146, 157, 1)",
        'bannerButton':"rgba(67, 153, 253, 1)",
        'player':"rgba(146, 146, 157, 1)"
      },
      borderColor:{
        'sidebar':"rgba(60, 65, 86, 1)",
      },
      colors:{
        'right':"rgba(67, 153, 253, 1)",
        'left':"rgba(0, 101, 218, 1)"
      }
    },
  },
  plugins: [],
}

