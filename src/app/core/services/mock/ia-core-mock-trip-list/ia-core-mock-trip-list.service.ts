import { Injectable } from '@angular/core';

import type { Observable } from 'rxjs';

import { IaCoreFirebaseService } from '@ia-core/services/common/firebase/ia-core-firebase/ia-core-firebase.service';

// :recycle: Optimization required

@Injectable({
  providedIn: 'root'
})
export class IaCoreMockTripListService {

  constructor(
    private _firebaseService: IaCoreFirebaseService
  ) { }

  watchTripList$(): Observable<any> {
    return this._firebaseService.watchCollection$('trips');
  }
}
