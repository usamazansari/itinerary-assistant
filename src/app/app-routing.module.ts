import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IaHomeComponent } from '@ia-core/components/ia-home/ia-home.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home', loadChildren: () => import('@ia-core/ia-core.module').then((m => m.IaCoreModule)) }
  { path: 'home', component: IaHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
