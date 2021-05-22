import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppSharedModule } from '@shared/shared.module';

import { AppCoreRoutingModule } from './core-routing.module';

import { IaCoreIconModule } from '@ia-core/modules/icons/ia-core-icon/ia-core-icon.module';

import { IaCoreShellComponent } from './components/shell/ia-core-shell.component';
import { IaCoreNavbarContainerComponent } from './components/navigation/navbar/ia-core-navbar-container/ia-core-navbar-container.component';
import { IaCoreNavbarComponent } from './components/navigation/navbar/ia-core-navbar-container/ia-core-navbar/ia-core-navbar.component';
import { IaCoreSidenavContainerComponent } from './components/navigation/sidenav/ia-core-sidenav-container/ia-core-sidenav-container.component';
import { IaCoreSidenavComponent } from './components/navigation/sidenav/ia-core-sidenav-container/ia-core-sidenav/ia-core-sidenav.component';
import { IaCoreFooterContainerComponent } from './components/footer/ia-core-footer-container/ia-core-footer-container.component';
import { IaCoreFooterComponent } from './components/footer/ia-core-footer-container/ia-core-footer/ia-core-footer.component';


const DECLARATIONS = [
  IaCoreShellComponent
];

const IMPORTS = [
  CommonModule,
  AppCoreRoutingModule,
  AppSharedModule,
  IaCoreIconModule
];

@NgModule({
  declarations: [...DECLARATIONS, IaCoreNavbarContainerComponent, IaCoreNavbarComponent, IaCoreSidenavContainerComponent, IaCoreSidenavComponent, IaCoreFooterContainerComponent, IaCoreFooterComponent],
  imports: [...IMPORTS]
})
export class AppCoreModule { }
