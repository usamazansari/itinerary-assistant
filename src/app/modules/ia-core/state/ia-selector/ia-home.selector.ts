import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromReducer from '@ia-core/state/ia-reducer/ia-home.reducer';
import * as fromStore from '@ia-core/state';

const selectFeature = createFeatureSelector(fromStore.FEATURE_NAME);

export const selectHome = createSelector(
  selectFeature,
  (state: fromStore.State) => fromReducer.IA_ENTITY_SELECTOR(state.home)
);
