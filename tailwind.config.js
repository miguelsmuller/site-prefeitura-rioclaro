const { guessProductionMode } = require("@ngneat/tailwind");
const defaultColors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

process.env.TAILWIND_MODE = guessProductionMode() ? 'build' : 'watch';

module.exports = {
  prefix: '',
  //mode: 'jit',
  purge: {
    content: [ './src/app/**/*.{html,ts,css,scss,sass,less,styl}' ]
  },
  darkMode: false,
  theme: {
    screens: {
      ...defaultTheme.screens,
      md: '770px',
    },
    extend: {
      colors: {
        'gray': defaultColors.blueGray,
        'elephant': {
          '50': '#f2f5f6',
          '100': '#e6ebec',
          '200': '#bfccd0',
          '300': '#99adb4',
          '400': '#4d707c',
          '500': '#003344',
          '600': '#002e3d',
          '700': '#002633',
          '800': '#001f29',
          '900': '#001921'
        },
        'fruit-salad': {
          '50': '#f7faf7',
          '100': '#eff5ef',
          '200': '#d6e5d6',
          '300': '#bdd5be',
          '400': '#8cb68d',
          '500': '#5a965c',
          '600': '#518753',
          '700': '#447145',
          '800': '#365a37',
          '900': '#2c4a2d'
        }
      },
    },
    fontFamily: {
      'sans': ['"Open Sans"', ...defaultTheme.fontFamily.sans],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography')
  ],
};
