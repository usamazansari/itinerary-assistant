import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TRIP_ROUTES } from './trip.routes';

import { IaTripShellComponent } from './components/shell/ia-trip-shell/ia-trip-shell.component';
import { IaTripCreateContainerComponent } from './components/create/ia-trip-create-container/ia-trip-create-container.component';

import { TripOverviewListContainerComponent } from './components/trip-list/trip-overview-list-container/trip-overview-list-container.component';

const routes: Routes = [
  {
    path: TRIP_ROUTES.EMPTY,
    component: IaTripShellComponent,
    children: [
      {
        path: TRIP_ROUTES.VIEW_TRIP,
        component: TripOverviewListContainerComponent
      },
      {
        path: TRIP_ROUTES.CREATE_TRIP,
        component: IaTripCreateContainerComponent
      },
      {
        path: TRIP_ROUTES.EMPTY,
        redirectTo: TRIP_ROUTES.VIEW_TRIP
      }
    ]
  }
];

/**
 * Routing for `trip` module
 *
 * @export
 * @class TripRoutingModule
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TripRoutingModule { }
