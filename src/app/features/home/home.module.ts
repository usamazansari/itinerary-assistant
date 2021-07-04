import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ShellComponent } from './components/shell/shell.component';
import { HomeContainerComponent } from './components/home-container/home-container.component';
import { HomeComponent } from './components/home-container/home/home.component';
import { CoreModule } from '@core/core.module';

const declarations = [
  ShellComponent,

  HomeContainerComponent,
  HomeComponent
];

const imports = [
  CommonModule,
  CoreModule,
  HomeRoutingModule
];

@NgModule({
  declarations: [...declarations],
  imports: [...imports]
})
export class HomeModule { }
