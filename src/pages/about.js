import React from 'react';

import { Layout, SEO, Contact, InstagramWidget, About } from '../components';

function AboutPage() {
  return (
    <Layout>
      <SEO title="About" />
      <About classNames="px-4 pt-48 pb-16 sm:px-6 lg:px-8">
        <h1 className="text-5xl text-center text-slate font-dots">About</h1>
        <p className="mt-10 prose text-sltate">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          maiores architecto sequi odio consectetur, harum neque modi magnam
          quos sapiente possimus nisi eum. Ducimus sit sint ab dolor corrupti
          fugit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Recusandae maiores architecto sequi odio consectetur, harum neque modi
          magnam quos sapiente possimus nisi eum. Ducimus sit sint ab dolor
          corrupti fugit.
        </p>
        <p className="mt-6 prose text-sltate">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          maiores architecto sequi odio consectetur, harum neque modi magnam
          quos sapiente possimus nisi eum. Ducimus sit sint ab dolor corrupti
          fugit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Recusandae maiores architecto sequi odio consectetur, harum neque modi
          magnam quos sapiente possimus nisi eum. Ducimus sit sint ab dolor
          corrupti fugit.
        </p>
      </About>
      <Contact bgColorClass="bg-gold" />
      <InstagramWidget />
    </Layout>
  );
}

export default AboutPage;
