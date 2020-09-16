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
  { label: 'Laurieton United Services Club', icon: LUSCLogo },
];

function BusinessLogos() {
  return (
    <article className="text-white bg-sky-blue">
      <div className="px-4 py-12 mx-auto space-y-12 overflow-hidden text-center sm:px-6 lg:px-8 max-w-7xl lg:pb-8">
        <h2 className="text-3xl uppercase md:text-5xl lg:text-6xl lg:font-bold font-display">
          Eat our gelato at these places
        </h2>
        <ul className="grid items-center gap-12 sm:grid-cols-2 md:gap-8 lg:gap-16 lg:grid-cols-4 lg:pb-8">
          {businesses.map((business) => (
            <li key={nanoid()}>
              <span className="sr-only">{business.label}</span>
              <business.icon
                style={{ maxHeight: '10rem' }}
                className="max-w-xs mx-auto"
              />
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export { BusinessLogos };
