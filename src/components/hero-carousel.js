import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import { useKeenSlider } from 'keen-slider/react';

import { useGraphQL } from '../hooks';
import { BannerIcon } from './vectors';

function HeroCarousel() {
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    loop: true,
  });

  const { allCarouselSlidesJson } = useGraphQL();

  return (
    <article className="relative mx-auto bg-slate max-w-screen-12xl">
      <div className="relative h-0 sm:aspect-ratio-4/3 lg:aspect-ratio-16/9">
        <div className="absolute inset-0 flex">
          <ul ref={sliderRef} className="flex-1 keen-slider">
            {allCarouselSlidesJson.nodes.map((slide) => (
              <li key={slide.id} className="keen-slider__slide">
                <div className="relative">
                  <div className="relative h-0 sm:aspect-ratio-4/3 lg:aspect-ratio-16/9">
                    <div className="absolute inset-0 flex">
                      <GatsbyImage
                        fluid={slide.image.childImageSharp.fluid}
                        className="flex-1"
                      />
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ul className="text-center">
                      <h2 className="text-3xl text-white md:text-5xl font-display">
                        {slide.title}
                      </h2>
                      <div className="relative flex items-center justify-center w-full max-w-3xl py-2 mx-auto mt-2">
                        <BannerIcon
                          aria-hidden
                          focusable={false}
                          className="absolute inset-y-0 h-full text-sky-blue"
                        />

                        <h2 className="relative text-3xl font-black text-center text-white uppercase font-dots sm:text-4xl md:text-5xl lg:text-6xl">
                          {slide.subTitle}
                        </h2>
                      </div>
                      <Link
                        to="/"
                        className="inline-block px-4 mt-8 text-2xl font-bold tracking-wide uppercase transition-all duration-300 ease-in-out transform bg-white rounded-md md:text-4xl md:mt-20 text-slate font-display hover:text-white hover:bg-slate hover:scale-90"
                      >
                        Order now
                      </Link>
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* // TODO: Update arrow icons */}
      </div>
      {slider && (
        <div className="absolute inset-0 flex items-center justify-between w-full px-4 mx-auto pointer-events-none sm:px-6 lg:px-8 max-w-7xl">
          <ArrowLeft onClick={(e) => e.stopPropagation() || slider.prev()} />
          <ArrowRight onClick={(e) => e.stopPropagation() || slider.next()} />
        </div>
      )}
      <ArrowDown />
    </article>
  );
}

function ArrowLeft({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="p-2 transition duration-150 ease-in-out bg-white bg-opacity-25 rounded-full pointer-events-auto backdrop-blur hover:bg-sky-blue focus:bg-sky-blue"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-8 h-8 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  );
}

ArrowLeft.propTypes = {
  onClick: PropTypes.func.isRequired,
};

function ArrowRight({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="p-2 transition duration-150 ease-in-out bg-white bg-opacity-25 rounded-full pointer-events-auto backdrop-blur hover:bg-sky-blue focus:bg-sky-blue"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-8 h-8 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  );
}

ArrowRight.propTypes = {
  onClick: PropTypes.func.isRequired,
};

function ArrowDown() {
  return (
    <div className="absolute inset-x-0 flex justify-center pointer-events-none bottom-12">
      <a href="#main-content" className="pointer-events-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-8 h-8 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </a>
    </div>
  );
}

export { HeroCarousel };