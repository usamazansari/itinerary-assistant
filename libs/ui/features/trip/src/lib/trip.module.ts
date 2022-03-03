import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripRoutingModule } from './trip-routing.module';

import {
  HomeComponent,
  HomeContainerComponent,
  TripListComponent,
  TripListContainerComponent,
  TripListSkeletonComponent
} from './components';

import { IconModule } from './modules';

@NgModule({
  declarations: [
    HomeComponent,
    HomeContainerComponent,

    TripListComponent,
    TripListContainerComponent,
    TripListSkeletonComponent
  ],
  imports: [CommonModule, TripRoutingModule, IconModule],
  schemas: []
})
export class TripModule {}
