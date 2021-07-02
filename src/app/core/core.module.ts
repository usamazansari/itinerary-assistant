import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppMaterialModule } from '@shared/modules/material/material.module';

import { CoreRoutingModule } from './core-routing.module';
import { IconModule } from '@core/modules/icon/icon.module';

import { ShellComponent } from './components/shell/shell.component';

import { NavbarContainerComponent } from './components/navigation/navbar/navbar-container/navbar-container.component';
import { NavbarComponent } from './components/navigation/navbar/navbar-container/navbar/navbar.component';

import { SidenavContainerComponent } from './components/navigation/sidenav/sidenav-container/sidenav-container.component';
import { SidenavComponent } from './components/navigation/sidenav/sidenav-container/sidenav/sidenav.component';

import { FooterContainerComponent } from './components/footer/footer-container/footer-container.component';
import { FooterComponent } from './components/footer/footer-container/footer/footer.component';

import { CoreMockTripListContainerComponent } from './components/mock/ia-core-mock-trip-list-container/ia-core-mock-trip-list-container.component';
import { CoreMockTripListComponent } from './components/mock/ia-core-mock-trip-list-container/ia-core-mock-trip-list/ia-core-mock-trip-list.component';
import { HomeContainerComponent } from './components/home/ia-core-home-container/home-container.component';
import { HomeComponent } from './components/home/ia-core-home-container/ia-core-home/home.component';

const DECLARATIONS = [
  ShellComponent,

  NavbarContainerComponent,
  NavbarComponent,

  SidenavContainerComponent,
  SidenavComponent,

  FooterContainerComponent,
  FooterComponent,

  CoreMockTripListContainerComponent,
  CoreMockTripListComponent,

  HomeContainerComponent,
  HomeComponent
];

const IMPORTS = [
  CommonModule,
  AppMaterialModule,
  CoreRoutingModule,
  IconModule
];

@NgModule({
  declarations: [...DECLARATIONS],
  imports: [...IMPORTS]
})
export class CoreModule { }
