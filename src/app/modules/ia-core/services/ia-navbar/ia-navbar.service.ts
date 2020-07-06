import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';

import { State } from '@ia-core/state';

import * as fromActions from '@ia-core/state/ia-action/ia-navbar.action';
import { IaNavbarModel } from '@ia-core/models/ia-navbar.model';
import { NAVBAR_ID } from '@ia-core/state/ia-type/ia-navbar.type';
import { selectNavbar } from '@ia-core/state/ia-selector/ia-navbar.selector';

@Injectable({
  providedIn: 'root'
})
export class IaNavbarService {

  constructor(
    private _store$: Store<State>
  ) { }

  getAssets(): Observable<Dictionary<IaNavbarModel>> {
    this._store$.dispatch(new fromActions.IaNavbarLoadAction({ id: NAVBAR_ID }));
    return this._store$.pipe(select(selectNavbar));
  }

  getEntityID(): Observable<string> {
    return of(NAVBAR_ID);
  }

  toggleNavbar(navbar: IaNavbarModel) {
    this._store$.dispatch(new fromActions.IaNavbarToggleAction(navbar));
    return this._store$.pipe(select(selectNavbar));
  }
}
