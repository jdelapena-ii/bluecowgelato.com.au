/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';

import { Header } from './header';
import { HeaderIndicator } from './header-indicator';
import { Footer } from './footer';
import { BackToTop } from './back-to-top';

function Layout({ children }) {
  return (
    <div className="relative flex flex-col min-h-screen font-sans antialiased bg-sky-blue text-slate fill-available">
      <Header />
      <main id="main-content" className="flex-1">
        <HeaderIndicator />
        {children}
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Layout };
