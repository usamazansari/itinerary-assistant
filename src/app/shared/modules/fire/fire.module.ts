import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';

import { FIREBASE_CONFIG } from '@shared/constants/app.constants';

const IMPORTS = [
  AngularFireModule.initializeApp(FIREBASE_CONFIG),
  AngularFirestoreModule
];

const EXPORTS = [
  AngularFirestoreModule
];

const PROVIDERS = [
  AngularFirestore
];

@NgModule({
  imports: [...IMPORTS],
  exports: [...EXPORTS],
  providers: [...PROVIDERS]
})
export class AppFireModule { }
