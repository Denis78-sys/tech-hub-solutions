/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      container: {
        screens: {
          sm: '328px', // Para telas menores ou iguais a 360px
          md: '560px', // Para telas menores ou iguais a 720px
          lg: '1040px', // Para telas menores ou iguais a 1280px
          xl: '1120px', // Para telas menores ou iguais a 1920px
          "2xl": '1440px'
        },
      }
    },
    screens: {
      sm: "360px",

      md: "720px",

      lg: "1280px",

      xl: "1440px",

      "2xl": "1920px",
    },
    colors: {
      'azul-300': '#5F86D0',
      'azul-400': '#3357A1',
      'azul-500': '#0A2463',
      'azul-600': '#071C55',
      'azul-700': '#041447',
      'laranja': '#FF6F61',
      'branco': '#FFFFFF',
      
    },
  },
  plugins: [],
};
