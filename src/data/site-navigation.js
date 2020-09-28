import { nanoid } from 'nanoid';

import { FacebookIcon, InstagramIcon } from '../components/vectors';
import { useGraphQL } from '../hooks';

const mainNavigation = [
  {
    id: nanoid(),
    label: 'Order Cakes Now',
    slug: '/order-now/',
  },
  {
    id: nanoid(),
    label: 'Menu',
    slug: '/menu/',
  },
  {
    id: nanoid(),
    label: 'About',
    slug: '/about/',
  },
  {
    id: nanoid(),
    label: 'Contact',
    slug: '/contact/',
  },
];

const footerNavigation = [{ id: nanoid(), label: 'Home', slug: '/' }];

function useSocialLinks() {
  const {
    site: { siteMetadata },
  } = useGraphQL();
  const socialLinks = [
    {
      id: nanoid(),
      label: 'Facebook',
      url: siteMetadata.social.facebook,
      icon: FacebookIcon,
    },
    {
      id: nanoid(),
      label: 'Instagram',
      url: siteMetadata.social.instagram,
      icon: InstagramIcon,
    },
  ];
  return socialLinks;
}

export { mainNavigation, footerNavigation, useSocialLinks };
