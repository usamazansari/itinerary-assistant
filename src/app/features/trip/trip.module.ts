import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TripRoutingModule } from './trip-routing.module';
import { IaTripViewContainerComponent } from './components/view/ia-trip-view-container/ia-trip-view-container.component';
import { IaTripViewComponent } from './components/view/ia-trip-view-container/ia-trip-view/ia-trip-view.component';
import { IaTripShellComponent } from './components/shell/ia-trip-shell/ia-trip-shell.component';
import { IaTripCreateContainerComponent } from './components/create/ia-trip-create-container/ia-trip-create-container.component';
import { IaTripCreateComponent } from './components/create/ia-trip-create-container/ia-trip-create/ia-trip-create.component';


@NgModule({
  declarations: [
    IaTripViewContainerComponent,
    IaTripViewComponent,
    IaTripShellComponent,
    IaTripCreateContainerComponent,
    IaTripCreateComponent
  ],
  imports: [
    CommonModule,
    TripRoutingModule
  ]
})
export class TripModule { }
