import { Action } from '@ngrx/store';
import { HOME_ACTIONS } from '../ia-type/ia-home.type';
import { IaHomeModel } from '@ia-core/models/ia-home.model';

export class IaHomeLoadAction implements Action {
  readonly type = HOME_ACTIONS.LOAD;
  constructor(public payload: { id: string }) { }
}

export class IaHomeLoadActionSuccess implements Action {
  readonly type = HOME_ACTIONS.LOAD_SUCCESS;
  constructor(public payload: IaHomeModel) { }
}

export class IaHomeLoadActionFail implements Action {
  readonly type = HOME_ACTIONS.LOAD_FAIL;
  constructor(public payload: Error) { }
}

export type HOME_ACTION_TYPES =
  | IaHomeLoadAction
  | IaHomeLoadActionSuccess
  | IaHomeLoadActionFail;
