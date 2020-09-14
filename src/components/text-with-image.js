import React from 'react';
import GatsbyImage from 'gatsby-image';
import PropTypes from 'prop-types';

function TextWithImage({ image, children, reverse }) {
  function Image() {
    return (
      <div className="relative h-full border-8 border-gray-100">
        <div className="inset-0 flex">
          <GatsbyImage fluid={image} className="flex-1 p-10" />
        </div>
      </div>
    );
  }
  return (
    <article className="relative grid items-center w-full max-w-xl gap-12 px-4 mx-auto lg:max-w-none lg:grid-cols-2 sm:px-6 lg:px-8">
      {reverse && <Image />}
      <div className="flex flex-col justify-center break-words lg:mx-auto">
        {children && (
          <h3 className="mt-4 text-3xl leading-none tracking-normal text-right text-gray-100 uppercase font-display sm:tracking-normal sm:text-3xl">
            {children}
          </h3>
        )}
      </div>
      {!reverse && <Image />}
    </article>
  );
}

TextWithImage.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.object.isRequired,
  reverse: PropTypes.bool,
};

export { TextWithImage };
