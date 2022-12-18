import { bootstrapApplication } from '@angular/platform-browser';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation
} from '@angular/router';
import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app-routing.module';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(appRoutes, withEnabledBlockingInitialNavigation())]
}).catch(err => console.error(err));
