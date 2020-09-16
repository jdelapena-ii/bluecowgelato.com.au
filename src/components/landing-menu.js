import React from 'react';
import { nanoid } from 'nanoid';

import {
  GelatoIcon,
  SundaesIcon,
  CoffeeIcon,
  WafflesIcon,
  SmoothiesIcon,
  BannerIcon,
} from './vectors';

const menu = [
  {
    icon: GelatoIcon,
    name: 'Gelato &amp; Sorbets',
  },
  {
    icon: SundaesIcon,
    name: 'Sundaes',
  },

  {
    icon: CoffeeIcon,
    name: 'Doppio Coffee',
  },
  {
    icon: WafflesIcon,
    name: 'Waffles &amp; Brownies',
  },
  {
    icon: SmoothiesIcon,
    name: 'Smoothies',
  },
];

function LandingMenu() {
  return (
    <article className="bg-gold">
      <div className="p-4 mx-auto overflow-hidden max-w-7xl md:pb-8">
        <div className="relative py-20">
          <div className="absolute inset-0 flex items-center justify-center">
            <BannerIcon className="flex-1 h-20" />
          </div>
          <div className="relative flex items-center justify-center">
            <h2 className="text-4xl text-white uppercase lg:text-6xl md:text-5xl lg:font-bold font-dots">
              see full menu
            </h2>
          </div>
        </div>

        <div className="grid max-w-sm grid-cols-2 gap-4 mx-auto sm:max-w-xl md:grid-cols-3 lg:grid-cols-5 lg:max-w-5xl">
          {menu.map((item) => (
            <div className="text-center" key={nanoid()}>
              <item.icon className="h-20 mx-auto md:h-24 lg:h-32" />
              <p
                dangerouslySetInnerHTML={{ __html: item.name }}
                className="py-6 uppercase md:font-bold font-display"
              />
            </div>
          ))}
        </div>
        {/* TODO: Link or button */}
        <div className="flex justify-center mt-32 lg:my-16">
          <button
            type="button"
            className="px-6 py-2 mx-auto text-xl text-white uppercase rounded-md bg-slate font-dots"
          >
            Want more? click here
          </button>
        </div>
      </div>
    </article>
  );
}

export { LandingMenu };
