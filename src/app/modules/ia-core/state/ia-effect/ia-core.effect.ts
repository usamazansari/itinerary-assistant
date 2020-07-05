import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as fromActions from '../ia-action/ia-core.action';
import { CORE_ACTIONS } from '../ia-type/ia-core.type';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class IaCoreEffects {
  constructor(private _actions$: Actions) { }

  @Effect()
  eIaCore = this._actions$.pipe(
    ofType<fromActions.CORE_ACTIONS>(CORE_ACTIONS.FOO),
    map((action: fromActions.IaCoreAction) => new fromActions.IaCoreActionSuccess(action.payload)),
    catchError((err: Error) => of(new fromActions.IaCoreActionFail(err)))
  )
}
