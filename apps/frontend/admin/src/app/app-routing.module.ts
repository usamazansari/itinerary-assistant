import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

const AppRoutes: Routes = [
  { path: '', redirectTo: 'nx-welcome', pathMatch: 'full' },
  { path: 'nx-welcome', component: NxWelcomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(AppRoutes, { initialNavigation: 'enabledBlocking' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
