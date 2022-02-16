const MAT_COLORS = require('./libs/shared/styles/src/lib/material/colors');
const MAT_ELEVATIONS = require('./libs/shared/styles/src/lib/material/elevations');

module.exports = {
  prefix: '',
  mode: 'jit',
  important: true,
  purge: {
    content: [
      './apps/**/*.{html,ts,css,scss,sass,less,styl}',
      './libs/**/*.{html,ts,css,scss,sass,less,styl}'
    ]
  },
  darkMode: 'class',
  theme: {
    extend: {
      colors: { ...MAT_COLORS }
    },
    boxShadow: { ...MAT_ELEVATIONS }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
