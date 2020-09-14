import React from 'react';

import {
  Layout,
  SEO,
  InstagramWidget,
  Hero,
  HeaderIndicator,
} from '../components';

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <HeaderIndicator />
      <InstagramWidget />
    </Layout>
  );
}

export default IndexPage;
