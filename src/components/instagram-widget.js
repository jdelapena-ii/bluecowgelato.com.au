import React from 'react';
import { BannerIcon } from './vectors';

import { useGraphQL, useInstagram } from '../hooks';

function InstagramWidget() {
  const {
    site: { siteMetadata },
  } = useGraphQL();
  const instagramFeed = useInstagram();

  return (
    <div className="px-4 mx-auto overflow-hidden bg-white sm:px-6 lg:px-8">
      <div className="py-8 pb-16 mx-auto space-y-16 max-w-7xl">
        <div className="relative my-10">
          <div className="absolute inset-0 flex">
            <BannerIcon className="flex-1 text-sky-blue h-22" />
          </div>
          <a
            href={siteMetadata.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative inset-0 flex items-center justify-center py-4 ">
              <h2 className="text-4xl font-bold text-white uppercase lg:text-6xl md:text-5xl font-display">
                #bluecowgelato
              </h2>
            </div>
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
