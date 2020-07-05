import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import * as fromActions from '@ia-core/state/ia-action/ia-navbar.action';

import { NAVBAR_ACTIONS } from '@ia-core/state/ia-type/ia-navbar.type';
import { IaNavbarModel } from '@ia-core/models/ia-navbar.model';

@Injectable()
export class IaNavbarEffects {
  constructor(private _actions$: Actions) { }

  @Effect()
  eNavbarLoad = this._actions$.pipe(
    ofType<fromActions.NAVBAR_ACTIONS_TYPES>(NAVBAR_ACTIONS.LOAD),
    map((action: fromActions.IaNavbarAction) => {
      let navbarAssets: IaNavbarModel = {
        id: action.payload.id,
        items: [
          {
            icon: {
              style: 'fas',
              name: 'columns'
            },
            label: 'Dashboard',
            children: []
          },
          {
            icon: {
              style: 'fas',
              name: 'passport'
            },
            label: 'Trips',
            children: []
          },
          {
            icon: {
              style: 'fas',
              name: 'chart-line'
            },
            label: 'Travel Trend',
            children: []
          },
          {
            icon: {
              style: 'fas',
              name: 'lightbulb'
            },
            label: 'Tips and Tricks',
            children: []
          },
          {
            icon: {
              style: 'fas',
              name: 'compass'
            },
            label: 'Explore',
            children: []
          },
          {
            icon: {
              style: 'fas',
              name: 'user'
            },
            label: 'Profile',
            children: []
          }
        ]
      };
      return new fromActions.IaNavbarActionSuccess(navbarAssets);
    }),
    catchError((err: Error) => of(new fromActions.IaNavbarActionFail(err)))
  )
}
