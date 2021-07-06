import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@core/modules/material/material.module';

import { IconModule } from '@core/modules/icon/icon.module';

import { NavbarContainerComponent } from './components/navigation/navbar/navbar-container/navbar-container.component';
import { NavbarComponent } from './components/navigation/navbar/navbar-container/navbar/navbar.component';

import { SidenavContainerComponent } from './components/navigation/sidenav/sidenav-container/sidenav-container.component';
import { SidenavComponent } from './components/navigation/sidenav/sidenav-container/sidenav/sidenav.component';

import { FooterContainerComponent } from './components/footer/footer-container/footer-container.component';
import { FooterComponent } from './components/footer/footer-container/footer/footer.component';

import { CoreMockTripListContainerComponent } from './components/mock/ia-core-mock-trip-list-container/ia-core-mock-trip-list-container.component';
import { CoreMockTripListComponent } from './components/mock/ia-core-mock-trip-list-container/ia-core-mock-trip-list/ia-core-mock-trip-list.component';

const declarations = [
  NavbarContainerComponent,
  NavbarComponent,

  SidenavContainerComponent,
  SidenavComponent,

  FooterContainerComponent,
  FooterComponent,

  CoreMockTripListContainerComponent,
  CoreMockTripListComponent
];

const imports = [
  CommonModule,
  MaterialModule,
  IconModule
];

const exports = [
  MaterialModule,
  IconModule,

  NavbarContainerComponent,
  SidenavContainerComponent,
  FooterContainerComponent
];

@NgModule({
  declarations: [...declarations],
  imports: [...imports],
  exports: [...exports]
})
export class CoreModule { }
