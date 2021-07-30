import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { LayoutModule } from '@itinerary-assistant/ui/layout';
import { CoreModule } from '@itinerary-assistant/ui/core';
import { MaterialModule } from '@itinerary-assistant/ui/material';

import { HomeContainerComponent } from './components/home/home-container/home-container.component';
import { HomeComponent } from './components/home/home-container/home/home.component';

@NgModule({
  declarations: [AppComponent, HomeContainerComponent, HomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
    BrowserAnimationsModule,

    LayoutModule,

    CoreModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
