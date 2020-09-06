import * as fromRouter from '@ngrx/router-store'
import { MetaReducer, createFeatureSelector } from '@ngrx/store'

export interface State {
  router: fromRouter.RouterReducerState
}

export const reducers = {
  router: fromRouter.routerReducer
}

export const EFFECTS: [] = []

export const STORE_NAME: string = '[LM Store] LTI MediaLabs Store'

export const metaReducers: MetaReducer<State>[] = []

export const routerState = (state: State): fromRouter.RouterReducerState<fromRouter.SerializedRouterStateSnapshot> => state.router

export const ROUTER_FEATURE = 'router'

export const routerSelector = createFeatureSelector<State, fromRouter.RouterReducerState>(ROUTER_FEATURE)

export const {
  selectCurrentRoute,   // select the current route
  selectQueryParams,    // select the current route query params
  selectQueryParam,     // factory function to select a query param
  selectRouteParams,    // select the current route params
  selectRouteParam,     // factory function to select a route param
  selectRouteData,      // select the current route data
  selectUrl,            // select the current url
} = fromRouter.getSelectors(routerSelector)
