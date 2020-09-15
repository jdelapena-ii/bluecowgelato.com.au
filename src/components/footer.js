import React from 'react';
import { Link } from 'gatsby';

import { BusinessLogo } from './business-logo';
import { Logo } from './vectors';

function Footer() {
  return (
    <footer className="bg-slate">
      <BusinessLogo />

      <div className="max-w-screen-xl px-4 py-6 pb-12 mx-auto overflow-hidden sm:px-6 lg:px-8">
        <div className="flex justify-center py-4">
          <Link
            to="/"
            className="flex items-center flex-shrink-0 text-white transition duration-150 ease-in-out rounded-full hover:opacity-75 focus:opacity-75"
          >
            <Logo className="fill-current w-28 md:w-48" />
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center mt-2 text-white sm:flex-row font-display">
          <a href="tel:0404040404" className="text-sm uppercase sm:text-base">
            PHONE: 0404 040 404
          </a>
          <div className="w-6 sm:w-0.5 bg-white my-2 sm:my-0 sm:mx-6 h-0.5 sm:h-4" />
          <a
            href="mailto:info@eatdessertfirst.com.au"
            className="text-sm text-center uppercase break-all sm:text-base"
          >
            EMAIL: online@bluecowgelato.com.au
          </a>
        </div>

        <a
          href="https://goo.gl/maps/Xgic2nCnqNeL9z888"
          target="_blank"
          rel="noreferrer"
          className="block mt-4 text-sm text-center text-white uppercase sm:text-base font-display sm:mt-0"
        >
          Located at the bottom end of (1/72) Clarence street, Port Macquarie
        </a>

        <a
          href="https://www.phirannodesigns.com.au/"
          target="_blank"
          rel="noreferrer"
          className="block mt-4 text-xs text-center text-white sm:text-base"
        >
          Website by Phiranno Designs
        </a>
      </div>
    </footer>
  );
}

export { Footer };
