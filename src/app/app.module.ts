import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LumberjackModule } from '@ngworker/lumberjack';
import { LumberjackConsoleDriverModule } from '@ngworker/lumberjack/console-driver';

import { AppFireModule } from '@shared/modules/fire/fire.module';
import { AppMaterialModule } from '@shared/modules/material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const DECLARATIONS = [AppComponent];
const IMPORTS = [
  BrowserModule,
  BrowserAnimationsModule,

  LumberjackModule.forRoot(),
  LumberjackConsoleDriverModule.forRoot(),

  AppRoutingModule,
  AppFireModule,
  AppMaterialModule
];

@NgModule({
  declarations: [...DECLARATIONS],
  imports: [...IMPORTS],
  bootstrap: [...DECLARATIONS]
})
export class AppModule { }
