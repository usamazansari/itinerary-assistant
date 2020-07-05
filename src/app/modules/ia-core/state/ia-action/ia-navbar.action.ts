import { Action } from '@ngrx/store';

import { NAVBAR_ACTIONS } from '../ia-type/ia-navbar.type';
import { IaNavbarModel } from '@ia-core/models/ia-navbar.model';
import { Update } from '@ngrx/entity';

export class IaNavbarLoadAction implements Action {
  readonly type = NAVBAR_ACTIONS.LOAD;
  constructor(public payload: { id: string }) { }
}

export class IaNavbarLoadActionSuccess implements Action {
  readonly type = NAVBAR_ACTIONS.LOAD_SUCCESS;
  constructor(public payload: IaNavbarModel) { }
}

export class IaNavbarLoadActionFail implements Action {
  readonly type = NAVBAR_ACTIONS.LOAD_FAIL;
  constructor(public payload: Error) { }
}

export class IaNavbarToggleAction implements Action {
  readonly type = NAVBAR_ACTIONS.TOGGLE;
  constructor(public payload: IaNavbarModel) { }
}

export class IaNavbarToggleActionSuccess implements Action {
  readonly type = NAVBAR_ACTIONS.TOGGLE_SUCCESS;
  constructor(public payload: Update<IaNavbarModel>) { }
}

export type NAVBAR_ACTIONS_TYPES =
  | IaNavbarLoadAction
  | IaNavbarLoadActionSuccess
  | IaNavbarLoadActionFail
  | IaNavbarToggleAction
  | IaNavbarToggleActionSuccess;
