import { Action } from '@ngrx/store';

export const ACTION_TYPES: { [key: string]: string } = {
  CORE_ACTION: '[Core] Action',
  CORE_ACTION_SUCCESS: '[Core] Action Successful',
  CORE_ACTION_FAIL: '[Core] Action Failed'
}

export class IaCoreAction implements Action {
  readonly type: string = ACTION_TYPES.CORE_ACTION;
  constructor(public payload: {}) { }
}

export class IaCoreActionSuccess implements Action {
  readonly type: string = ACTION_TYPES.CORE_ACTION_SUCCESS
  constructor(public payload: {}) { }
}

export class IaCoreActionFail implements Action {
  readonly type: string = ACTION_TYPES.CORE_ACTION_FAIL
  constructor(public payload: {}) { }
}

export type CORE_ACTIONS =
  | IaCoreAction
  | IaCoreActionSuccess
  | IaCoreActionFail;
