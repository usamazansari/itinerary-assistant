/* eslint-disable no-undef */
/* eslint-disable no-extra-boolean-cast */
/* eslint-disable @typescript-eslint/no-var-requires */

module.exports = {
  mode: process.env.TAILWIND_MODE ? 'build' : 'watch',
  important: true,
  purge: {
    content: [
      './src/**/*.{html,ts,css,scss}'
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
