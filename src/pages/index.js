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
    >
      <div className="prose text-white">
        <p>
          Locally owned and managed, this Artisan Gelateria makes its own gelato
          by hand with the aid of its specialist Italian machine.
        </p>
        <p>
          Using real ingredients, the flavours change constanly depending on
          what's in season and what's popular. NO artificial colours, flavours
          or preservatives are used. Vegan, gluten free and dairy free flavours
          are also available.
        </p>
        <p>
          So do your taste buds a favour and be blown away by the refreshing
          real flavours!
        </p>
      </div>
    </HeadingWithText>
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
            to="/gelato-cakes/"
            className="w-full px-4 text-3xl font-black tracking-wide text-center uppercase transition-all duration-300 ease-in-out transform bg-white rounded-md md:text-4xl text-slate font-display hover:scale-90"
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
        <h2 className="text-5xl text-center text-slate font-dots">About</h2>
        <div className="mt-6 prose">
          <p>
            Blue Cow Gelato is locally owned and managed. We make all our gelato
            in store, keeping it as fresh as possible, using real ingredients
            and local produce.
          </p>
          <p>
            We have a range of house flavours that we like to offer at all
            times, and flavours that are changing constantly depending on whats
            in season and whats popular. No artificial colours, flavours or
            preservatives are used. Most of our gelato is gluten free with vegan
            and dairy free options also available.
          </p>
          <p>
            So do your taste buds a favour and be blown away by the refreshing
            real flavours of fresh made gelato.
          </p>
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
        <h2 className="max-w-xs text-4xl font-black md:text-6xl">
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
