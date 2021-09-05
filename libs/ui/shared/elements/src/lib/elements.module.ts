import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as Components from './components';

@NgModule({
  imports: [CommonModule],
  declarations: [
    Components.InlineLoaderContainerComponent,
    Components.InlineLoaderComponent
  ],
  exports: [
    Components.InlineLoaderContainerComponent
  ]
})
export class ElementsModule { }
