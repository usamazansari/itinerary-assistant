import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IA_CORE_ROUTES } from './core.routes';

import { ShellComponent } from './components/shell/shell.component';
import { HomeContainerComponent } from './components/home/ia-core-home-container/home-container.component';
import { CoreMockTripListContainerComponent } from './components/mock/ia-core-mock-trip-list-container/ia-core-mock-trip-list-container.component';

const routes: Routes = [
  {
    path: IA_CORE_ROUTES.EMPTY,
    component: ShellComponent,
    children: [
      {
        path: IA_CORE_ROUTES.EMPTY,
        component: HomeContainerComponent
      },
      {
        path: IA_CORE_ROUTES.MOCK,
        component: CoreMockTripListContainerComponent
      },
      {
        path: IA_CORE_ROUTES.TRIP,
        loadChildren: () => import('../features/trip/trip.module').then(module => module.TripModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
