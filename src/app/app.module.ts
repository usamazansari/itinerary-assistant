import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppSharedModule } from '@shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const DECLARATIONS = [AppComponent];
const IMPORTS = [
  BrowserModule,
  BrowserAnimationsModule,

  AppRoutingModule,
  AppSharedModule
];

@NgModule({
  declarations: [...DECLARATIONS],
  imports: [...IMPORTS],
  bootstrap: [...DECLARATIONS]
})
export class AppModule { }
