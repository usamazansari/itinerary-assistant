// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { isDevMode, NgModule } from '@angular/core';
import type { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { RouteConstants as AppRoutes } from './app.routes';

// TODO: Use Routing as below

// / - business page
// /app - trip application homepage
// /app/trips - trip list
// /app/trips/goa/day/place/stay/ - respective components
// /app/trips/create - create trip like :28

// / - home page
// /trip - create or view

// /trip/create-trip - create trip overview - start date - start city - destination city - cities to visit before return - return date - overall expenses
// /trip/create-trip/day1 - enter day overview - travelling/stay - places to visit
// /trip/create-trip/day1/place1 - day overview collapses in a non editable panel and number of places entered in the day dynamically create forms for each place detail

// /trip/view-trip - enlist all the trips
// /trip/view-trip/goa - overview of goa trip
// /trip/view-trip/goa/full - full trip with all minor details in one page, preferably printer friendly
// /trip/view-trip/goa/day1 - overview of day 1 as entered in create-trip
// /trip/view-trip/goa/day2/place2 - overview of place 1 as entered in create-trip

const routes: Routes = [
  {
    path: AppRoutes.Empty,
    children: [
      {
        path: AppRoutes.Person,
        loadChildren: () =>
          import('@itinerary-assistant/ui/features/person').then(
            ({ PersonModule: m }) => m
          )
      },
      // {
      //   path: AppRoutes.Trip,
      //   loadChildren: () =>
      //     import('@itinerary-assistant/ui/features/trip').then(
      //       m => m.TripModule
      //     )
      // },
      {
        path: AppRoutes.Empty,
        redirectTo: AppRoutes.Person,
        pathMatch: 'full'
      }
    ]
  },
  {
    path: AppRoutes.Wildcard,
    redirectTo: AppRoutes.Empty
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: isDevMode() && false,
      initialNavigation: 'enabledBlocking'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
