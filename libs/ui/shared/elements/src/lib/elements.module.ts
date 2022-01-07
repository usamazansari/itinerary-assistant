import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './imports/libraries';

import * as Components from './components';

@NgModule({
  declarations: [
    Components.LoaderContainerComponent,
    Components.LoaderComponent,
    Components.ButtonContainerComponent,
    Components.ButtonComponent
  ],
  imports: [
    CommonModule,

    MaterialModule
  ],
  exports: [
    Components.LoaderContainerComponent
  ]
})
export class ElementsModule { }
