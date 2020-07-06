import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IaAppComponent } from './components/ia-app/ia-app.component';
import { IaHomeContainerComponent } from './components/ia-home/ia-home-container/ia-home-container.component';

const routes: Routes = [
  {
    path: '', component: IaAppComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: IaHomeContainerComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IaCoreRoutingModule { }
