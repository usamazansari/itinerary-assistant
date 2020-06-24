import { Routes, RouterModule } from '@angular/router';
import { IaHomeComponent } from './components/ia-home/ia-home.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: IaHomeComponent, pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IaCoreRoutingModule { }
