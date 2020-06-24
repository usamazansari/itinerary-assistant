
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as actions from '../ia-actions/ia-core.action';

export interface State extends EntityState<{}> { }
const adapter: EntityAdapter<{}> = createEntityAdapter()

export const INITIAL_STATE: EntityState<{}> = adapter.getInitialState<{}>({});

export function reducer(state = INITIAL_STATE, action: actions.CORE_ACTIONS) {
  switch (action.type) {
    case actions.ACTION_TYPES.CORE_ACTION_SUCCESS:
    case actions.ACTION_TYPES.CORE_ACTION_FAIL:
    default:
      return state
  }
}

const { selectAll } = adapter.getSelectors();
export const CORE_ADAPTER_SELECTOR = selectAll;
