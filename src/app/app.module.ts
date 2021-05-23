import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppFireModule } from '@shared/modules/fire/fire.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const DECLARATIONS = [AppComponent];
const IMPORTS = [
  BrowserModule,
  BrowserAnimationsModule,

  AppRoutingModule,
  AppFireModule
];

@NgModule({
  declarations: [...DECLARATIONS],
  imports: [...IMPORTS],
  bootstrap: [...DECLARATIONS]
})
export class AppModule { }
