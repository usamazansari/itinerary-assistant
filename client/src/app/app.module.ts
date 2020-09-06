import { NgModule } from '@angular/core'

import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AppCommonModule } from '@common/app-common.module'


const DECLARATIONS = [AppComponent]

const IMPORTS = [
  BrowserModule,
  BrowserAnimationsModule,
  AppRoutingModule,
  AppCommonModule
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
