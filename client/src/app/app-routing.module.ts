import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('@ia-core/ia-core.module').then((m => m.IaCoreModule))
  // }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
