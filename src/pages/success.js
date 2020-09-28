import React from 'react';
import { Link } from 'gatsby';

import {
  Layout,
  SEO,
  HeadingWithText,
  BusinessLogos,
  InstagramWidget,
} from '../components';

function SuccessPage() {
  return (
    <Layout>
      <SEO title="Success" />
      <article className="pt-48 pb-12">
        <HeadingWithText
          heading={
            <h1 className="flex-1 text-4xl font-black text-white uppercase sm:text-5xl md:text-6xl font-display">
              Success
            </h1>
          }
        >
          <div className="space-y-6">
            <div className="prose text-white">
              <p>
                Thank you for your message. We will get back to you shortly.
              </p>
            </div>
            <p>
              <Link
                to="/"
                className="px-6 py-2 mx-auto text-xl text-white uppercase rounded-md bg-slate font-dots"
              >
                Return home
              </Link>
            </p>
          </div>
        </HeadingWithText>
      </article>
      <InstagramWidget />
      <BusinessLogos />
    </Layout>
  );
}

export default SuccessPage;
