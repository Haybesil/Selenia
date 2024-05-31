/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          Selenia: '#00FFA3',
          Selenia10:'#CCF6E3',
          Selenia90: '#004526',
          Selenia100: '#002A17',
          Selenia80: '#016839',
          Selection70: '#018B4C'
        },
        secondary: {
         
        },
      },
    },
  },
  plugins: [],
}

