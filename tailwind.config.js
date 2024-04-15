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
      fontSize: {
        'titulo-destaque': '2.5rem',
        'titulo-principal': '2.12rem',
        'subtitulo': '1.75rem',
        'titulo-secao': '1.5rem',
        'subtitulo-secao': '1.2rem',
        'paragrafo': '1rem',
        'legenda': '0.81rem'
      },
      width: {
        '600': '600px',
        '694': '694px',
        '561': '561px',
        '328': '328px',
        'servico-l-s': '336px',
        'servico-m': '559px',
        'texto-sobre-lg': '512px',
        'icone-servico': '109px'

      },
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
      'verde-botao': '#03A613',
      'bg-footer1': '#344054',
      'bg-footer2': '#101828',
      'fonte-footer': '#EAECF0',
      'cinza': '#98A2B3'
    },
  },
  plugins: [],
};
