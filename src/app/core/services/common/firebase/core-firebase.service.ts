import { Injectable } from '@angular/core';

import { Action, DocumentData, SetOptions, DocumentSnapshot, DocumentChangeType, DocumentChangeAction } from '@angular/fire/firestore';

import { Observable } from 'rxjs';

import { AppFirebaseService } from '@shared/services/firebase/app-firebase/app-firebase.service';

// :recycle: Optimization required

@Injectable({
  providedIn: 'root'
})
export class CoreFirebaseService {

  constructor(
    private _service: AppFirebaseService
  ) { }

  // fetchDocument<T>(path: string): void {
  //   this._service.fetchDocument<T>(path);
  // }

  // setDocument(data: DocumentData, options: SetOptions): void {
  //   this._service.setDocument(data, options);
  // }

  // updateDocument(data: Partial<DocumentData>): void {
  //   this._service.updateDocument(data);
  // }

  // deleteDocument(): Promise<void> {
  //   return this._service.deleteDocument();
  // }

  // watchDocument$(): Observable<DocumentData> {
  //   return this._service.watchDocument$();
  // }

  // watchDocumentSnapshot$(): Observable<Action<DocumentSnapshot<DocumentData>>> {
  //   return this._service.watchDocumentSnapshot$();
  // }

  // fetchCollection<T>(path: string): void {
  //   this._service.fetchCollection<T>(path);
  // }

  watchCollection$(path: string): Observable<DocumentData[]> {
    return this._service.fetchCollection(path);
  }

  // watchCollectionSnapshot$(events?: DocumentChangeType[]): Observable<DocumentChangeAction<DocumentData>[]> {
  //   return this._service.watchCollectionSnapshot$(events);
  // }

  // watchCollectionState$(events?: DocumentChangeType[]): Observable<DocumentChangeAction<DocumentData>[]> {
  //   return this._service.watchCollectionState$(events);
  // }

}
