import React from 'react';

import { Layout, SEO, Contact, ContactPageHeader } from '../components';

function ContactPage() {
  return (
    <Layout>
      <SEO title="Contact" />
      <ContactPageHeader
        heading="Have a question?"
        children="Text from children"
      />  
      <h1 className="py-48 text-5xl font-black text-center text-slate font-display">
        Contact
      </h1>
      <Contact />
    </Layout>
  );
}

export default ContactPage;
