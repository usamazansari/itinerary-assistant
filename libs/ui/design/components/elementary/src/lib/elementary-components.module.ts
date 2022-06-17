import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent, LoaderContainerComponent } from './components';

@NgModule({
  declarations: [LoaderComponent, LoaderContainerComponent],
  imports: [CommonModule],
  exports: [LoaderContainerComponent]
})
export class ElementaryComponentsModule {}
