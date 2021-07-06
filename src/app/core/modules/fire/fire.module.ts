import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';

import { FIREBASE_CONFIG } from '@app/app.constants';

const imports = [
  AngularFireModule.initializeApp(FIREBASE_CONFIG),
  AngularFirestoreModule
];

const exports = [
  AngularFirestoreModule
];

const PROVIDERS = [
  AngularFirestore
];

@NgModule({
  imports: [...imports],
  exports: [...exports],
  providers: [...PROVIDERS]
})
export class AppFireModule { }
