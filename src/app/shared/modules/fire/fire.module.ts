import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';

import { environment } from '@environments/environment';

const IMPORTS = [
  AngularFireModule.initializeApp(environment.firebaseConfig),
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
