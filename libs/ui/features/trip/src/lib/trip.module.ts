import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripRoutingModule } from './trip-routing.module';

import * as Libraries from './imports/libraries';

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

    Libraries.MaterialModule,
    Libraries.IconModule
  ]
})
export class TripModule { }
