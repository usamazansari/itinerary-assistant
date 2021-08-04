import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

import { MaterialModule } from '@itinerary-assistant/ui/material';
import { IconModule } from '@itinerary-assistant/ui/icon';

import { FooterContainerComponent } from './components/footer/footer-container/footer-container.component';
import { FooterComponent } from './components/footer/footer-container/footer/footer.component';

import { SidenavContainerComponent } from './components/navigation/sidenav-container/sidenav-container.component';
import { SidenavComponent } from './components/navigation/sidenav-container/sidenav/sidenav.component';

import { ToolbarContainerComponent } from './components/navigation/toolbar-container/toolbar-container.component';
import { ToolbarComponent } from './components/navigation/toolbar-container/toolbar/toolbar.component';

import { ShellComponent } from './components/shell/shell.component';

import { layoutIcons } from './icons';

const declarations = [
  FooterContainerComponent,
  FooterComponent,

  SidenavContainerComponent,
  SidenavComponent,

  ToolbarContainerComponent,
  ToolbarComponent,
  ShellComponent
];
const imports = [CommonModule, MaterialModule, IconModule];
const exports = [ShellComponent];

@NgModule({ declarations, imports, exports })
export class LayoutModule extends IconModule {
  constructor(lib: FaIconLibrary) {
    super(lib);
    lib.addIcons(...layoutIcons);
  }
}
