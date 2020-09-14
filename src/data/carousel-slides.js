import { useGraphQL } from '../hooks';

function useSlides() {
  const { homeCarouselImages } = useGraphQL();

  const slides = [
    {
      title: 'Introducing our new',
      subTitle: 'Online shop',
      url: '/',
      image: homeCarouselImages.edges[1].node.childImageSharp.fluid,
    },
    {
      title: 'Artisan style gelato',
      subTitle: 'Made daily',
      url: '/',
      image: homeCarouselImages.edges[2].node.childImageSharp.fluid,
    },
    {
      title: 'Home delivery',
      subTitle: 'Now',
      url: '/',
      image: homeCarouselImages.edges[0].node.childImageSharp.fluid,
    },
  ];

  return slides;
}

export { useSlides };
