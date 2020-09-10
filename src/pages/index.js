import React from 'react';

import { Layout, SEO, InstagramWidget } from '../components';
import { Hero } from '../components/hero-carousel';

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <InstagramWidget />
    </Layout>
  );
}

export default IndexPage;
