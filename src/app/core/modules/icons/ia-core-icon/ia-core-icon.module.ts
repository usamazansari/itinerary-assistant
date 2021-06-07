import { NgModule } from '@angular/core';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

import {
  faBars,
  faCode,
  faComments,
  faCompass,
  faEdit,
  faEnvelopeOpenText,
  faFileAlt,
  faHeart,
  faLightbulb,
  faPalette,
  faSuitcaseRolling,
  faTasks,
  faVial,
  faWindowMinimize
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
  faCode,
  faComments,
  faCompass,
  faEdit,
  faEnvelopeOpenText,
  faFileAlt,
  faHeart,
  faLightbulb,
  faPalette,
  faSuitcaseRolling,
  faTasks,
  faVial,
  faWindowMinimize,

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
