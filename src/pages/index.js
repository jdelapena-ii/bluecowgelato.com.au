import React from 'react';

import { Layout, SEO, InstagramWidget, AboutSection } from '../components';
import { Hero } from '../components/hero-carousel';

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <ArtisanStyleGelato />
      <AboutSection />
      <InstagramWidget />
    </Layout>
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
export default IndexPage;
