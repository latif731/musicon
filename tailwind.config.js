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
        tempek:['Poppins', 'sans-serif'],
        josjis:['Roboto'],
      },
      backgroundColor:{
        'nav': 'rgba(31, 29, 43, 1)',
        'input':'rgba(33, 36, 46, 1)',
        'sidebar':"rgba(31, 29, 43, 1)",
        'layout':"rgba(60, 65, 86, 1)",
        'player':"rgba(37, 40, 54, 1)",
        'card':"rgba(31, 29, 43, 1)",
        'logreg':"rgba(0, 0, 0, 0.8)",
        'logreg2':"rgba(37, 40, 54, 0.7)",
        'logreg3':"rgba(21, 17, 33, 1)",
        'input':"rgba(60, 65, 86, 1)",
         'garis':"rgba(60, 65, 86, 1)",
         'scroll':"rgba(255, 255, 255, 0.4)",
         'hover':"rgba(226, 226, 234, 1)",
         'btn':"rgba(60, 65, 86, 1)"
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
        'left':"rgba(0, 101, 218, 1)",
        'abuabu':"rgba(146, 146, 157, 1)",
        'garis':"rgba(60, 65, 86, 1)",
      },
      width:{
        x:"1550px",
        login:"435px",
        input:"396px",
        loginButton:"396px"
      },
      height:{
        y:"1024px",
        login:"550px",
        input:"40px",
        loginButton:"41px"
      },
      border:{
        'garis':"rgba(60, 65, 86, 1)"
      },
      padding:{
        'p1':"3.5"
      }
    },
  },
  plugins: [],
}

