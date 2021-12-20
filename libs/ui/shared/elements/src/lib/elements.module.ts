import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as Libraries from './imports/libraries';

import * as Components from './components';

@NgModule({
  declarations: [
    Components.LoaderContainerComponent,
    Components.LoaderComponent
  ],
  imports: [
    CommonModule,

    Libraries.MaterialModule
  ],
  exports: [
    Components.LoaderContainerComponent
  ]
})
export class ElementsModule { }
