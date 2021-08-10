import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as Libraries from './imports/libraries';

import { ViewTripRoutingModule } from './view-trip-routing.module';

import * as Components from './components';

@NgModule({
  declarations: [
    Components.AllTripsContainerComponent,
    Components.AllTripsComponent
  ],
  imports: [CommonModule, ViewTripRoutingModule, Libraries.MaterialModule]
})
export class ViewTripModule {}
