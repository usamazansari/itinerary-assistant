import { NgModule } from '@angular/core';

import {
  FaIconLibrary,
  FontAwesomeModule
} from '@fortawesome/angular-fontawesome';

import { faInfo } from '@fortawesome/free-solid-svg-icons';

const Icons = [faInfo];

@NgModule({
  imports: [FontAwesomeModule],
  exports: [FontAwesomeModule]
})
export class IconsModule {
  constructor(lib: FaIconLibrary) {
    lib.addIcons(...Icons);
  }
}
