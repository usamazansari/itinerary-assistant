import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ShellComponent } from './components/shell/shell.component';

const IMPORTS = [
  CommonModule,
  HomeRoutingModule
];

@NgModule({
  declarations: [
    ShellComponent
  ],
  imports: [...IMPORTS]
})
export class HomeModule { }
