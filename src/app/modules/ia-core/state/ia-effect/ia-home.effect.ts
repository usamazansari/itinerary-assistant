import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import * as fromActions from '@ia-core/state/ia-action/ia-home.action';
import { HOME_ACTIONS } from '../ia-type/ia-home.type';
import { IaHomeModel } from '@ia-core/models/ia-home.model';

@Injectable()
export class IaHomeEffects {
  constructor(private _actions$: Actions) { }

  @Effect()
  eLoadHome$ = this._actions$.pipe(
    ofType<fromActions.HOME_ACTION_TYPES>(HOME_ACTIONS.LOAD),
    map((action: fromActions.IaHomeLoadAction) => {
      const homeAsset: IaHomeModel = {
        id: action.payload.id
      };
      return new fromActions.IaHomeLoadActionSuccess(homeAsset);
    }),
    catchError((err: Error) => of(new fromActions.IaHomeLoadActionFail(err)))
  );
}
