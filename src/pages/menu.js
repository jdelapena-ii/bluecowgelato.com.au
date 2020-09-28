import React from 'react';

import {
  Layout,
  SEO,
  Menu,
  Contact,
  InstagramWidget,
  BusinessLogos,
} from '../components';

function MenuPage() {
  return (
    <Layout>
      <SEO title="Menu" />
      <div aria-hidden className="pt-48 bg-slate" />
      <Menu />
      <Contact bgColorClass="bg-gold" />
      <InstagramWidget />
      <BusinessLogos />
    </Layout>
  );
}

export default MenuPage;
