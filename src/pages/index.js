import React from 'react';
import { Link } from 'gatsby';
import { Textfit } from 'react-textfit';

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
      <div className="w-full max-w-xs mx-auto">
        <h2
          aria-label="Custom gelato cakes made to order instore"
          className="flex flex-col font-black leading-none"
        >
          <div aria-hidden>
            <Textfit mode="single">
              <span className="font-dots">Custom</span>
            </Textfit>
            <div className="-mt-2">
              <Textfit mode="single">
                <span className="font-dots">Gelato Cakes</span>
              </Textfit>
              <Textfit mode="single">
                <span className="uppercase font-display">
                  Made to Order in-store
                </span>
              </Textfit>
            </div>
          </div>
        </h2>
        <div className="flex justify-center mt-8">
          <Link
            to="/"
            className="w-full px-4 text-3xl font-bold tracking-wide text-center uppercase transition-all duration-300 ease-in-out transform bg-white rounded-md md:text-4xl text-slate font-display hover:scale-90"
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
        <p className="mt-6">
          <span className="block text-2xl sm:text-3xl">Available for Hire</span>
          <span className="block text-2xl sm:text-3xl">
            Parties &middot; Events
          </span>
          <span className="block text-2xl sm:text-3xl">
            Weddings &middot; Markets
          </span>
        </p>
      </div>
    </TextWithImage>
  );
}

export default IndexPage;
