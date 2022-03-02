import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import type { Routes } from '@angular/router';

import { RouteConstants } from './trip.routes';
import {
  HomeContainerComponent,
  TripListContainerComponent
} from './components';

const routes: Routes = [
  {
    path: RouteConstants.Empty,
    component: HomeContainerComponent
  },
  {
    path: RouteConstants.ViewTrip,
    component: TripListContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TripRoutingModule {}
