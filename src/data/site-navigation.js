import { nanoid } from 'nanoid';

import { FacebookIcon, InstagramIcon } from '../components/vectors';

export const mainNavigation = [
  {
    id: nanoid(),
    label: 'Home',
    slug: '/',
  },
];

export const footerNavigation = [{ id: nanoid(), label: 'Home', slug: '/' }];

export const socialLinks = [
  {
    id: nanoid(),
    label: 'Facebook',
    url: 'https://www.facebook.com/bluecowgelato/',
    icon: FacebookIcon,
  },
  {
    id: nanoid(),
    label: 'Instagram',
    url: 'https://www.instagram.com/bluecowgelato/',
    icon: InstagramIcon,
  },
];
