/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// Self host fonts using Typefaces.js https://github.com/KyleAMathews/typefaces

import React from 'react';
import PropTypes from 'prop-types';
import 'typeface-montserrat';

import { SiteProvider } from './src/context';
import './src/css/tailwind.css';

export const wrapRootElement = ({ element }) => (
  <SiteProvider>{element}</SiteProvider>
);

wrapRootElement.propTypes = {
  element: PropTypes.node.isRequired,
};
