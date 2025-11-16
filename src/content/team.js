import Bacardo from '../images/pages/about/Expert1.png';
import Loreno from '../images/pages/about/Expert2.png';
import Pelore from '../images/pages/about/Expert3.png';
import { FacebookIcon } from '../images/icons/FacebookIcon';
import { InstagramIcon } from '../images/icons/InstagramIcon';
import { TwitterIcon } from '../images/icons/TwitterIcon';

export const teamMembers = [
  {
    id: 1,
    name: 'Giovani Bacardo',
    role: 'Farmer',
    img: Bacardo,
    socials: {
      facebook: { FacebookIcon },
      instagram: { InstagramIcon },
      twitter: { TwitterIcon },
    },
  },
  {
    id: 2,
    name: 'Marianne Loreno',
    role: 'Designer',
    img: Loreno,
    socials: {
      facebook: { FacebookIcon },
      instagram: { InstagramIcon },
      twitter: { TwitterIcon },
    },
  },
  {
    id: 3,
    name: 'Riga Pelore',
    role: 'Farmer',
    img: Pelore,
    socials: {
      facebook: { FacebookIcon },
      instagram: { InstagramIcon },
      twitter: { TwitterIcon },
    },
  },
];

