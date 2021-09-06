import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as Libraries from './imports/libraries';

import * as Components from './components';

@NgModule({
  declarations: [
    Components.InlineLoaderContainerComponent,
    Components.InlineLoaderComponent
  ],
  imports: [
    CommonModule,

    Libraries.MaterialModule
  ],
  exports: [
    Components.InlineLoaderContainerComponent
  ]
})
export class ElementsModule { }
