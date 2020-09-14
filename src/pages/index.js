import React from 'react';

import { Layout, SEO, InstagramWidget, TextWithImage } from '../components';
import { Hero } from '../components/hero-carousel';
import { useGraphQL } from '../hooks';

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <GelatoCart />
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

export default IndexPage;
