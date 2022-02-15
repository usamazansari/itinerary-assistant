import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

import { IconsModule, MaterialModule } from './imports/libraries';

import {
  FooterComponent,
  FooterContainerComponent,
  ShellComponent,
  SidenavComponent,
  SidenavContainerComponent,
  ToolbarComponent,
  ToolbarContainerComponent
} from './components';
import { Icons } from './icons';

@NgModule({
  declarations: [
    FooterContainerComponent,
    FooterComponent,

    SidenavContainerComponent,
    SidenavComponent,

    ToolbarContainerComponent,
    ToolbarComponent,
    ShellComponent
  ],
  imports: [CommonModule, IconsModule, MaterialModule],
  exports: [ShellComponent]
})
export class LayoutModule extends IconsModule {
  constructor(lib: FaIconLibrary) {
    super(lib);
    lib.addIcons(...Icons);
  }
}
