import React from 'react';

import { Layout, SEO, Contact } from '../components';

function ContactPage() {
  return (
    <Layout>
      <SEO title="Contact" />
      <h1 className="py-48 text-5xl font-black text-center text-slate font-display">
        Contact
      </h1>
      <Contact />
    </Layout>
  );
}

export default ContactPage;
