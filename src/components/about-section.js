import React from 'react';
import GatsbyImage from 'gatsby-image';

import { Link } from 'gatsby';
import { useGraphQL } from '../hooks';

function AboutSection() {
  const { aboutSectionImage } = useGraphQL();
  return (
    <article className="relative flex flex-col justify-between overflow-hidden aspect-ratio-2/9">
      <GatsbyImage
        fluid={aboutSectionImage.childImageSharp.fluid}
        className="absolute inset-0 object-cover"
        style={{ marginRight: '-15px' }}
      />
      <div className="absolute px-40 py-28 xs:px-6 text-shadow">
        <div className="grid p-10 mx-auto mt-12 prose text-left text-gray-600 bg-gray-200 bg-opacity-75 rounded-lg">
          <h2 className="text-center">ABOUT</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Link
          to="/about/"
          className="block w-40 max-w-xs px-2 py-1 mx-auto font-black leading-none text-center text-white bg-white border-2 border-white rounded-md sm:text-5xl md:text-2xl font-display"
          >
            Read more
          </Link>
        </div>
      </div> 
    </article>
  );
}

export { AboutSection };
