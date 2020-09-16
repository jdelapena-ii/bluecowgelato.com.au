import React from 'react';
import { nanoid } from 'nanoid';
import { GelatoIcon, CoffeeIcon, WafflesIcon, CakeIcon } from './vectors';
import products from '../data/product/products.json';

const productIcons = [GelatoIcon, CoffeeIcon, WafflesIcon, CakeIcon];

function Menu() {
  return (
    <article className="relative p-2 mx-auto lg:py-8 bg-slate">
      <div className="flex w-full max-w-2xl mx-auto bg-white rounded-lg shadow-xl">
        <div className="flex flex-col justify-between flex-shrink-0 divide-y shadow-2xl w-44">
          {productIcons.map((Icon) => (
            <button
              key={nanoid()}
              type="button"
              className="flex items-center justify-center flex-1 group"
            >
              <Icon
                accentClass="text-white group-hover:text-gold transition duration-300 ease-in-out"
                className="h-16 mx-auto md:h-20 lg:h-24"
              />
            </button>
          ))}
        </div>
        <div className="flex-1 px-4 py-4 lg:px-12 lg:py-8">
          <div className="py-2 mx-auto border-b-4 border-dashed border-slate">
            <h2 className="text-2xl font-bold uppercase md:text-3xl lg:text-4xl font-display">
              Gelato &amp; Sorbets
            </h2>
          </div>
          <div className="divide-y-2 divide-slate">
            {products.map((product) => (
              <div
                className="flex flex-col py-8 pr-4 md:pr-12 lg:pr-16"
                key={product.id}
              >
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th
                        colSpan={2}
                        className="py-3 font-normal text-left uppercase font-display"
                      >
                        {product.category}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {product.order.map((prod) => (
                      <tr key={nanoid()}>
                        <td className="py-2 whitespace-no-wrap">{prod.name}</td>
                        <td className="py-2 text-right whitespace-no-wrap">
                          <strong>${prod.price.toFixed(2)}</strong>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export { Menu };
