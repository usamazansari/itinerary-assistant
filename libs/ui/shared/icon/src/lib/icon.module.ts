import { NgModule } from '@angular/core';

import {
  FontAwesomeModule,
  FaIconLibrary
} from '@fortawesome/angular-fontawesome';

import {
  faEnvelopeOpenText,
  faHiking,
  faInfo,
  faMapMarkedAlt
} from '@fortawesome/free-solid-svg-icons';

const ICONS = [faEnvelopeOpenText, faHiking, faInfo, faMapMarkedAlt];

@NgModule({
  imports: [FontAwesomeModule],
  exports: [FontAwesomeModule]
})
export class IconModule {
  constructor(lib: FaIconLibrary) {
    lib.addIcons(...ICONS);
  }
}
