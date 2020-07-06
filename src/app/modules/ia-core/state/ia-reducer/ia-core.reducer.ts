import { EntityState, createEntityAdapter } from '@ngrx/entity';

// import * as fromActions from '../ia-action/ia-core.action';
// import { CORE_ACTIONS } from '../ia-type/ia-core.type';

export interface State extends EntityState<{}> { }

const adapter = createEntityAdapter<{}>();
const INITIAL_STATE = adapter.getInitialState();

// export function reducer(
//   state: State = INITIAL_STATE,
//   action: fromActions.CORE_ACTIONS
// ) {
//   switch (action.type) {
//     case CORE_ACTIONS.FOO_SUCCESS:
//       adapter.addOne(action.payload as { id: string }, state)
//     case CORE_ACTIONS.FOO_FAIL:
//     default:
//       return state;
//   }
// }

export function reducer(state: State) {
  return state;
}

export const {
  selectEntities,
  selectAll
} = adapter.getSelectors();

export const IA_ENTITY_SELECTOR = selectEntities;
export const IA_SELECTOR = selectAll;
