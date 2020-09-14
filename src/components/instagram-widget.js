import React from 'react';

import { useGraphQL, useInstagram } from '../hooks';

function InstagramWidget() {
  const {
    site: { siteMetadata },
  } = useGraphQL();
  const instagramFeed = useInstagram();

  return (
    <div className="px-4 mx-auto overflow-hidden bg-white sm:px-6 lg:px-8">
      <div className="py-8 pb-16 mx-auto space-y-16 max-w-7xl">
        <div className="text-center">
          <a
            href={siteMetadata.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="p-0 px-2 py-2 text-3xl font-black text-white uppercase md:text-5xl lg:text-6xl font-display bg-sky-blue">
              #bluecowgelato
            </h2>
          </a>
        </div>
        <div className="grid grid-cols-2 col-span-3 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {instagramFeed.map((feed, index) => (
            <div
              key={index}
              className={index === instagramFeed.length - 1 ? 'lg:hidden' : ''}
            >
              <a
                href={feed.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block h-0 overflow-hidden aspect-ratio-square"
              >
                <img
                  key={index}
                  src={feed.src}
                  alt={feed.caption}
                  srcSet={feed.srcSet.join(', ')}
                  className="object-contain w-full h-full"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 p-4 overflow-y-auto text-white break-words transition duration-300 ease-in-out bg-black bg-opacity-50 opacity-0 overscroll-y-auto hover:opacity-100"
                >
                  {feed.caption || 'View on Instagram'}
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export { InstagramWidget };
