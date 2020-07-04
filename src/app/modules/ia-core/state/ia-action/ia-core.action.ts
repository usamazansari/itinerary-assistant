import { Action } from '@ngrx/store';
import { CORE_ACTIONS } from '../ia-type/ia-core.type';

export class IaCoreAction implements Action {
  readonly type = CORE_ACTIONS.FOO;
  constructor(public payload: { id: string }) { }
}

export class IaCoreActionSuccess implements Action {
  readonly type = CORE_ACTIONS.FOO_SUCCESS;
  constructor(public payload: { id: string }) { }
}

export class IaCoreActionFail implements Action {
  readonly type = CORE_ACTIONS.FOO_FAIL;
  constructor(public payload: Error) { }
}

export type CORE_ACTIONS =
  | IaCoreAction
  | IaCoreActionSuccess
  | IaCoreActionFail;
