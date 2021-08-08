import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import * as Components from './components';

// TODO: Implement routing for View Trip module
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewTripRoutingModule {}
