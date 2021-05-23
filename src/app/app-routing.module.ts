import { isDevMode, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@ia-core/core.module').then((_ => _.IaCoreModule))
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // enableTracing: isDevMode()
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
