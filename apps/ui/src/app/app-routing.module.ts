import { isDevMode, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RouteConstants } from './app.routes';

import { HomeContainerComponent } from './components/home/home-container/home-container.component';

import type { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: RouteConstants.Empty,
    component: HomeContainerComponent,
    pathMatch: 'full'
  }
];

const imports = [
  RouterModule.forRoot(routes, {
    // enableTracing: isDevMode(),
    initialNavigation: 'enabledBlocking'
  })
];

const exports = [RouterModule];

@NgModule({
  imports: [...imports],
  exports: [...exports]
})
export class AppRoutingModule {}
