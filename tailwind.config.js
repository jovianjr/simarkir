/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    "./src/**/*.{js,ts,jsx,tsx}",
  ],   theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      body: ['Poppins', 'Arial'],
      deco: ['Poppins'],
    },
    extend: {
      colors:{
        black:'#202020',
        white:'#F7F7F7',
        blue: '#1D4D70',
        orange: '#ECB223',
        red: '#DE2C13',
        green: '#8FCF05',
        slate: '#CCDAE4',
      }
    },
  },
  plugins: [],
}
