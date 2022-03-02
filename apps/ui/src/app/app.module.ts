import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  ComponentsModule,
  CoreModule,
  IconsModule,
  // LayoutModule,
  MaterialModule
} from './imports/libraries';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { IconModule } from './modules';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    ComponentsModule,
    CoreModule,
    IconsModule,
    // LayoutModule,
    MaterialModule,

    // IconModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
