import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@itinerary-assistant/ui/material';

import { FooterComponent } from './components/footer/footer-container/footer/footer.component';
import { FooterContainerComponent } from './components/footer/footer-container/footer-container.component';

import { NavbarComponent } from './components/navigation/navbar/navbar-container/navbar/navbar.component';
import { NavbarContainerComponent } from './components/navigation/navbar/navbar-container/navbar-container.component';

import { SidenavComponent } from './components/navigation/sidenav/sidenav-container/sidenav/sidenav.component';
import { SidenavContainerComponent } from './components/navigation/sidenav/sidenav-container/sidenav-container.component';

const declarations = [
  FooterComponent,
  FooterContainerComponent,
  NavbarComponent,
  NavbarContainerComponent,
  SidenavComponent,
  SidenavContainerComponent
];

const imports = [CommonModule, MaterialModule];
const exports = [...imports, ...declarations];

@NgModule({ imports, declarations, exports })
export class CoreModule {}
