import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AppCoreRoutingModule } from './core-routing.module'
import { AppShellComponent } from './components/shell/shell.component'
import { AppNavbarContainerComponent } from './components/navbar-container/navbar-container.component'
import { AppNavbarComponent } from './components/navbar-container/navbar/navbar.component'
import { AppSharedModule } from '../shared/shared.module'


const DECLARATIONS = [
  AppShellComponent,
  AppNavbarContainerComponent, AppNavbarComponent
]

const IMPORTS = [
  CommonModule,
  AppCoreRoutingModule,
  AppSharedModule
]

@NgModule({
  declarations: [...DECLARATIONS],
  imports: [...IMPORTS]
})
export class AppCoreModule { }
