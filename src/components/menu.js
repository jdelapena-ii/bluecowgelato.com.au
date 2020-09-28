import React from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@reach/tabs';
import { nanoid } from 'nanoid';
import { GelatoIcon, CoffeeIcon, WafflesIcon, CakeIcon } from './vectors';
import products from '../data/product/products.json';

const productIcons = [
  {
    icon: GelatoIcon,
  },
  {
    icon: CoffeeIcon,
  },
  {
    icon: WafflesIcon,
  },
  {
    icon: CakeIcon,
  },
];

function Menu() {
  return (
    <article className="relative p-2 mx-auto lg:py-8 bg-slate">
      <Tabs
        orientation="vertical"
        className="flex w-full max-w-2xl mx-auto bg-white rounded-lg shadow-xl"
      >
        <TabList className="flex flex-col justify-start flex-shrink-0 bg-white divide-y rounded-l-lg shadow-2xl w-44">
          {productIcons.map((product) => (
            <Tab
              key={nanoid()}
              type="button"
              className="flex items-center justify-center py-12 border-0 group"
            >
              <product.icon
                accentClass="text-white group-hover:text-gold transition duration-300 ease-in-out"
                className="h-16 mx-auto md:h-20 lg:h-24"
              />
            </Tab>
          ))}
        </TabList>
        <TabPanels className="flex-1">
          {products.map((product) => (
            <TabPanel className="focus:outline-none focus:shadow-outline">
              <div className="flex-1 px-4 py-4 lg:px-12 lg:py-8">
                <div className="py-2 mx-auto border-b-4 border-dashed border-slate">
                  <h2
                    dangerouslySetInnerHTML={{ __html: product.name }}
                    className="text-2xl font-black uppercase md:text-3xl lg:text-4xl font-display"
                  />
                </div>
                {product.categories.map((prod) => (
                  <div className="divide-y-2 divide-slate">
                    <div
                      className="flex flex-col py-8 pr-4 md:pr-12 lg:pr-16"
                      key={nanoid()}
                    >
                      <table className="min-w-full">
                        <thead>
                          <tr>
                            <th
                              colSpan={2}
                              className="py-3 font-normal text-left uppercase font-display"
                            >
                              {prod.category}
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white">
                          {prod.order.map((p) => (
                            <tr key={nanoid()}>
                              <td className="py-2 whitespace-no-wrap">
                                {p.name}
                              </td>
                              <td className="py-2 text-right whitespace-no-wrap">
                                <strong>${p.price.toFixed(2)}</strong>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </article>
  );
}

export { Menu };
