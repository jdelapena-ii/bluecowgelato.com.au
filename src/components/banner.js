import React from 'react';
import PropTypes from 'prop-types';

import { Link as GatsbyLink } from 'gatsby';
import { BannerIcon } from './vectors';

function Banner({ heading, bannerColor, slug }) {
  const TEXT_COLOR = {
    'sky-blue': 'text-sky-blue',
    slate: 'text-slate',
    gold: 'text-gold',
  };
  function Heading() {
    return (
      <h2 className="relative px-2 py-2 text-3xl font-black text-center text-white uppercase font-dots sm:text-4xl md:text-5xl lg:text-6xl">
        {heading}
      </h2>
    );
  }

  function Link({ children }) {
    return slug.indexOf('https') === -1 ? (
      <GatsbyLink to={slug}>{children}</GatsbyLink>
    ) : (
      <a href={slug} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  Link.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return (
    <div className="relative flex items-center justify-center w-full max-w-3xl mx-auto mt-2">
      <BannerIcon
        aria-hidden
        focusable={false}
        className={`absolute inset-0 w-full h-full ${TEXT_COLOR[bannerColor]}`}
      />
      {slug ? (
        <Link to={slug}>
          <Heading />
        </Link>
      ) : (
        <Heading />
      )}
    </div>
  );
}

Banner.propTypes = {
  bannerColor: PropTypes.string,
  heading: PropTypes.string.isRequired,
  slug: PropTypes.string,
};

export { Banner };
