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
      <AboutHeroText />
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
    <article className="relative flex flex-col justify-between overflow-hidden">
      <div className="absolute inset-0 sm:relative sm:h-0 sm:aspect-ratio-16/9">
        <div className="absolute inset-0 flex">
          <GatsbyImage fluid={image} className="flex-1" />
        </div>
      </div>
    </article>
  );
}

AboutHero.propTypes = {
  image: PropTypes.object.isRequired,
};

function AboutHeroText() {
  return (
    <article className="relative flex items-center justify-center w-full px-4 my-24 sm:mt-40 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl px-12 py-12 mx-auto space-y-8 tracking-normal text-center bg-gray-200 border-2 border-gray-200 rounded-lg sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold leading-none tracking-widest text-center uppercase sm:text-4xl">
          About
        </h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel
          enim ac nisi euismod semper. Donec vel libero ut neque volutpat
          sodales ac ac mi. Maecenas accumsan consequat felis, tincidunt
          tristique lectus luctus vel. Fusce hendrerit porta convallis. Aliquam
          id velit non dolor commodo fringilla eu ac ligula. Aenean eu massa non
          ante faucibus mattis. Morbi tellus dui, volutpat quis ipsum a, semper
          bibendum odio. Duis tincidunt elit sed ullamcorper pellentesque.
          Suspendisse rhoncus fringilla felis egestas dictum.
        </p>
      </div>
    </article>
  );
}

export default AboutPage;
