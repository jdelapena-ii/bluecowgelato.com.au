import React from 'react';

import { Layout, SEO, Menu, LandingMenu } from '../components';

function MenuPage() {
  return (
    <Layout>
      <SEO title="Menu" />
      <div aria-hidden className="pt-48 bg-gold" />
      <LandingMenu />
      <Menu />
    </Layout>
  );
}

export default MenuPage;
