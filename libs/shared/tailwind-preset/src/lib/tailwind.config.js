/** @type {import('tailwindcss').Config} */
const TAILWIND_PRESET = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4285f4'
        },
        white: '#ffffff'
      }
    }
  },
  plugins: []
};

module.exports = {
  TAILWIND_PRESET
};
