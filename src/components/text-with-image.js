import React from 'react';
import GatsbyImage from 'gatsby-image';
import PropTypes from 'prop-types';

function TextWithImage({
  aspectRatio = 'aspect-ratio-square',
  image,
  children,
  reverse,
}) {
  function Image() {
    return (
      <div className="relative h-full">
        <div className="absolute inset-0 flex">
          <GatsbyImage fluid={image} className="flex-1" />
        </div>
      </div>
    );
  }
  return (
    <article className="relative grid items-center w-full max-w-xl gap-12 px-4 mx-auto lg:max-w-none lg:grid-cols-2 sm:px-6 lg:px-8">
      {reverse && <Image />}

      {!reverse && <Image />}
    </article>
  );
}

TextWithImage.propTypes = {
  aspectRatio: PropTypes.string,
  children: PropTypes.node.isRequired,
  image: PropTypes.object.isRequired,
  reverse: PropTypes.bool,
};

export { TextWithImage };
