import React from 'react';

import { Layout, SEO } from '../components';

function AboutPage() {
  return (
    <Layout>
      <SEO title="About" />
      <h1 className="py-48 text-5xl font-black text-center text-slate font-display">
        About
      </h1>
    </Layout>
  );
}

export default AboutPage;
