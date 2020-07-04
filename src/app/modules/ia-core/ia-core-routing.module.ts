import { Routes, RouterModule } from '@angular/router';
import { IaAppComponent } from './components/ia-app/ia-app.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: IaAppComponent, pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IaCoreRoutingModule { }
