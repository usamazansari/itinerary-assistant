import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CORE_ROUTES } from './core.routes';
import { IaCoreShellComponent } from './components/shell/ia-core-shell.component';

const routes: Routes = [
  {
    path: CORE_ROUTES.EMPTY,
    component: IaCoreShellComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppCoreRoutingModule { }
