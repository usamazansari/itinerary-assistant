import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from '@core/core.module';

import { LumberjackModule } from '@ngworker/lumberjack';
import { LumberjackConsoleDriverModule } from '@ngworker/lumberjack/console-driver';

import { AppFireModule } from '@core/modules/fire/fire.module';
import { AppMaterialModule } from '@core/modules/material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const declarations = [AppComponent];
const imports = [
  BrowserModule,
  BrowserAnimationsModule,

  LumberjackModule.forRoot(),
  LumberjackConsoleDriverModule.forRoot(),

  CoreModule,

  AppRoutingModule,
  AppFireModule,
  AppMaterialModule
];

@NgModule({
  declarations: [...declarations],
  imports: [...imports],
  bootstrap: [...declarations]
})
export class AppModule { }
