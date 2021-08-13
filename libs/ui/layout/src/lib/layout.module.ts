import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

import * as Libraries from './imports/libraries';

import * as Components from './components';
import { Icons } from './icons';

@NgModule({
  declarations: [
    Components.FooterContainerComponent,
    Components.FooterComponent,

    Components.SidenavContainerComponent,
    Components.SidenavComponent,

    Components.ToolbarContainerComponent,
    Components.ToolbarComponent,
    Components.ShellComponent
  ],
  imports: [CommonModule, Libraries.IconModule, Libraries.MaterialModule],
  exports: [Components.ShellComponent]
})
export class LayoutModule extends Libraries.IconModule {
  constructor(lib: FaIconLibrary) {
    super(lib);
    lib.addIcons(...Icons);
  }
}
