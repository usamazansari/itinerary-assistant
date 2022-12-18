import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'nx-welcome', pathMatch: 'full' },
  {
    path: 'nx-welcome',
    loadComponent: () =>
      import('./nx-welcome.component').then(({ NxWelcomeComponent: c }) => c)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
