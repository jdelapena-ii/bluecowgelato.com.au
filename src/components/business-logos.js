import React from 'react';
import { nanoid } from 'nanoid';

import {
  LUSCLogo,
  PizzaObsessionLogo,
  SixtyThreeFirstAvenueLogo,
  HiddenGemLogo,
} from './vectors';

const businesses = [
  { label: 'Pizza Obsession', icon: PizzaObsessionLogo },
  { label: 'Hidden Gem', icon: HiddenGemLogo },
  { label: 'Sixty Three First Avenue', icon: SixtyThreeFirstAvenueLogo },
  { label: 'Laurieton United Servicemens Club', icon: LUSCLogo },
];

function BusinessLogos() {
  return (
    <article className="text-white bg-sky-blue">
      <div className="px-4 py-4 mx-auto overflow-hidden sm:px-6 lg:px-8 max-w-7xl lg:pb-8">
        <div className="text-center md:pb-16 md:pt-8 ">
          <h2 className="text-3xl uppercase md:text-5xl lg:text-6xl lg:font-bold font-display">
            Eat our gelato at these places
          </h2>
        </div>
        <ul className="grid items-center gap-x-4 gap-y-6 sm:grid-cols-2 md:gap-8 lg:gap-16 lg:grid-cols-4 lg:pb-8">
          {businesses.map((business) => (
            <li key={nanoid()}>
              <span className="sr-only">{business.label}</span>
              <business.icon
                style={{ maxHeight: '10rem' }}
                className="mx-auto"
              />
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export { BusinessLogos };
