import { Action } from '@ngrx/store';

import { NAVBAR_ACTIONS } from '../ia-type/ia-navbar.type';
import { IaNavbarModel } from '@ia-core/models/ia-navbar.model';

export class IaNavbarAction implements Action {
  readonly type = NAVBAR_ACTIONS.LOAD;
  constructor(public payload: { id: string }) { }
}

export class IaNavbarActionSuccess implements Action {
  readonly type = NAVBAR_ACTIONS.LOAD_SUCCESS;
  constructor(public payload: IaNavbarModel) { }
}

export class IaNavbarActionFail implements Action {
  readonly type = NAVBAR_ACTIONS.LOAD_FAIL;
  constructor(public payload: Error) { }
}

export type NAVBAR_ACTIONS_TYPES =
  | IaNavbarAction
  | IaNavbarActionSuccess
  | IaNavbarActionFail;
