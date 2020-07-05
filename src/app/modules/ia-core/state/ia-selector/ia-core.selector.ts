
import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromReducer from '../ia-reducer/ia-core.reducer';
import * as fromStore from '..';

const selectFeature = createFeatureSelector<fromReducer.State>(fromStore.FEATURE_NAME);

export const selectCore = (state: fromStore.State) => createSelector(
  selectFeature,
  // (state: fromStore.State) => state.core
  // fromReducer.selectEntities(state)
  null
);
