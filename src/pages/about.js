import React from 'react';
import GatsbyImage from 'gatsby-image';
import PropTypes from 'prop-types';

import { Layout, SEO, ContactForm } from '../components';
import { useGraphQL } from '../hooks';

function AboutPage() {
  const { aboutHeroImage } = useGraphQL();
  return (
    <Layout>
      <SEO title="About" />
      <AboutHero image={aboutHeroImage.childImageSharp.fluid} />
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
  image: PropTypes.object.isRequired,
};

export default AboutPage;
