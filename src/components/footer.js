import React from 'react';
import { Link } from 'gatsby';

import { useGraphQL } from '../hooks';
import { Logo } from './vectors';

function Footer() {
  const {
    site: { siteMetadata },
  } = useGraphQL();
  return (
    <footer className="px-4 text-white bg-slate sm:px-6 lg:px-8">
      <div className="py-6 pb-12 mx-auto overflow-hidden max-w-7xl">
        <div className="flex justify-center py-4">
          <Link
            to="/"
            className="flex items-center flex-shrink-0 transition duration-150 ease-in-out rounded-full hover:opacity-75 focus:opacity-75"
          >
            <Logo className="fill-current w-36 md:w-48" />
          </Link>
        </div>
        <div className="flex flex-wrap justify-center text-center uppercase font-display">
          <div className="w-full">
            <span className="block sm:inline-block">
              <a href={`tel:${siteMetadata.phone.split(' ').join('')}`}>
                Phone: {siteMetadata.phone}
              </a>
            </span>
            <span aria-hidden className="hidden mx-6 sm:inline-block">
              |
            </span>
            <span className="block sm:inline-block">
              <a href={`mailto:${siteMetadata.email}`}>
                Email: {siteMetadata.email}
              </a>
            </span>
          </div>
          <div className="w-full">
            <span>
              <a
                href={siteMetadata.address.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
              >
                Located at the bottom end of{' '}
                <span className="inline-block">
                  {siteMetadata.address.line1}
                </span>
                ,{' '}
                <span className="inline-block">
                  {siteMetadata.address.line2}
                </span>
              </a>
            </span>
          </div>
        </div>
        <p className="mt-4 text-center">
          <a
            href="https://www.phirannodesigns.com.au/"
            target="_blank"
            rel="noreferrer"
            className="inline-block"
          >
            Website by Phiranno Designs
          </a>
        </p>
      </div>
    </footer>
  );
}

export { Footer };
