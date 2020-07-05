import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { metaReducers, reducers } from './ia-store';
import { IaCoreModule } from '@ia-core/ia-core.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { ROUTER_STORE_STRING } from './ia-store';
import { environment } from 'environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, { metaReducers: metaReducers }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({ stateKey: ROUTER_STORE_STRING }),
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 25 }) : [],
    IaCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
