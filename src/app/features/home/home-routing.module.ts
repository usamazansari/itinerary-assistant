import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShellComponent } from './components/shell/shell.component';
import { TemporaryHomeContainerComponent } from './components/temporary-home-container/temporary-home-container.component';

import { HOME_ROUTES } from './home.routes';

const routes: Routes = [
  {
    path: HOME_ROUTES.EMPTY,
    component: ShellComponent,
    children: [
      {
        path: HOME_ROUTES.EMPTY,
        component: TemporaryHomeContainerComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
