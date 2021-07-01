/* eslint-disable no-undef */
/* eslint-disable no-extra-boolean-cast */
/* eslint-disable @typescript-eslint/no-var-requires */

module.exports = {
  mode: 'jit',
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
    require('./src/assets/plugins/tailwind/material/color/mat-color.plugin'),
    require('./src/assets/plugins/tailwind/material/elevation/mat-elevation.plugin'),
    require('./src/assets/plugins/tailwind/brands/brand-colors.plugin')
  ]
};
