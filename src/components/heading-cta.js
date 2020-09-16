import React from 'react';
import PropTypes from 'prop-types';

function HeadingCTA({ subHeading, message }) {
  return (
    <article className="px-4 pt-48 pb-16 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl mx-auto space-y-6 sm:space-y-0 sm:space-x-12 sm:flex">
        <div>
          <h1 className="text-4xl font-black text-white uppercase sm:text-5xl md:text-6xl font-display">
            {subHeading}
          </h1>
        </div>
        <div className="prose text-white">
          <p>{message}</p>
        </div>
      </div>
    </article>
  );
}

HeadingCTA.propTypes = {
  subHeading: PropTypes.string,
  message: PropTypes.string,
};

export { HeadingCTA };
