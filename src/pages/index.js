import React from 'react';

import { Layout, SEO, InstagramWidget, AboutSection } from '../components';
import { Hero } from '../components/hero-carousel';

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <AboutSection />
      <InstagramWidget />
    </Layout>
  );
}

export default IndexPage;
