import React from 'react';

import { Layout, SEO } from '../components';

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <h1 className="py-24 text-5xl font-black text-center text-slate font-display">
        Blue Cow Gelato
      </h1>
    </Layout>
  );
}

export default IndexPage;
