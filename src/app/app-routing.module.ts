import { isDevMode, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';

const routes: Routes = [
  {
    path: APP_ROUTES.EMPTY,
    loadChildren: () => import('./features/home/home.module').then(module => module.HomeModule)
  },
  {
    path: APP_ROUTES.TRIP,
    loadChildren: () => import('./features/trip/trip.module').then(module => module.TripModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      // enableTracing: isDevMode()
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
