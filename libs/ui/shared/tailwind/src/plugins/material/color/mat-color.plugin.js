/* eslint-disable no-extra-boolean-cast */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const plugin = require('tailwindcss/plugin');
const matColors = [
  require('./red.json'),
  require('./pink.json'),
  require('./purple.json'),
  require('./deeppurple.json'),
  require('./indigo.json'),
  require('./blue.json'),
  require('./lightblue.json'),
  require('./cyan.json'),
  require('./teal.json'),
  require('./green.json'),
  require('./lightgreen.json'),
  require('./lime.json'),
  require('./yellow.json'),
  require('./amber.json'),
  require('./orange.json'),
  require('./deeporange.json'),
  require('./brown.json'),
  require('./grey.json'),
  require('./bluegrey.json')
];

function generateUtilities() {
  const utilities = {};

  matColors.forEach((matColor) => {
    matColor.shades.forEach((shade) => {
      const bgClass = `.bg-${matColor.name}-${shade[0]}`;
      const fgClass = `.text-${matColor.name}-${shade[0]}`;
      utilities[bgClass] = { 'background-color': shade[1] };
      utilities[fgClass] = { color: shade[1] };
      if (!!shade[2])
        utilities[bgClass] = { ...utilities[bgClass], color: shade[2] };
    });
  });
  return utilities;
}

module.exports = plugin(function ({ addUtilities }) {
  addUtilities(generateUtilities(), {
    variants: ['responsive', 'hover', 'disabled']
  });
});
