/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': 'rgb(255, 255, 255)',
        'primaryText': '#FEFFFF',
        'secondaryText': '#174a5b',
        'primaryBacground': '#DEF2F1',
        'secondaryBacground': '#3AAFA9',
        'buttonColor': '#05807c',
        'buttonHoverColor': '#01d2cb',
        'scrollbarColor': '#70c8c3',
        'scrollbarBacground': '#feffff',
      },
      fontFamily: {
        sans: ['Comic Sans MS', 'sans-serif'],
      },
      maxWidth: {
        'calc-vw-48': 'calc(100vw - 48px)',
      },
      gridTemplateColumns: {
        'cast-template': 'repeat(auto-fill, minmax(200px, 1fr))',
        'auto-fill-minmax': 'repeat(auto-fill, minmax(250px, 1fr))'
      }
    },
  },
  plugins: [],
}


