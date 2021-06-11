import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppMaterialModule } from '@shared/modules/material/material.module';

import { IaCoreRoutingModule } from './ia-core-routing.module';
import { IaCoreIconModule } from '@ia-core/modules/icons/ia-core-icon/ia-core-icon.module';

import { IaCoreShellComponent } from './components/shell/ia-core-shell.component';

import { IaCoreNavbarContainerComponent } from './components/navigation/navbar/ia-core-navbar-container/ia-core-navbar-container.component';
import { IaCoreNavbarComponent } from './components/navigation/navbar/ia-core-navbar-container/ia-core-navbar/ia-core-navbar.component';

import { IaCoreSidenavContainerComponent } from './components/navigation/sidenav/ia-core-sidenav-container/ia-core-sidenav-container.component';
import { IaCoreSidenavComponent } from './components/navigation/sidenav/ia-core-sidenav-container/ia-core-sidenav/ia-core-sidenav.component';

import { IaCoreFooterContainerComponent } from './components/footer/ia-core-footer-container/ia-core-footer-container.component';
import { IaCoreFooterComponent } from './components/footer/ia-core-footer-container/ia-core-footer/ia-core-footer.component';

import { IaCoreMockTripListContainerComponent } from './components/mock/ia-core-mock-trip-list-container/ia-core-mock-trip-list-container.component';
import { IaCoreMockTripListComponent } from './components/mock/ia-core-mock-trip-list-container/ia-core-mock-trip-list/ia-core-mock-trip-list.component';

const DECLARATIONS = [
  IaCoreShellComponent,

  IaCoreNavbarContainerComponent,
  IaCoreNavbarComponent,

  IaCoreSidenavContainerComponent,
  IaCoreSidenavComponent,

  IaCoreFooterContainerComponent,
  IaCoreFooterComponent,

  IaCoreMockTripListContainerComponent,
  IaCoreMockTripListComponent
];

const IMPORTS = [
  CommonModule,
  AppMaterialModule,
  IaCoreRoutingModule,
  IaCoreIconModule
];

@NgModule({
  declarations: [...DECLARATIONS],
  imports: [...IMPORTS]
})
export class IaCoreModule { }
