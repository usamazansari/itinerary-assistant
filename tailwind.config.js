const { guessProductionMode } = require('@ngneat/tailwind');

process.env.TAILWIND_MODE = guessProductionMode() ? 'build' : 'watch';

module.exports = {
  prefix: '',
  mode: 'jit',
  purge: {
    content: [
      './apps/**/*.{html,ts,css,scss,sass,less,styl}',
      './libs/**/*.{html,ts,css,scss,sass,less,styl}'
    ]
  },
  darkMode: 'class',
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('./libs/ui/shared/tailwind/src/plugins/material/color/mat-color.plugin'),
    require('./libs/ui/shared/tailwind/src/plugins/material/elevation/mat-elevation.plugin'),
    require('./libs/ui/shared/tailwind/src/plugins/brands/brand-colors.plugin')
  ]
};
