import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import type { Routes } from '@angular/router';
import { ShellComponent } from './components/shell/shell.component';

const routes: Routes = [
  {
    path: 'home',
    component: ShellComponent
  },
  {
    path: '',
    redirectTo: 'home'
  }
];

const imports = [RouterModule.forChild(routes)];

const exports = [RouterModule];

@NgModule({
  imports: [...imports],
  exports: [...exports]
})
export class HomeRoutingModule {}
