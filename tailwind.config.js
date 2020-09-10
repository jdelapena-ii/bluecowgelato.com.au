const defaultTheme = require('tailwindcss/defaultTheme');
const tailwindUI = require('@tailwindcss/ui');
const typography = require('@tailwindcss/typography');
const aspectRatio = require('tailwindcss-aspect-ratio');

// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ['./src/**/*.js'],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  experimental: 'all',
  theme: {
    aspectRatio: {
      square: [1, 1],
      '16/9': [16, 9],
    },
    extend: {
      colors: {
        gold: '#fdd690',
        'sky-blue': '#7a9bce',
        slate: '#3a4a62',
      },
      fontFamily: {
        display: ['True North', ...defaultTheme.fontFamily.sans],
        dots: ['True North Dots', ...defaultTheme.fontFamily.sans],
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        'screen-2xl': '48rem',
        'screen-3xl': '56rem',
        'screen-4xl': '64rem',
        'screen-5xl': '72rem',
        'screen-7xl': '80rem',
        'screen-8xl': '88rem',
        'screen-9xl': '96rem',
        'screen-10xl': '104rem',
        'screen-11xl': '112rem',
        'screen-12xl': '120rem',
      },
    },
  },
  // Default values here: https://tailwindcss.com/docs/pseudo-class-variants#default-variants-reference
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'group-focus'],
    boxShadow: ['responsive', 'hover', 'focus', 'group-focus'],
  },
  plugins: [
    // See https://github.com/webdna/tailwindcss-aspect-ratio for details
    aspectRatio,
    // See https://tailwindui.com/documentation for details
    tailwindUI,
    // See https://github.com/tailwindlabs/tailwindcss-typography for details
    typography,
  ],
};
