import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

import * as Libraries from './imports/libraries';
import { Icons } from '.';

@NgModule({
  declarations: [],
  imports: [CommonModule]
})
export class IconModule extends Libraries.IconModule {
  constructor(lib: FaIconLibrary) {
    super(lib);
    lib.addIcons(...Icons);
  }
}
