import React from 'react';
import GatsbyImage from 'gatsby-image';
import PropTypes from 'prop-types';

function TextWithImage({ image, children, reverse, bgColorClass }) {
  function Image() {
    return (
      <div className={`${reverse ? 'order-first' : ''}`}>
        <div className="relative w-64 h-64 mx-auto overflow-hidden bg-white border-8 border-gray-100 rounded-full md:h-80 md:w-80 lg:h-96 lg:w-96">
          <div className="absolute inset-0">
            <GatsbyImage fluid={image} className="flex-1" />
          </div>
        </div>
      </div>
    );
  }
  return (
    <article
      className={`px-4 py-12 md:py-16 sm:px-6 lg:px-8 ${
        bgColorClass || 'bg-slate'
      }`}
    >
      <div className="grid w-full max-w-5xl gap-8 mx-auto md:grid-cols-2">
        <div className="flex flex-col justify-center text-white">
          {children}
        </div>
        <Image />
      </div>
    </article>
  );
}

TextWithImage.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.object.isRequired,
  reverse: PropTypes.bool,
  bgColorClass: PropTypes.string,
};

export { TextWithImage };
