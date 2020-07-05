import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IaAppComponent } from './components/ia-app/ia-app.component';
import { IaHomeComponent } from './components/ia-home/ia-home.component';

const routes: Routes = [
  {
    path: '', component: IaAppComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: IaHomeComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IaCoreRoutingModule { }
