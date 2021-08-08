import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LumberjackModule } from '@ngworker/lumberjack';
import { LumberjackConsoleDriverModule } from '@ngworker/lumberjack/console-driver';

import * as Libraries from './imports/libraries';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import * as Modules from './modules';
import * as Components from './components';

@NgModule({
  declarations: [
    AppComponent,

    Components.HomeContainerComponent,
    Components.HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    LumberjackModule.forRoot(),
    LumberjackConsoleDriverModule.forRoot(),

    Libraries.LayoutModule,
    Libraries.MaterialModule,
    Libraries.CoreModule,
    Libraries.IconModule,

    Modules.IconModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
