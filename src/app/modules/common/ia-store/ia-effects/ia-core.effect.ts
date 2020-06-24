import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, catchError } from 'rxjs/operators';
import * as fromActions from '../ia-actions/ia-core.action'

@Injectable()
export class IaCoreEffects {

  constructor(private _a$: Actions) { }
  @Effect()
  coreEffect$ = this._a$.pipe(
    ofType(fromActions.ACTION_TYPES.CORE_ACTION),
    map((data: {}) => new fromActions.IaCoreActionSuccess({})),
    catchError((error: {}) => [new fromActions.IaCoreActionFail({})])
  );
}
