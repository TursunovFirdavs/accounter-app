/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '10px',
      screens: {
        xl: '1360px',
        sm: '390px'
      }
    },
    extend: {
      colors: {
        'blue': '#B1E3FA'
      },
      screens: {
        'xl': {'min': '767px'},
        'sm': {'max': '767px'},
      }
    },
  },
  plugins: [],
}