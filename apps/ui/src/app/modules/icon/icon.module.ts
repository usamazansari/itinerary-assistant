import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

import { IconModule as IconLibraryModule } from '@itinerary-assistant/ui/icon';
import { UiIcons } from './ui-icons';

@NgModule({
  declarations: [],
  imports: [CommonModule]
})
export class IconModule extends IconLibraryModule {
  constructor(lib: FaIconLibrary) {
    super(lib);
    lib.addIcons(...UiIcons);
  }
}
