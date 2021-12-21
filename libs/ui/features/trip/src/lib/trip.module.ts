import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripRoutingModule } from './trip-routing.module';

import {
  IconModule,
  MaterialModule
} from './imports/libraries';

import * as Components from './components';

@NgModule({
  declarations: [
    Components.HomeContainerComponent,
    Components.HomeComponent,

    Components.TripListContainerComponent,
    Components.TripListComponent,
    Components.TripListSkeletonComponent
  ],
  imports: [
    CommonModule,

    TripRoutingModule,

    MaterialModule,
    IconModule
  ]
})
export class TripModule { }
