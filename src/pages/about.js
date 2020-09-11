import React from 'react';
import GatsbyImage from 'gatsby';
import PropTypes from 'prop-types';

import { Layout, SEO, ContactForm } from '../components';

function AboutPage() {
  return (
    <Layout>
      <SEO title="About" />
      <h1 className="py-48 text-5xl font-black text-center text-slate font-display">
        About
      </h1>
      <ContactForm />
    </Layout>
  );
}

function AboutHero({ image }) {
  return (
    <div className="absolute inset-0 flex">
      <GatsbyImage fluid={image} className="flex-1" />
    </div>
  );
}

AboutHero.propTypes = {
  image: PropTypes.node.isRequired,
};

export default AboutPage;
