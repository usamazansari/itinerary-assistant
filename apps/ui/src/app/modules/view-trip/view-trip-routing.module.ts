import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RouteConstants as ViewTripRoutes } from './view-trip.routes';

import * as Components from './components';

// TODO: Implement routing for View Trip module
const routes: Routes = [
  {
    path: ViewTripRoutes.Empty,
    component: Components.AllTripsContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewTripRoutingModule {}
