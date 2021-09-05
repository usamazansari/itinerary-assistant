import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as Components from './components';

@NgModule({
  imports: [CommonModule],
  declarations: [
    Components.LoaderContainerComponent,
    Components.LoaderComponent
  ],
  exports: [
    Components.LoaderContainerComponent
  ]
})
export class ElementsModule { }
