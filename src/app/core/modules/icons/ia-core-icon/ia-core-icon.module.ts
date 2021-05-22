import { NgModule } from '@angular/core';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

import {
  faBars
} from '@fortawesome/free-solid-svg-icons';

const ICONS = [
  faBars
];

@NgModule({
  imports: [FontAwesomeModule],
  exports: [FontAwesomeModule]
})
export class IaCoreIconModule {

  constructor(_: FaIconLibrary) {
    _.addIcons(...ICONS);
  }

}
