import { isDevMode, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import type { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@itinerary-assistant/home').then((module) => module.HomeModule)
  }
];

const imports = [
  RouterModule.forRoot(routes, {
    enableTracing: isDevMode(),
    initialNavigation: 'enabledBlocking'
  })
];

const exports = [RouterModule];

@NgModule({
  imports: [...imports],
  exports: [...exports]
})
export class AppRoutingModule {}
