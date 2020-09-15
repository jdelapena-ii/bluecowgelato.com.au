import React from 'react';
import GatsbyImage from 'gatsby-image';
import PropTypes from 'prop-types';

import { useGraphQL } from '../hooks';

function About({ children, classNames }) {
  const { aboutHeroImage } = useGraphQL();
  return (
    <article
      className={`relative  overflow-hidden ${
        classNames || 'py-12 md:py-16 px-4 sm:px-6 lg:px-8'
      }`}
    >
      <div className="absolute inset-0 flex">
        <GatsbyImage
          fluid={aboutHeroImage.childImageSharp.fluid}
          className="flex-1"
        />
      </div>

      <div className="relative w-full max-w-xl mx-auto md:max-w-7xl sm:px-6 lg:px-8">
        <div className="p-8 bg-white bg-opacity-75 rounded-lg md:p-12 md:max-w-md">
          {children}
        </div>
      </div>
    </article>
  );
}

About.propTypes = {
  children: PropTypes.node,
  classNames: PropTypes.string,
};

export { About };
