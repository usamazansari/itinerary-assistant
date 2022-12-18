const { createGlobPatternsForDependencies } = require('@nrwl/next/tailwind');
const { join } = require('path');
const {
  TAILWIND_PRESET
} = require('../../../libs/shared/tailwind-preset/src/lib/tailwind.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [TAILWIND_PRESET],
  content: [
    join(__dirname, 'pages/**/*.tsx'),
    ...createGlobPatternsForDependencies(__dirname)
  ],
  theme: {
    extend: {}
  },
  plugins: []
};
