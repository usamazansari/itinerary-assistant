import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { IaCoreRoutingModule } from './ia-core-routing.module';

import { IaMaterialModule } from './modules/ia-material/ia-material.module';
import { IaFontAwesomeModule } from './modules/ia-fontawesome/ia-fontawesome.module';

import { FEATURE_NAME, reducers } from './state';
import { CORE_EFFECTS } from './state/ia-effect';

import { IaAppComponent } from './components/ia-app/ia-app.component';
import { IaHomeContainerComponent } from './components/ia-home/ia-home-container/ia-home-container.component';
import { IaNavbarContainerComponent } from './components/ia-navbar/ia-navbar-container/ia-navbar-container.component';
import { IaNavbarComponent } from './components/ia-navbar/ia-navbar-container/ia-navbar/ia-navbar.component';


@NgModule({
  declarations: [
    IaAppComponent,
    IaHomeContainerComponent,
    IaNavbarContainerComponent,
    IaNavbarComponent,
  ],
  imports: [
    CommonModule,
    IaMaterialModule,
    IaFontAwesomeModule,
    AngularFirestoreModule,
    AngularFirestoreModule.enablePersistence(),
    StoreModule.forFeature(FEATURE_NAME, reducers),
    EffectsModule.forFeature(CORE_EFFECTS),
    IaCoreRoutingModule,
  ],
  exports: [
    AngularFireModule,
    AngularFirestoreModule,
    StoreModule,
    EffectsModule
  ],
  providers: []
})
export class IaCoreModule { }
