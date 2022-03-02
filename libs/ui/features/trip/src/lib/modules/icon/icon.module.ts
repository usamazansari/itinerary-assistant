import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  FaIconLibrary,
  FontAwesomeModule
} from '@fortawesome/angular-fontawesome';

import { IconsModule } from './imports/libraries';
import { Icons } from '.';

@NgModule({
  declarations: [],
  imports: [CommonModule, FontAwesomeModule],
  exports: [FontAwesomeModule]
})
export class IconModule extends IconsModule {
  constructor(lib: FaIconLibrary) {
    super(lib);
    lib.addIcons(...Icons);
  }
}
