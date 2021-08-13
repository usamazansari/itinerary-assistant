import { NgModule } from '@angular/core';

import {
  FontAwesomeModule,
  FaIconLibrary
} from '@fortawesome/angular-fontawesome';

import { faInfo } from '@fortawesome/free-solid-svg-icons';

const ICONS = [faInfo];

@NgModule({
  imports: [FontAwesomeModule],
  exports: [FontAwesomeModule]
})
export class IconModule {
  constructor(lib: FaIconLibrary) {
    lib.addIcons(...ICONS);
  }
}
