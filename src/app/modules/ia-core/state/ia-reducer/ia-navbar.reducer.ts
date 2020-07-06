import { EntityState, createEntityAdapter, Update } from '@ngrx/entity';

import { IaNavbarModel } from '@ia-core/models/ia-navbar.model';

import * as fromActions from '@ia-core/state/ia-action/ia-navbar.action';
import { NAVBAR_ACTIONS } from '@ia-core/state/ia-type/ia-navbar.type';

export interface State extends EntityState<IaNavbarModel> { }

const adapter = createEntityAdapter<IaNavbarModel>();

const INITIAL_STATE: EntityState<IaNavbarModel> = adapter.getInitialState({});

export function reducer(
  state: State = INITIAL_STATE,
  action: fromActions.NAVBAR_ACTIONS_TYPES
): State {
  switch (action.type) {
    case NAVBAR_ACTIONS.LOAD_SUCCESS:
      return adapter.addOne(action.payload as IaNavbarModel, state);
    case NAVBAR_ACTIONS.TOGGLE_SUCCESS:
      return adapter.updateOne(action.payload as Update<IaNavbarModel>, state);
    case NAVBAR_ACTIONS.LOAD_FAIL:
    default:
      return state;
  }
}

export const {
  selectEntities,
  selectAll
} = adapter.getSelectors();

export const IA_ENTITY_SELECTOR = selectEntities;
export const IA_SELECTOR = selectAll;
