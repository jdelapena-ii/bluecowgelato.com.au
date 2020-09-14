import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import { useKeenSlider } from 'keen-slider/react';

import { useSlides } from '../../data/carousel-slides';

function Hero() {
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    loop: true,
  });

  const slides = useSlides();

  return (
    <article className="mx-auto bg-slate max-w-screen-12xl">
      <div className="relative navigation-wrapper">
        <div ref={sliderRef} className="sm:max-h-screen keen-slider">
          {slides.map((slide, index) => (
            <div
              className="relative min-h-screen sm:min-h-0 sm:h-0 sm:aspect-ratio-4/3 lg:aspect-ratio-16/9 keen-slider__slide"
              key={index}
            >
              <div className="absolute inset-0 flex">
                <GatsbyImage fluid={slide.image} className="flex-1" />
              </div>
              <div className="relative inset-0 flex items-center justify-center h-full sm:absolute">
                <div className="text-center">
                  <h2 className="text-3xl text-white md:text-5xl font-display">
                    {slide.title}
                  </h2>
                  {/* TODO: Replace sub title bg with banner svg */}
                  <div className="px-4 py-2 mt-4 rounded-md bg-sky-blue">
                    <p className="text-4xl tracking-wide text-white md:text-7xl font-dots">
                      {slide.subTitle}
                    </p>
                  </div>
                  {/* TODO: find out if this should be a link or a button */}
                  <Link
                    to="/"
                    className="inline-block px-4 mt-8 text-2xl font-bold tracking-wide uppercase transition-all duration-300 ease-in-out transform bg-white rounded-md md:text-4xl md:mt-20 text-slate font-display hover:text-white hover:bg-slate hover:scale-90"
                  >
                    Order now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* TODO: Update arrow icons */}
        {slider && (
          <div className="absolute inset-0 flex items-center justify-between w-full px-4 mx-auto pointer-events-none sm:px-6 lg:px-8 max-w-7xl">
            <ArrowLeft onClick={(e) => e.stopPropagation() || slider.prev()} />
            <ArrowRight onClick={(e) => e.stopPropagation() || slider.next()} />
          </div>
        )}

        <ArrowDown />
      </div>
    </article>
  );
}

function ArrowLeft({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="p-2 transition duration-150 ease-in-out rounded-full pointer-events-auto hover:bg-sky-blue focus:bg-sky-blue"
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
      className="p-2 transition duration-150 ease-in-out rounded-full pointer-events-auto hover:bg-sky-blue focus:bg-sky-blue"
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

export { Hero };
