import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '@core/core.module';

import { TripRoutingModule } from './trip-routing.module';

import { IaTripShellComponent } from './components/shell/ia-trip-shell/ia-trip-shell.component';

import { IaTripCreateContainerComponent } from './components/create/ia-trip-create-container/ia-trip-create-container.component';
import { IaTripCreateComponent } from './components/create/ia-trip-create-container/ia-trip-create/ia-trip-create.component';

import { TripOverviewListContainerComponent } from './components/trip-list/trip-overview-list-container/trip-overview-list-container.component';
import { TripOverviewListComponent } from './components/trip-list/trip-overview-list-container/trip-overview-list/trip-overview-list.component';

import { TripOverviewContainerComponent } from './components/trip-list/trip-overview-container/trip-overview-container.component';
import { TripOverviewComponent } from './components/trip-list/trip-overview-container/trip-overview/trip-overview.component';

const declarations = [
  IaTripShellComponent,

  TripOverviewListContainerComponent,
  TripOverviewListComponent,

  TripOverviewContainerComponent,
  TripOverviewComponent,

  IaTripCreateContainerComponent,
  IaTripCreateComponent
];

const imports = [
  CommonModule,
  CoreModule,
  TripRoutingModule
];

@NgModule({
  declarations: [...declarations],
  imports: [...imports]
})
export class TripModule { }
