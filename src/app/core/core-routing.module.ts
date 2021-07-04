import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CORE_ROUTES } from './core.routes';

// import { CoreMockTripListContainerComponent } from './components/mock/ia-core-mock-trip-list-container/ia-core-mock-trip-list-container.component';

const routes: Routes = [
  // {
  // path: IA_CORE_ROUTES.EMPTY,
  // component: ShellComponent,
  // children: [
  // {
  //   path: CORE_ROUTES.EMPTY,
  //   loadChildren: () => import('../features/home/home.module').then(module => module.HomeModule)
  // },
  // {
  //   path: IA_CORE_ROUTES.MOCK,
  //   component: CoreMockTripListContainerComponent
  // },
  {
    path: CORE_ROUTES.TRIP,
    loadChildren: () => import('../features/trip/trip.module').then(module => module.TripModule)
  }
  // ]
  // }
];

/**
 * @edprecated Core Module shall not have routing
 *
 * @export
 * @class CoreRoutingModule
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
