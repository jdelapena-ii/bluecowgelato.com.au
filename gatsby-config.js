const dotenv = require('dotenv');
const postCssImport = require('postcss-import');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const resolveConfig = require('tailwindcss/resolveConfig');

const tailwindConfig = require('./tailwind.config.js');

// Get Tailwind values so we can use them in JS
const fullConfig = resolveConfig(tailwindConfig);

// Set up `dotenv` so that we can use `.env.development` and/or `.env.production` to store environment variables
dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

// Declare variables so these values can be reused
const title = 'Blue Cow Gelato';
const siteUrl = 'https://www.bluecowgelato.com.au';

module.exports = {
  siteMetadata: {
    title,
    description:
      'Delicious freshly made gelato and sorbet, custom gelato cakes, sundaes, shakes, brownies, and local Doppio coffee made on site.',
    author: '',
    siteUrl,
    phone: '0491 060 099',
    email: 'bluecowgelato@gmail.com',
    address: {
      line1: '1/72 Clarence Street',
      line2: 'Port Macquarie',
      googleMaps: 'https://goo.gl/maps/Xgic2nCnqNeL9z888',
    },
    social: {
      facebook: 'https://www.facebook.com/bluecowgelato/',
      instagram: 'https://www.instagram.com/bluecowgelato/',
    },
  },
  plugins: [
    'gatsby-plugin-netlify',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: title,
        short_name: 'Blue Cow',
        start_url: '/',
        background_color: fullConfig.theme.colors['sky-blue'],
        theme_color: fullConfig.theme.colors['sky-blue'],
        display: 'minimal-ui',
        icon: 'src/images/favicon.jpg', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [
          postCssImport,
          tailwindcss(tailwindConfig),
          autoprefixer,
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'src/images',
      },
    },
  ],
};
