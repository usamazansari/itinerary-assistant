import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

import * as Libraries from './imports/libraries';

import { FooterContainerComponent } from './components/footer/footer-container/footer-container.component';
import { FooterComponent } from './components/footer/footer-container/footer/footer.component';

import { SidenavContainerComponent } from './components/sidenav/sidenav-container/sidenav-container.component';
import { SidenavComponent } from './components/sidenav/sidenav-container/sidenav/sidenav.component';

import { ToolbarContainerComponent } from './components/toolbar/toolbar-container/toolbar-container.component';
import { ToolbarComponent } from './components/toolbar/toolbar-container/toolbar/toolbar.component';

import { ShellComponent } from './components/shell/shell.component';

import { layoutIcons } from './icons';

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
  imports: [CommonModule, Libraries.IconModule, Libraries.MaterialModule],
  exports: [ShellComponent]
})
export class LayoutModule extends Libraries.IconModule {
  constructor(lib: FaIconLibrary) {
    super(lib);
    lib.addIcons(...layoutIcons);
  }
}
