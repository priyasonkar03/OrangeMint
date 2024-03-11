/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#f39c0b",
        secondary:"#ED8505",
        primaryDark:"#D65609",
        dark: "#656565",
      },
      container:{
        center:true,
        padding:{
          DEFAULT:"1rem",
          sm:"2rem",
        }
      }
    },
  },
  plugins: [],
}

