import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LumberjackModule } from '@ngworker/lumberjack';
import { LumberjackConsoleDriverModule } from '@ngworker/lumberjack/console-driver';

import { LayoutModule as LayoutModuleLibrary } from '@itinerary-assistant/ui/layout';
import { CoreModule as CoreModuleLibrary } from '@itinerary-assistant/ui/core';
import { IconModule as IconModuleLibrary } from '@itinerary-assistant/ui/icon';
import { MaterialModule as MaterialModuleLibrary } from '@itinerary-assistant/ui/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IconModule } from './modules';

import { HomeContainerComponent } from './components/home/home-container/home-container.component';
import { HomeComponent } from './components/home/home-container/home/home.component';

@NgModule({
  declarations: [AppComponent, HomeContainerComponent, HomeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    LumberjackModule.forRoot(),
    LumberjackConsoleDriverModule.forRoot(),

    LayoutModuleLibrary,
    MaterialModuleLibrary,
    CoreModuleLibrary,
    IconModuleLibrary,

    IconModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
