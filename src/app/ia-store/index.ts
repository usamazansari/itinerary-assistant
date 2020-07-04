import * as fromRouter from '@ngrx/router-store';
import { ActionReducerMap, createFeatureSelector, MetaReducer, Action } from '@ngrx/store';

export interface State {
  router: fromRouter.RouterReducerState<any>
}

export const reducers: ActionReducerMap<State> = {
  router: fromRouter.routerReducer
}

export const ROUTER_STORE_STRING = 'router';

export const routerSelector = createFeatureSelector<State, fromRouter.RouterReducerState<any>>(ROUTER_STORE_STRING);

export const metaReducers: MetaReducer<State, Action>[] = [];

export const {
  selectCurrentRoute,   // select the current route
  selectQueryParams,    // select the current route query params
  selectQueryParam,     // factory function to select a query param
  selectRouteParams,    // select the current route params
  selectRouteParam,     // factory function to select a route param
  selectRouteData,      // select the current route data
  selectUrl,            // select the current url
} = fromRouter.getSelectors(routerSelector);
