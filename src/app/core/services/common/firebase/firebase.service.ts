import { Injectable } from '@angular/core';

import { AngularFirestore, DocumentData } from '@angular/fire/firestore';

import type { Observable } from 'rxjs';

/**
 * ⚠️ Need to check if this service is still woring as expected
 *
 * @export
 * @class CoreFirebaseService
 */
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  /**
   * Creates an instance of CoreFirebaseService.
   * 
   * @param {AngularFirestore} _fireStore Instance of `AngularFirestore` from `@angular/fire/firestore`
   * @memberof CoreFirebaseService
   */
  constructor(
    private _fireStore: AngularFirestore
  ) { }

  /**
   * Watch the collection at specified path.
   *
   * @param {string} path Path to the collection
   * @return {*}  {Observable<DocumentData[]>}
   * @memberof FirebaseService
   */
  watchCollection$(path: string): Observable<DocumentData[]> {
    return this._fireStore.collection(path).valueChanges();
  }
}
