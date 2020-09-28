import React from 'react';
import PropTypes from 'prop-types';

function HeadingWithText({ children, classNames, heading }) {
  return (
    <article
      className={`${classNames || 'py-12 md:py-16 px-4 sm:px-6 lg:px-8'}`}
    >
      <div className="items-center w-full max-w-lg mx-auto space-y-4 text-white md:max-w-4xl md:space-y-0 md:space-x-12 md:flex">
        <div className="md:w-1/2">{heading}</div>
        <div>{children}</div>
      </div>
    </article>
  );
}

HeadingWithText.propTypes = {
  children: PropTypes.node,
  classNames: PropTypes.string,
  heading: PropTypes.node,
};

export { HeadingWithText };
