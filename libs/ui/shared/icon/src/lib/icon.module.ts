import { NgModule } from '@angular/core';

import {
  FontAwesomeModule,
  FaIconLibrary
} from '@fortawesome/angular-fontawesome';

import {
  // faBars,
  faEnvelopeOpenText,
  // faHeart,
  faHiking,
  faInfo,
  faMapMarkedAlt
} from '@fortawesome/free-solid-svg-icons';
// import {
//   faAngular,
//   faDiscord,
//   faFortAwesomeAlt,
//   faGithub,
//   faLinkedin
// } from '@fortawesome/free-brands-svg-icons';

const ICONS = [
  // faBars,
  faEnvelopeOpenText,
  // faHeart,
  faHiking,
  faInfo,
  faMapMarkedAlt

  // faAngular,
  // faDiscord,
  // faFortAwesomeAlt,
  // faGithub,
  // faLinkedin
];

@NgModule({
  imports: [FontAwesomeModule],
  exports: [FontAwesomeModule]
})
export class IconModule {
  constructor(lib: FaIconLibrary) {
    lib.addIcons(...ICONS);
  }
}
