import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LumberjackModule } from '@ngworker/lumberjack';
import { LumberjackConsoleDriverModule } from '@ngworker/lumberjack/console-driver';

import * as Libraries from './imports/libraries';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import * as Modules from './modules';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    LumberjackModule.forRoot(),
    LumberjackConsoleDriverModule.forRoot(),

    Libraries.CoreModule,
    Libraries.ElementsModule,
    Libraries.IconModule,
    Libraries.LayoutModule,
    Libraries.MaterialModule,

    Modules.IconModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
