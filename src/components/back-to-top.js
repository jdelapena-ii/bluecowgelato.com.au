import React from 'react';

import { BackToTopIcon } from './vectors';

function BackToTop() {
  return (
    <div className="fixed inset-0 flex pointer-events-none">
      <div className="flex items-end justify-end flex-1 w-full px-4 py-12 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <a href="#main-content" className="rounded-full pointer-events-auto">
          <BackToTopIcon
            style={{
              filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.125))',
            }}
            className="w-20 sm:w-24"
          />
        </a>
      </div>
    </div>
  );
}

export { BackToTop };
