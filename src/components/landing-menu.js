import React from 'react';
import { nanoid } from 'nanoid';

import {
  GelatoIcon,
  SundaesIcon,
  CoffeeIcon,
  WafflesIcon,
  SmoothiesIcon,
} from './vectors';
import { Banner } from './banner';

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
        <Banner bannerColor="slate" heading="See full menu" slug="/menu/" />
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
