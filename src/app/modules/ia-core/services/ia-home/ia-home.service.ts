import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Dictionary } from '@ngrx/entity';
import { Store, select } from '@ngrx/store';

import { State } from '@ia-core/state';
import * as fromActions from '@ia-core/state/ia-action/ia-home.action';
import { IaHomeModel } from '@ia-core/models/ia-home.model';
import { HOME_ID } from '@ia-core/state/ia-type/ia-home.type';
import { selectHome } from '@ia-core/state/ia-selector/ia-home.selector';

@Injectable({
  providedIn: 'root'
})
export class IaHomeService {

  constructor(
    private _store$: Store<State>
  ) { }

  getHomeAssets(): Observable<Dictionary<IaHomeModel>> {
    this._store$.dispatch(new fromActions.IaHomeLoadAction({ id: HOME_ID }));
    return this._store$.pipe(select(selectHome));
  }

  getEntityID(): Observable<string> {
    return of(HOME_ID);
  }
}
