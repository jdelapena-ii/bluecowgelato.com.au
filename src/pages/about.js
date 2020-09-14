import React from 'react';
import GatsbyImage from 'gatsby-image';
import PropTypes from 'prop-types';

import { Layout, SEO, ContactForm, InstagramWidget } from '../components';
import { useGraphQL } from '../hooks';

function AboutPage() {
  const { aboutHeroImage } = useGraphQL();
  return (
    <Layout>
      <SEO title="About" />
      <AboutHero image={aboutHeroImage.childImageSharp.fluid} />
      <ContactForm />
      <InstagramWidget />
    </Layout>
  );
}

function AboutHero({ image }) {
  return (
    <article className="relative flex flex-col justify-between overflow-hidden">
      <GatsbyImage
        fluid={image}
        className="absolute inset-0"
        style={{ marginTop: '-66px', marginRight: '-15px' }}
      />
      <div className="absolute px-40 py-28 xs:px-6 text-shadow">
        <div className="grid p-10 mx-auto mt-12 prose text-left text-gray-600 bg-gray-200 bg-opacity-75 rounded-lg transparent">
          <h2 className="text-center">ABOUT</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </article>
  );
}

AboutHero.propTypes = {
  image: PropTypes.object.isRequired,
};

export default AboutPage;
