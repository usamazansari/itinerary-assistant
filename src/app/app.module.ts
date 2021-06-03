import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppFireModule } from '@shared/modules/fire/fire.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LumberjackModule } from '@ngworker/lumberjack';
import { LumberjackConsoleDriverModule } from '@ngworker/lumberjack/console-driver';

const DECLARATIONS = [AppComponent];
const IMPORTS = [
  BrowserModule,
  BrowserAnimationsModule,

  AppRoutingModule,
  AppFireModule
];

@NgModule({
  declarations: [...DECLARATIONS],
  imports: [...IMPORTS, LumberjackModule.forRoot(), LumberjackConsoleDriverModule.forRoot()],
  bootstrap: [...DECLARATIONS]
})
export class AppModule { }
