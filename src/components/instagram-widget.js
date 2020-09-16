import React from 'react';
import { BannerIcon } from './vectors';

import { useGraphQL, useInstagram } from '../hooks';

function InstagramWidget() {
  const {
    site: { siteMetadata },
  } = useGraphQL();
  const instagramFeed = useInstagram();

  return (
    <div className="px-4 bg-white sm:px-6 lg:px-8">
      <div className="py-16 mx-auto space-y-16 max-w-7xl">
        <div className="relative flex items-center justify-center w-full max-w-3xl py-2 mx-auto">
          <BannerIcon
            aria-hidden
            focusable={false}
            className="absolute inset-y-0 h-full text-sky-blue"
          />
          <a
            href={siteMetadata.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="relative text-3xl font-bold text-center text-white uppercase font-display sm:text-4xl md:text-5xl lg:text-6xl">
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
                  className="absolute inset-0 object-contain w-full h-full"
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
