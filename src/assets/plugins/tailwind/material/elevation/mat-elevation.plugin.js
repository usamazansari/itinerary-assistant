/* eslint-disable no-extra-boolean-cast */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const plugin = require('tailwindcss/plugin');

const elevation = require('./elevation.json');

function generateUtilities() {
  const utilities = {};

  elevation.levels.forEach(level => {
    const elevationClass = `.elevation-${level[0]}`;
    utilities[elevationClass] = { 'box-shadow': level[1] };
  });
  return utilities;
}

module.exports = plugin(function ({ addUtilities }) {
  addUtilities(
    generateUtilities(),
    { variants: ['responsive', 'hover', 'disabled'] }
  );
});
