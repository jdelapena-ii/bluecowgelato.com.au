import React from 'react';

import {
  Layout,
  SEO,
  Contact,
  HeadingCTA,
  InstagramWidget,
  BusinessLogos,
} from '../components';

function ContactPage() {
  return (
    <Layout>
      <SEO title="Contact" />
      <HeadingCTA
        subHeading="Have a question"
        message="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
      laboriosam dignissimos quam earum placeat, ullam sint nesciunt
      possimus eaque."
      />
      <Contact bgColorClass="bg-sky-blue" />
      <InstagramWidget />
      <BusinessLogos />
    </Layout>
  );
}

export default ContactPage;
