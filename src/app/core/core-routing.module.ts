import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CORE_ROUTES } from './core.routes';

import { IaCoreShellComponent } from './components/shell/ia-core-shell.component';
import { IaCoreMockTripListContainerComponent } from './components/mock/ia-core-mock-trip-list-container/ia-core-mock-trip-list-container.component';

const routes: Routes = [
  {
    path: CORE_ROUTES.EMPTY,
    component: IaCoreShellComponent,
    children: [
      {
        path: CORE_ROUTES.MOCK,
        component: IaCoreMockTripListContainerComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppCoreRoutingModule { }
