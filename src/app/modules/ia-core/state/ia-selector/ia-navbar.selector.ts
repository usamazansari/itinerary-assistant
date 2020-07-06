import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromReducer from '@ia-core/state/ia-reducer/ia-navbar.reducer';
import * as fromStore from '@ia-core/state';

const selectFeature = createFeatureSelector(fromStore.FEATURE_NAME);

export const selectNavbar = createSelector(
  selectFeature,
  (state: fromStore.State) => fromReducer.IA_ENTITY_SELECTOR(state.navbar)
);
