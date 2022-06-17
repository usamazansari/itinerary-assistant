import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  CoreModule,
  ElementaryComponentsModule,
  IconsModule
} from './imports/libraries';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    CoreModule,
    ElementaryComponentsModule,
    IconsModule,

    AppRoutingModule,

    GraphQLModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
