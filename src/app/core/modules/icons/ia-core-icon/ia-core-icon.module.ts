import { NgModule } from '@angular/core';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

import {
  faBars,
  faBolt,
  faComments,
  faCompass,
  faEdit,
  faFileAlt,
  faPalette,
  faRocket,
  faSuitcaseRolling,
  faTasks,
  faVial,
  faWindowMinimize
} from '@fortawesome/free-solid-svg-icons';
// import {} from '@fortawesome/free-regular-svg-icons';
import {
  faAngular,
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';

const ICONS = [
  faBars,
  faBolt,
  faComments,
  faCompass,
  faFileAlt,
  faEdit,
  faPalette,
  faRocket,
  faSuitcaseRolling,
  faTasks,
  faVial,
  faWindowMinimize,

  faAngular,
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
