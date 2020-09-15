import React from 'react';
import PropTypes from 'prop-types';

function HeadingWithText({ heading, body, classNames }) {
  return (
    <article
      className={`${classNames || 'py-12 md:py-16 px-4 sm:px-6 lg:px-8'}`}
    >
      <div className="items-center w-full max-w-lg mx-auto space-y-4 md:max-w-4xl md:space-y-0 md:space-x-12 md:flex">
        <div>{heading}</div>
        <div className="prose text-white">{body}</div>
      </div>
    </article>
  );
}

HeadingWithText.propTypes = {
  heading: PropTypes.node,
  body: PropTypes.node,
  classNames: PropTypes.string,
};

export { HeadingWithText };
