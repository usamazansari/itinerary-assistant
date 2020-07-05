import { ActionReducerMap, Action, MetaReducer } from '@ngrx/store';
import * as fromCore from './ia-reducer/ia-core.reducer';
import * as fromNavbar from './ia-reducer/ia-navbar.reducer';

export interface State {
  core: fromCore.State,
  navbar: fromNavbar.State
}

export const reducers: ActionReducerMap<State, Action> = {
  core: fromCore.reducer,
  navbar: fromNavbar.reducer
}

export const metaReducers: MetaReducer<State>[] = [];

export const FEATURE_NAME = 'app';
