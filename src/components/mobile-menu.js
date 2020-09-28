import PropTypes from 'prop-types';
import React from 'react';
import { useTransition, animated } from 'react-spring';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { Link } from 'gatsby';
import { Logo } from './vectors';
import { mainNavigation } from '../data';

function MobileMenu({ isOpen, setIsOpen }) {
  const AnimatedDialogOverlay = animated(DialogOverlay);
  const AnimatedDialogContent = animated(DialogContent);

  const transitions = useTransition(isOpen, null, {
    from: { opacity: 0, x: 100 },
    enter: { opacity: 1, x: 0 },
    leave: { opacity: 0, x: 100 },
  });

  // Reach Dialog is supposed to handle closing the using the 'Escape' key but it doesn't seem to work so we're doing it ourselves
  const handleEscape = (e) => {
    if (typeof document !== 'undefined') {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    }
  };
  if (typeof document !== 'undefined') {
    document.addEventListener('keydown', handleEscape);
  }

  return transitions.map(
    ({ item, key, props: styles }) =>
      item && (
        <AnimatedDialogOverlay
          key={key}
          onClick={() => setIsOpen(false)}
          style={{ opacity: styles.opacity }}
          className="fixed inset-0 z-40 md:hidden"
        >
          <div className="fixed inset-0 z-40 flex justify-end bg-black bg-opacity-75">
            <AnimatedDialogContent
              aria-label="Sidebar"
              style={{
                transform: styles.x.interpolate(
                  (value) => `translate3d(${value}%, 0, 0)`
                ),
              }}
              className="relative flex flex-col flex-1 w-full max-w-xs py-4 bg-slate focus:outline-none"
            >
              <div className="flex-shrink-0 w-14">
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
              <div className="absolute top-0 left-0 p-1 -ml-14">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close sidebar"
                  className="flex items-center justify-center w-12 h-12 rounded-full focus:outline-none focus:bg-gray-600"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex items-center flex-shrink-0 px-4">
                <Link
                  to="/"
                  className="flex items-center flex-shrink-0 text-white transition duration-150 ease-in-out rounded-full hover:opacity-75 focus:opacity-75"
                >
                  <Logo className="fill-current h-28" />
                </Link>
              </div>
              <div className="flex-1 h-0 mt-5 overflow-y-auto">
                <nav className="px-2">
                  {mainNavigation.map((node) => (
                    <span
                      key={node.id}
                      className="block mt-1 overflow-hidden bg-white rounded-md"
                    >
                      <Link
                        to={node.slug}
                        className="flex items-center px-2 py-2 text-base font-black leading-6 text-white uppercase transition duration-150 ease-in-out bg-slate font-display group text-shadow hover:text-white hover:bg-sky-blue focus:shadow-none focus:text-white focus:bg-sky-blue"
                        activeClassName="text-white bg-opacity-75"
                      >
                        {node.label}
                      </Link>
                    </span>
                  ))}
                </nav>
              </div>
            </AnimatedDialogContent>
          </div>
        </AnimatedDialogOverlay>
      )
  );
}

MobileMenu.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};

export { MobileMenu };
