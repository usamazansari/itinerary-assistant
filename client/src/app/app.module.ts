import { NgModule } from '@angular/core'

import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppStateModule } from '@shared/modules/state/state.module'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

const DECLARATIONS = [AppComponent]

const IMPORTS = [
  BrowserModule,
  BrowserAnimationsModule,
  AppRoutingModule,
  AppStateModule
]

const PROVIDERS = []

const BOOTSTRAP = [AppComponent]

@NgModule({
  declarations: [...DECLARATIONS],
  imports: [...IMPORTS],
  providers: [...PROVIDERS],
  bootstrap: [...BOOTSTRAP]
})
export class AppModule { }
