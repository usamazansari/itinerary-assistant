import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '@core/core.module';

import { HomeRoutingModule } from './home-routing.module';
import { ShellComponent } from './components/shell/shell.component';
import { TemporaryHomeContainerComponent } from './components/temporary-home-container/temporary-home-container.component';
import { TemporaryHomeComponent } from './components/temporary-home-container/temporary-home/temporary-home.component';

const declarations = [
  ShellComponent,

  TemporaryHomeContainerComponent,
  TemporaryHomeComponent
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
