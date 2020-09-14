import React from 'react';
import GatsbyImage from 'gatsby-image';
import PropTypes from 'prop-types';

import { Layout, SEO, ContactForm, InstagramWidget } from '../components';
import { useGraphQL } from '../hooks';

function AboutPage() {
  const { aboutHeroImage } = useGraphQL();
  return (
    <Layout>
      <SEO title="About" />
      <AboutHero image={aboutHeroImage.childImageSharp.fluid} />
      <ContactForm bgColorClass="bg-gold" />
      <InstagramWidget />
    </Layout>
  );
}

function AboutHero({ image }) {
  return (
    <article className="relative px-4 pt-48 pb-16 overflow-hidden sm:px-6 lg:px-8">
      <div className="absolute inset-0 flex">
        <GatsbyImage fluid={image} className="flex-1" />
      </div>

      <div className="relative w-full mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="p-12 bg-white bg-opacity-75 rounded-lg md:max-w-md ">
          <h1 className="text-5xl text-center text-slate font-dots">About</h1>
          <p className="mt-10 prose text-sltate">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            maiores architecto sequi odio consectetur, harum neque modi magnam
            quos sapiente possimus nisi eum. Ducimus sit sint ab dolor corrupti
            fugit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Recusandae maiores architecto sequi odio consectetur, harum neque
            modi magnam quos sapiente possimus nisi eum. Ducimus sit sint ab
            dolor corrupti fugit.
          </p>
          <p className="mt-6 prose text-sltate">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            maiores architecto sequi odio consectetur, harum neque modi magnam
            quos sapiente possimus nisi eum. Ducimus sit sint ab dolor corrupti
            fugit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Recusandae maiores architecto sequi odio consectetur, harum neque
            modi magnam quos sapiente possimus nisi eum. Ducimus sit sint ab
            dolor corrupti fugit.
          </p>
        </div>
      </div>
    </article>
  );
}

AboutHero.propTypes = {
  image: PropTypes.object.isRequired,
};

export default AboutPage;
