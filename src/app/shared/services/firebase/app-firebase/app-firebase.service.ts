import { Injectable } from '@angular/core';

import {
  AngularFirestore,

  AngularFirestoreDocument,
  DocumentData,
  SetOptions,
  Action, DocumentSnapshot,

  AngularFirestoreCollection,
  DocumentChangeType, DocumentChangeAction,
} from '@angular/fire/firestore';

import { Observable } from 'rxjs';

// :recycle: Optimization Required

/**
 * @deprecated Use from `@core/services/common`
 *
 * @export
 * @class AppFirebaseService
 */
@Injectable({
  providedIn: 'root'
})
export class AppFirebaseService {

  private _document$$: AngularFirestoreDocument<DocumentData>;
  private _collection$$: AngularFirestoreCollection<DocumentData>;

  constructor(
    private _fireStore: AngularFirestore
  ) { }

  fetchDocument<T>(path: string): Observable<DocumentData> {
    return this._fireStore.doc<T>(path).valueChanges();
  }

  // setDocument(data: DocumentData, options: SetOptions): void {
  //   this._document$$.set(data, options);
  // }

  // updateDocument(data: Partial<DocumentData>): void {
  //   this._document$$.update(data);
  // }

  // deleteDocument(): Promise<void> {
  //   return this._document$$.delete();
  // }

  // watchDocument$(): Observable<DocumentData> {
  //   return this._document$$.valueChanges();
  // }

  watchDocumentSnapshot$<T>(path: string): Observable<Action<DocumentSnapshot<DocumentData>>> {
    return this._fireStore.doc<T>(path).snapshotChanges();
  }

  fetchCollection<T>(path: string): Observable<DocumentData[]> {
    return this._fireStore.collection<T>(path).valueChanges();
  }

  fetchCollectionSnapshot<T>(events?: DocumentChangeType[]): Observable<DocumentChangeAction<DocumentData>[]> {
    return this._collection$$.snapshotChanges(events);
  }

  fetchCollectionState<T>(events?: DocumentChangeType[]): Observable<DocumentChangeAction<DocumentData>[]> {
    return this._collection$$.stateChanges(events);
  }

  // watchCollection$(): Observable<DocumentData[]> {
  //   return this._collection$$.valueChanges();
  // }

  // watchCollectionSnapshot$(events?: DocumentChangeType[]): Observable<DocumentChangeAction<DocumentData>[]> {
  //   return this._collection$$.snapshotChanges(events);
  // }

  // watchCollectionState$(events?: DocumentChangeType[]): Observable<DocumentChangeAction<DocumentData>[]> {
  //   return this._collection$$.stateChanges(events);
  // }
}
