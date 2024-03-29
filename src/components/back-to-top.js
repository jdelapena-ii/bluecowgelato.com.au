import React from 'react';

import { BackToTopIcon } from './vectors';

function BackToTop() {
  return (
    <div className="fixed inset-0 hidden pointer-events-none md:flex">
      <div className="flex items-end justify-end flex-1 w-full px-4 py-24 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <a href="#main-content" className="rounded-full pointer-events-auto">
          <BackToTopIcon className="w-20 sm:w-24 drop-shadow" />
        </a>
      </div>
    </div>
  );
}

export { BackToTop };
