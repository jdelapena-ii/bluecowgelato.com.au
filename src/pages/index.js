import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import {
  Layout,
  SEO,
  InstagramWidget,
  AboutSection,
  TextWithImage,
} from '../components';
import { Hero } from '../components/hero-carousel';
import { useGraphQL } from '../hooks';

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <CustomCakes bgColorClass="bg-slate" />
      <GelatoCart />
      <ArtisanStyleGelato />
      <AboutSection />
      <InstagramWidget />
    </Layout>
  );
}

function GelatoCart() {
  const { cartImage } = useGraphQL();
  return (
    <article className="px-4 pt-24 pb-24 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl mx-auto space-y-4 sm:space-y-0 sm:space-x-12 sm:flex">
        <TextWithImage image={cartImage.childImageSharp.fluid} reverse>
          <h1 className="font-bold sm:text-6xl">Blue Cow Gelato Cart</h1>
          <p className="sm:text-3xl">Available for Hire</p>
          <p className="sm:text-3xl">Parties . Events</p>
          <p className="sm:text-3xl">Weddings . Markets</p>
        </TextWithImage>
      </div>
    </article>
  );
}

function ArtisanStyleGelato() {
  return (
    <article className="px-4 pt-48 pb-16 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl mx-auto space-y-4 sm:space-y-0 sm:space-x-12 sm:flex">
        <div>
          <h1 className="text-4xl font-black text-white uppercase sm:text-5xl md:text-6xl font-display">
            Artisan Style Gelato
          </h1>
        </div>
        <div className="prose text-white">
          <p>
            Locally owned and managed, this Artisan Gelateria makes its own
            gelato by hand with the aid of its specialist Italian machine.
          </p>
          <p>
            Using real ingredients, the flavours change constanly depending on
            what's in season and what's popular. NO artificial colours, flavours
            or preservatives are used. Vegan, gluten free and dairy free
            flavours are also available.
          </p>
          <p>
            So do your taste buds a favour and be blown away by the refreshing
            real flavours!
          </p>
        </div>
      </div>
    </article>
  );
}

function CustomCakes({ bgColorClass }) {
  const { cakeImage } = useGraphQL();
  return (
    <article
      className={`px-4 pt-24 pb-24 sm:px-6 lg:px-8 ${
        bgColorClass || 'bg-slate'
      }`}
    >
      <div className="w-full max-w-4xl mx-auto space-y-4 sm:space-y-0 sm:space-x-12 sm:flex">
        <TextWithImage image={cakeImage.childImageSharp.fluid}>
          <div className="text-center">
            <h1 className="font-bold text-center sm:text-7xl">Custom</h1>
            <p className="sm:text-5xl font-dots">Gelato Cakes</p>
            <p className="font-semibold sm:text-xl">Made to Order in Store</p>
            <div>
              <Link to="/">Enquire inside</Link>
            </div>
          </div>
        </TextWithImage>
      </div>
    </article>
  );
}
CustomCakes.propTypes = {
  bgColorClass: PropTypes.string,
};

export default IndexPage;
