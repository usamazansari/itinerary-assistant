import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import {
  faBars,
  faHeart,
  faEnvelopeOpenText,
  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';
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
  faEnvelopeOpenText,
  faFortAwesomeAlt,
  faGithub,
  faHeart,
  faLinkedin,
  faMapMarkerAlt
];

export const Icons = [...toolbarIcons, ...sidenavIcons, ...footerIcons];
