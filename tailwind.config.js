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
        'blue': '#B1E3FA',
        'main-yellow': '#F4C402',
        'main-green': '#5BC6A4',
        'main-blue': '#0071F7',
        'main-red': '#D23750',
        'secondary-green': '#D9E6D4',
        'secondary-light': '#F1F3F4'
      },
      screens: {
        'xl': {'min': '767px'},
        'sm': {'max': '767px'},
      }
    },
  },
  plugins: [],
}