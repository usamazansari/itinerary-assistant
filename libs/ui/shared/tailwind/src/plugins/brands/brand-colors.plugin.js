/* eslint-disable no-extra-boolean-cast */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const plugin = require('tailwindcss/plugin');

const lib = require('./brands.json');

function generateUtilities() {
  const utilities = {};
  lib.brands.forEach((brand) => {
    brand.shades.forEach((shade) => {
      const brandColor = !!shade[0]
        ? `.text-brand-${brand.name}-${shade[0]}`
        : `.text-brand-${brand.name}`;
      utilities[brandColor] = { color: `${shade[1]}` };
    });
  });
  return utilities;
}

// TODO: Use configuration for brand colors
module.exports = plugin(function ({ addUtilities }) {
  addUtilities(generateUtilities(), { variants: ['responsive', 'hover'] });
});
