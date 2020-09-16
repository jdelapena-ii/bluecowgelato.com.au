import React from 'react';
import { nanoid } from 'nanoid';

import {
  LUSCLogo,
  PizzaObsessionLogo,
  SixtyThreeFirstAvenueLogo,
  HiddenGemLogo,
} from './vectors';

const business = [
  {
    id: nanoid(),
    icon: PizzaObsessionLogo,
  },
  {
    id: nanoid(),
    icon: HiddenGemLogo,
  },
  {
    id: nanoid(),
    icon: SixtyThreeFirstAvenueLogo,
  },
  {
    id: nanoid(),
    icon: LUSCLogo,
  },
];

function BusinessLogo() {
  return (
    <article className="bg-sky-blue">
      <div className="p-4 mx-auto overflow-hidden max-w-7xl lg:pb-8">
        <div className="pb-8 text-center md:pb-16 md:pt-8 ">
          <h2 className="p-0 px-2 py-2 text-3xl text-white uppercase md:text-5xl lg:text-6xl lg:font-bold font-display">
            Eat our gelato at these places
          </h2>
        </div>
        <div className="grid grid-cols-2 col-span-3 gap-2 md:gap-8 md:grid-cols-3 lg:gap-16 lg:grid-cols-4 lg:pb-8">
          {business.map((bus) => (
            <div className="h-10 mx-auto md:h-16 lg:h-16" key={bus.id}>
              <bus.icon className="h-full mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

export { BusinessLogo };
