import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

const IMPORTS = [
  CommonModule,
  HomeRoutingModule
];

@NgModule({
  declarations: [],
  imports: [...IMPORTS]
})
export class HomeModule { }
