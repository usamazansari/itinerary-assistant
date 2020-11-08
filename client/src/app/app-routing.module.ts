import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { environment } from '@environments/environment'

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@core/core.module').then((_ => _.AppCoreModule))
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: !environment.production
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
