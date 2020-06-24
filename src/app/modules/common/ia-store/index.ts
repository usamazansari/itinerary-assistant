import * as fromRouter from '@ngrx/router-store';
import { MetaReducer, ActionReducerMap } from '@ngrx/store';


export interface State {
  router: fromRouter.RouterReducerState
}

export const reducers: ActionReducerMap<{}> = {
  router: fromRouter.routerReducer
}

export const metaReducers: MetaReducer<State>[] = [];

type routerStateType = fromRouter.RouterReducerState<fromRouter.SerializedRouterStateSnapshot>
export const routerState = (state: State): routerStateType => state.router;
