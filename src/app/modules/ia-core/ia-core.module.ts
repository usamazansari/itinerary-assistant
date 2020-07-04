import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
// import { fas } from "@fortawesome/free-solid-svg-icons";
// import { far } from "@fortawesome/free-regular-svg-icons";
// import { fab } from "@fortawesome/free-brands-svg-icons";

import { IaCoreRoutingModule } from './ia-core-routing.module';

import { IaMaterialModule } from './modules/ia-material/ia-material.module';
import { IaFontAwesomeModule } from './modules/ia-fontawesome/ia-fontawesome.module';

import { IaAppComponent } from './components/ia-app/ia-app.component';
import { IaHomeComponent } from './components/ia-home/ia-home.component';
import { IaNavbarComponent } from './components/ia-navbar/ia-navbar.component';

import { FEATURE_NAME, reducers } from './state';
import { CORE_EFFECTS } from './state/ia-effect';

// import { IaCoreService } from './services/ia-core.service';
// import { reducers, metaReducers } from '../common/ia-store';
// import { CORE_EFFECTS } from '../common/ia-store/ia-effects';


@NgModule({
  declarations: [IaHomeComponent, IaNavbarComponent, IaAppComponent],
  imports: [
    CommonModule,
    // FontAwesomeModule,
    IaMaterialModule,
    IaFontAwesomeModule,
    AngularFirestoreModule,
    AngularFirestoreModule.enablePersistence(),
    IaCoreRoutingModule,
    StoreModule.forFeature(FEATURE_NAME, reducers),
    EffectsModule.forFeature(CORE_EFFECTS)
    // StoreModule.forRoot(reducers, { metaReducers }),
    // EffectsModule.forRoot(CORE_EFFECTS)
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
  // constructor(lib: FaIconLibrary) {
  //   lib.addIconPacks(fas, far, fab);
  // }
}
