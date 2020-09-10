import React from 'react';

import { Layout, SEO, ContactForm } from '../components';

function ContactPage() {
  return (
    <Layout>
      <SEO title="Contact" />
      <HaveAQuestion />
      <ContactForm />
    </Layout>
  );
}

function HaveAQuestion() {
  return (
    <article className="px-4 pt-48 pb-16 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl mx-auto space-y-4 sm:space-y-0 sm:space-x-12 sm:flex">
        <div>
          <h1 className="text-4xl font-black text-white uppercase sm:text-5xl md:text-6xl font-display">
            Have a question?
          </h1>
        </div>
        <div className="prose text-white">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
            laboriosam dignissimos quam earum placeat, ullam sint nesciunt
            possimus eaque.
          </p>
        </div>
      </div>
    </article>
  );
}

export default ContactPage;
