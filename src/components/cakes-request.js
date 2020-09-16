import React from 'react';
import Img from 'gatsby-image';
import { useGraphQL } from '../hooks';

function CakesRequest() {
  const { cakesRequest } = useGraphQL();
  return (
    <article className="relative w-full max-w-6xl mx-auto">
      <div className="relative w-full max-w-5xl mx-auto my-auto">
        <div className="grid md:p-12 lg:p-16 lg:gap-y-12 md:grid-cols-2">
          {cakesRequest.edges.map((item) => {
            return (
              <div
                key={item.node.childImageSharp.id}
                className="px-16 pb-6 md:p-18"
              >
                {/* TODO: White border must match image border */}
                <Img
                  fluid={item.node.childImageSharp.fluid}
                  className="border-8 border-white rounded-full"
                />
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
}

export { CakesRequest };
