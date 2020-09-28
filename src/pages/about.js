import React from 'react';

import {
  Layout,
  SEO,
  About,
  Contact,
  InstagramWidget,
  BusinessLogos,
} from '../components';

function AboutPage() {
  return (
    <Layout>
      <SEO title="About" />
      <About classNames="px-4 pt-48 pb-16 sm:px-6 lg:px-8">
        <h1 className="text-5xl text-center text-slate font-dots">About</h1>
        <div className="mt-6 prose">
          <p>
            Blue Cow Gelato is locally owned and managed. We make all our gelato
            in store, keeping it as fresh as possible, using real ingredients
            and local produce.
          </p>
          <p>
            We have a range of house flavours that we like to offer at all
            times, and flavours that are changing constantly depending on whats
            in season and whats popular. No artificial colours, flavours or
            preservatives are used. Most of our gelato is gluten free with vegan
            and dairy free options also available.
          </p>
          <p>
            So do your taste buds a favour and be blown away by the refreshing
            real flavours of fresh made gelato.
          </p>
        </div>
      </About>
      <Contact bgColorClass="bg-gold" />
      <InstagramWidget />
      <BusinessLogos />
    </Layout>
  );
}

export default AboutPage;
