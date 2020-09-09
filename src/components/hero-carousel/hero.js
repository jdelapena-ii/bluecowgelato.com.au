import React, { useState, useEffect } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Image from 'gatsby-image';

import { Carousel as CarouselData } from '../../data/carousel-slides';

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    loop: true,
  });
  const { slides } = CarouselData();
  console.log(slides);
  return (
    <article className="mx-auto bg-slate max-w-screen-12xl">
      <div className="navigation-wrapper">
        <div ref={sliderRef} className=" keen-slider">
          {slides.map((slide, index) => (
            <div
              className="absolute inset-0 sm:relative sm:h-0 sm:aspect-ratio-16/9 keen-slider__slide"
              key={index}
            >
              <div className="absolute inset-0 flex">
                <Image fluid={slide.image} className="flex-1" />
              </div>
              <div className="relative inset-0 flex items-center justify-center sm:absolute">
                <div className="text-center">
                  <h2 className="text-5xl text-white font-display">
                    {slide.title}
                  </h2>
                  {/* TODO: Replace sub title bg with banner svg */}
                  <div className="px-4 py-2 mt-4 rounded-md bg-sky-blue">
                    <p className="tracking-wide text-white text-7xl font-dots">
                      {slide.subTitle}
                    </p>
                  </div>
                  <Link
                    to="/"
                    className="inline-block px-4 mt-20 text-4xl font-bold tracking-wide uppercase bg-white rounded-md text-slate font-display"
                  >
                    Order now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* {slider && (
          <>
            <ArrowLeft
              onClick={(e) => e.stopPropagation() || slider.prev()}
              disabled={currentSlide === 0}
            />

            <ArrowRight
              onClick={(e) => e.stopPropagation() || slider.next()}
              disabled={currentSlide === slider.details().size - 1}
            />
          </>
        )} */}
      </div>
    </article>
  );
}

function ArrowLeft(props) {
  const disabeld = props.disabled ? ' arrow--disabled' : '';
  return (
    <svg
      onClick={props.onClick}
      className={`arrow arrow--left${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
    </svg>
  );
}

function ArrowRight(props) {
  const disabeld = props.disabled ? ' arrow--disabled' : '';
  return (
    <svg
      onClick={props.onClick}
      className={`arrow arrow--right${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
    </svg>
  );
}

export { Hero };
