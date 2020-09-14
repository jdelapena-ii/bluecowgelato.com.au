import React, { useState, Fragment, useEffect } from 'react';
import { Link } from 'gatsby';

import { useGraphQL, useSiteContext } from '../hooks';
import { mainNavigation } from '../data';
import { Logo } from './vectors';
import { MobileMenu } from './mobile-menu';

function Header() {
  const {
    site: { siteMetadata },
  } = useGraphQL();

  const { isHeaderActive, setIsHeaderActive } = useSiteContext();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log(isHeaderActive);
  }, [isHeaderActive]);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-20 ${
        isHeaderActive ? 'bg-white shadow-md' : 'bg-transparent'
      } h-36`}
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between">
          <div className="flex items-center py-4">
            <Link
              to="/"
              className="flex items-center flex-shrink-0 text-white transition duration-150 ease-in-out rounded-full hover:opacity-75 focus:opacity-75"
            >
              <Logo className="fill-current h-28" />
            </Link>
          </div>
          <div className="hidden space-x-8 md:ml-6 md:flex">
            {mainNavigation.map((node, index) => (
              <Fragment key={node.id}>
                <Link
                  to={node.slug}
                  partiallyActive={node.slug !== '/'}
                  activeClassName="text-slate"
                  className="inline-flex items-center px-1 text-sm font-normal leading-5 text-white uppercase whitespace-no-wrap transition duration-150 ease-in-out font-display hover:opacity-75 focus:shadow-outline-gray focus:opacity-75"
                >
                  {node.label}
                </Link>
                {index !== mainNavigation.length - 1 && (
                  <span
                    aria-hidden
                    className="inline-flex items-center px-1 text-sm font-normal leading-5 text-white font-display"
                  >
                    |
                  </span>
                )}
              </Fragment>
            ))}
            <a
              href={`tel:${siteMetadata.phone.split(' ').join('')}`}
              aria-label={`Phone: ${siteMetadata.phone}`}
              className="inline-flex items-center p-2 my-auto text-white rounded-full font-display bg-sky-blue"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </a>
          </div>
          <div className="flex items-center -mr-2 md:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setIsOpen((prevState) => !prevState)}
              aria-label="Main menu"
              aria-expanded="false"
              className="inline-flex items-center justify-center p-2 text-white transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
            >
              {isOpen ? (
                <svg
                  className="block w-6 h-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block w-6 h-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
}

export { Header };
