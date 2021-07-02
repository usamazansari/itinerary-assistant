import { Injectable } from '@angular/core';

import type { Observable } from 'rxjs';

import { CoreFirebaseService } from '@core/services/common/firebase/core-firebase.service';

// :recycle: Optimization required

@Injectable({
  providedIn: 'root'
})
export class IaCoreMockTripListService {

  constructor(
    private _firebaseService: CoreFirebaseService
  ) { }

  watchTripList$(): Observable<any> {
    return this._firebaseService.watchCollection$('trips');
  }
}
