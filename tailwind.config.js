/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    fontFamily: {
      'sfmono': ['SFMono', 'sans-serif'],
      'calibre': ['Calibre', 'sans-serif']
    },
    extend: {
      colors: {
        primary: "#181818",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "off-white": "#ccd6f6",
        "off-grey": "#8892B0",
        highlight: "#62f8d5"
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        'xs': { 'min': '375px', 'max': '499px' },
        'sm': { 'min': '500px', 'max': '767px' },
        'md': { 'min': '768px', 'max': '900px' },
        'lg': { 'min': '901px', 'max': '1025px' },
        'xl': { 'min': '1170px'}
      },
      // backgroundImage: {
      //   "hero-pattern": "url('/src/assets/herobg.png')",
      // },
    },
  },
  plugins: [],
};
