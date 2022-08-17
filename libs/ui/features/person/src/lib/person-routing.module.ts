// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import type { Routes } from '@angular/router';

import { RouteConstants as PersonRoutes } from './person.routes';

const routes: Routes = [
  {
    path: PersonRoutes.Empty,
    children: [
      {
        path: PersonRoutes.Empty,
        loadChildren: () =>
          import('./components/dashboard/dashboard.module').then(
            ({ DashboardModule: m }) => m
          )
      }
    ]
  },
  {
    path: PersonRoutes.Wildcard,
    redirectTo: PersonRoutes.Empty
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
