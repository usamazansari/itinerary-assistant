import { Injectable } from '@angular/core';

import type { Observable } from 'rxjs';

import { FirebaseService } from '@core/services/common/firebase/firebase.service';

// :recycle: Optimization required

@Injectable({
  providedIn: 'root'
})
export class IaCoreMockTripListService {

  constructor(
    private _firebaseService: FirebaseService
  ) { }

  watchTripList$(): Observable<any> {
    return this._firebaseService.watchCollection$('trips');
  }
}
