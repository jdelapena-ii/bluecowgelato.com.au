import React from 'react';
import { Link } from 'gatsby';

import {
  Layout,
  SEO,
  HeroCarousel,
  HeadingWithText,
  LandingMenu,
  About,
  TextWithImage,
  Contact,
  InstagramWidget,
  BusinessLogos,
} from '../components';

import { useGraphQL } from '../hooks';

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroCarousel />
      <ArtisanStyleGelato />
      <LandingMenu />
      <CustomCakes />
      <AboutSection />
      <GelatoCart />
      <Contact bgColorClass="bg-gold" />
      <InstagramWidget />
      <BusinessLogos />
    </Layout>
  );
}

function ArtisanStyleGelato() {
  return (
    <HeadingWithText
      heading={
        <h1 className="text-4xl font-black text-white uppercase sm:text-5xl md:text-6xl font-display">
          Artisan Style Gelato
        </h1>
      }
      body={
        <>
          <p>
            Locally owned and managed, this Artisan Gelateria makes its own
            gelato by hand with the aid of its specialist Italian machine.
          </p>
          <p>
            Using real ingredients, the flavours change constanly depending on
            what's in season and what's popular. NO artificial colours, flavours
            or preservatives are used. Vegan, gluten free and dairy free
            flavours are also available.
          </p>
          <p>
            So do your taste buds a favour and be blown away by the refreshing
            real flavours!
          </p>
        </>
      }
    />
  );
}

function CustomCakes() {
  const { cakeImage } = useGraphQL();
  return (
    <TextWithImage image={cakeImage.childImageSharp.fluid}>
      <div className="text-center">
        <h2 className="text-6xl font-bold md:text-7xl font-dots">Custom</h2>
        <p className="text-4xl md:text-5xl font-dots">Gelato Cakes</p>
        <p className="text-2xl font-semibold uppercase font-display">
          Made to Order in Store
        </p>
        <div className="flex justify-center mt-8">
          <Link
            to="/"
            className="px-4 text-3xl font-bold tracking-wide uppercase transition-all duration-300 ease-in-out transform bg-white rounded-md md:text-4xl text-slate font-display hover:scale-90"
          >
            Enquire here
          </Link>
        </div>
      </div>
    </TextWithImage>
  );
}

function AboutSection() {
  return (
    <About>
      <div className="space-y-8 text-center">
        <h2 className="text-5xl text-slate font-dots">About</h2>
        <div className="font-medium prose text-slate">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            maiores architecto sequi odio consectetur, harum neque modi magnam
            quos sapiente possimus nisi eum. Ducimus sit sint ab dolor corrupti
            fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Recusandae maiores architecto sequi odio consectetur, harum neque
            modi magnam quos sapiente possimus nisi eum. Ducimus sit sint ab
            dolor corrupti fugit.
          </p>
        </div>
        <div className="flex justify-center">
          <Link
            to="/about/"
            className="px-4 py-1 text-2xl font-bold tracking-wide uppercase transition-all duration-300 ease-in-out transform bg-white rounded-md md:text-3xl text-slate font-display hover:text-white hover:bg-slate hover:scale-90"
          >
            Read more
          </Link>
        </div>
      </div>
    </About>
  );
}

function GelatoCart() {
  const { cartImage } = useGraphQL();
  return (
    <TextWithImage
      image={cartImage.childImageSharp.fluid}
      bgColorClass="bg-baby-blue"
      reverse
    >
      <div className="flex flex-col items-center text-4xl text-center md:items-end md:text-right font-display md:text-5xl">
        <h2 className="max-w-xs text-4xl font-bold md:text-6xl">
          Blue Cow Gelato Cart
        </h2>
        <div className="mt-6">
          <p className="text-2xl sm:text-3xl">Available for Hire</p>
          <p className="text-2xl sm:text-3xl">Parties . Events</p>
          <p className="text-2xl sm:text-3xl">Weddings . Markets</p>
        </div>
      </div>
    </TextWithImage>
  );
}

export default IndexPage;
