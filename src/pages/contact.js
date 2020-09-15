import React from 'react';

import { Layout, SEO, Contact, HeadingWithText } from '../components';

function ContactPage() {
  return (
    <Layout>
      <SEO title="Contact" />
      <HeadingWithText
        heading={
          <>
            <h1 className="text-4xl font-black text-white uppercase sm:text-5xl md:text-6xl font-display">
              Have a question?
            </h1>
          </>
        }
        body={
          <>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
              laboriosam dignissimos quam earum placeat, ullam sint nesciunt
              possimus eaque.
            </p>
          </>
        }
        classNames="px-4 pt-48 pb-8 md:pb-16 md:px-6 md:px-8"
      />
      <Contact bgColorClass="bg-baby-blue" />
    </Layout>
  );
}

export default ContactPage;
