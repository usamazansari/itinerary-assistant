import { EntityState, createEntityAdapter } from '@ngrx/entity';

import * as fromActions from '@ia-core/state/ia-action/ia-home.action';
import { IaHomeModel } from '@ia-core/models/ia-home.model';
import { HOME_ACTIONS } from '../ia-type/ia-home.type';

export interface State extends EntityState<IaHomeModel> { }

const adapter = createEntityAdapter<IaHomeModel>();
const INITIAL_STATE: State = adapter.getInitialState();

export function reducer(
  state: State = INITIAL_STATE,
  action: fromActions.HOME_ACTION_TYPES
): State {
  switch (action.type) {
    case HOME_ACTIONS.LOAD_SUCCESS:
      return adapter.addOne(action.payload as IaHomeModel, state);
    case HOME_ACTIONS.LOAD_FAIL:
    default:
      return state;
  }
}

const {
  selectEntities,
  selectAll
} = adapter.getSelectors();

export const IA_ENTITY_SELECTOR = selectEntities;
export const IA_ALL_SELECTOR = selectAll;
