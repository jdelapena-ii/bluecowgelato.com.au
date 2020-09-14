import React from 'react';

import { Layout, SEO, InstagramWidget, Hero } from '../components';

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
