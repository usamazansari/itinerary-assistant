import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';

import { environment } from '@environments/environment';

const IMPORTS = [
  AngularFireModule.initializeApp(environment.firebaseConfig),
  AngularFirestoreModule,
  AngularFireAnalyticsModule,
  AngularFirestoreModule.enablePersistence()
];

const EXPORTS = [
  AngularFirestoreModule
];

@NgModule({
  imports: [...IMPORTS],
  exports: [...EXPORTS]
})
export class AppFireModule { }
