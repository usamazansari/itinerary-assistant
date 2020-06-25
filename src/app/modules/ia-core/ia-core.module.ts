import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import { reducers, metaReducers } from '../common/ia-store';
import { CORE_EFFECTS } from '../common/ia-store/ia-effects';

import { IaMaterialModule } from '../common/ia-material/ia-material.module';
import { IaHomeComponent } from './components/ia-home/ia-home.component';
import { IaNavbarContainerComponent } from './components/ia-navbar/ia-navbar-container/ia-navbar-container.component';
import { IaNavbarComponent } from './components/ia-navbar/ia-navbar-container/ia-navbar/ia-navbar.component';


@NgModule({
  declarations: [
    IaHomeComponent,
    IaNavbarContainerComponent,
    IaNavbarComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    IaMaterialModule,
    AngularFirestoreModule,
    AngularFirestoreModule.enablePersistence(),
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot(CORE_EFFECTS)
  ],
  exports: [
    AngularFireModule,
    AngularFirestoreModule,
    StoreModule,
    EffectsModule
  ],
  providers: []
})
export class IaCoreModule {
  constructor(lib: FaIconLibrary) {
    lib.addIconPacks(fas, far, fab);
  }
}
