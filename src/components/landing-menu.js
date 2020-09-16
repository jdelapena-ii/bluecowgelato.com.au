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
    <article className="px-4 bg-gold sm:px-6 lg:px-8">
      <div className="py-16 mx-auto space-y-16 max-w-7xl">
        <div className="relative flex items-center justify-center w-full max-w-3xl py-2 mx-auto">
          <BannerIcon
            aria-hidden
            focusable={false}
            className="absolute inset-y-0 h-full text-slate"
          />
          <h2 className="relative text-3xl font-black text-center text-white uppercase font-dots sm:text-4xl md:text-5xl lg:text-6xl">
            See full menu
          </h2>
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
