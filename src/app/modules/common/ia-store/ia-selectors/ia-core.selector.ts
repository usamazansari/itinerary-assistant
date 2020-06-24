import { createSelector } from '@ngrx/store';

import * as fromReducer from '../ia-reducers/ia-core.reducer'
import { EntityState } from '@ngrx/entity';

export const CORE_SELECTOR = createSelector(
  (state: EntityState<{}>) => state,
  fromReducer.CORE_ADAPTER_SELECTOR
)
