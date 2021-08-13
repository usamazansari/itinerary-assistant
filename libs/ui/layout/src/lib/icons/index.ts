import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import { faBars, faHeart } from '@fortawesome/free-solid-svg-icons';
import {
  faAngular,
  faDiscord,
  faFortAwesomeAlt,
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';

const toolbarIcons: IconDefinition[] = [faBars];

const sidenavIcons: IconDefinition[] = [];

const footerIcons: IconDefinition[] = [
  faAngular,
  faDiscord,
  faFortAwesomeAlt,
  faGithub,
  faHeart,
  faLinkedin
];

export const Icons = [...toolbarIcons, ...sidenavIcons, ...footerIcons];
