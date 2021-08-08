import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewTripRoutingModule } from './view-trip-routing.module';

import * as Components from './components';

@NgModule({
  declarations: [
    Components.AllTripsContainerComponent,
    Components.AllTripsComponent
  ],
  imports: [CommonModule, ViewTripRoutingModule]
})
export class ViewTripModule {}
