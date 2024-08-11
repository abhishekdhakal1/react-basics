/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height:{
        'custom' : '750px',
      },
      width:{
       'custom' : '338px'
      },
      margin : {
      'custom' : '23.39px'
      },
      colors : {
        "primaryWhite" : '#e5e5e5',
        'primaryRed' : "#e53170",
        'primaryOrange' : "#F25F4C",
        'lightRed' : "#B07289"
      }
    },
    
  },
  plugins: [],
}

