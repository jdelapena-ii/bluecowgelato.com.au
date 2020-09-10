import React from 'react';
import PropTypes from 'prop-types';

function ContactPageHeader({ heading, children }) {
  return (
    <article className="flex items-center justify-between w-full max-w-xl gap-12 px-4 mx-auto lg:max-w-none lg:grid-cols-2 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-center break-words lg:mx-auto">
        {heading && (
          <h3 className="mt-4 text-3xl font-bold leading-none tracking-wide uppercase text-slate sm:tracking-ultra-wide sm:text-4xl">
            {heading}
          </h3>
        )}
      </div>
      <div className="flex flex-col justify-center lg:mx-auto">
        {children && (
          <p className="mt-4 font-bold leading-none text-1xl text-slate sm:tracking-ultra-wide sm:text-1xl">
            {children}
          </p>
        )}
      </div>
    </article>
  );
}

ContactPageHeader.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.string,
};

export { ContactPageHeader };
