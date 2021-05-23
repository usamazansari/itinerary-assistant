import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { IaCoreFirebaseService } from '@ia-core/services/common/firebase/ia-core-firebase/ia-core-firebase.service';
import { AngularFirestore, AngularFirestoreCollection, DocumentData } from '@angular/fire/firestore';

// :recycle: Optimization required

@Injectable({
  providedIn: 'root'
})
export class IaCoreMockTripListService {

  // private _collection$$: AngularFirestoreCollection<DocumentData>;

  constructor(
    private _firebaseService: IaCoreFirebaseService
    // private _fireStore: AngularFirestore
  ) { }

  fetchTripList(): void {
    // this._firebaseService.fetchCollection('trips');
    // this._collection$$ = this._fireStore.collection('trips');
  }

  watchTripList$(): Observable<any> {
    // return this._firebaseService.watchCollection$();
    // return this._collection$$.valueChanges();
    return this._firebaseService.watchCollection$('trips');
  }
}
