/* eslint-disable no-undef */
/* eslint-disable no-extra-boolean-cast */
/* eslint-disable @typescript-eslint/no-var-requires */
const { guessProductionMode } = require('@ngneat/tailwind');

process.env.TAILWIND_MODE = guessProductionMode() ? 'build' : 'watch';

module.exports = {
  important: true,
  purge: {
    content: [
      './src/**/*.{html,ts,css,scss,sass,less,styl}'
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Fira Sans', 'Open Sans', 'Roboto', 'Segoe UI', 'Calibri', 'Arial', 'sans-serif'],
      'serif': ['Times New Roman', 'serif'],
      'mono': ['Fira Code', 'Consolas', 'monospace']
    }
  },
  plugins: [
    require('./tailwind/material/color/mat-color.plugin'),
    require('./tailwind/material/elevation/mat-elevation.plugin')
  ]
};
