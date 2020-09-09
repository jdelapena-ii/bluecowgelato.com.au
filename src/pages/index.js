import React from 'react';

import { Layout, SEO } from '../components';
import { Hero } from '../components/hero-carousel';

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      {/* <h1 className="py-48 text-5xl font-black text-center text-slate font-display">
        Blue Cow Gelato
      </h1> */}
      <Hero />
    </Layout>
  );
}

export default IndexPage;
