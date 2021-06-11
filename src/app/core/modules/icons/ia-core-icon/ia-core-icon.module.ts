import { NgModule } from '@angular/core';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

import {
  faBars,
  faEnvelopeOpenText,
  faHeart
} from '@fortawesome/free-solid-svg-icons';
import {
  faAngular,
  faDiscord,
  faFortAwesomeAlt,
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';

const ICONS = [
  faBars,
  faEnvelopeOpenText,
  faHeart,

  faAngular,
  faDiscord,
  faFortAwesomeAlt,
  faGithub,
  faLinkedin
];

@NgModule({
  imports: [FontAwesomeModule],
  exports: [FontAwesomeModule]
})
export class IaCoreIconModule {

  constructor(lib: FaIconLibrary) {
    lib.addIcons(...ICONS);
  }

}
