import { ActionReducerMap, Action, MetaReducer } from '@ngrx/store';
import * as fromReducer from './ia-reducer/ia-core.reducer';

export interface State {
}

export const reducers: ActionReducerMap<State, Action> = {
}

export const metaReducers: MetaReducer<State>[] = [];

export const FEATURE_NAME = 'core';
