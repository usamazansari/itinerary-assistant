import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ButtonComponent,
  ButtonContainerComponent,
  LoaderComponent,
  LoaderContainerComponent
} from './components';
import { ClipboardService, SnackbarService } from './services';

@NgModule({
  declarations: [
    ButtonComponent,
    ButtonContainerComponent,
    LoaderComponent,
    LoaderContainerComponent
  ],
  imports: [CommonModule],
  exports: [ButtonContainerComponent, LoaderContainerComponent],
  providers: [ClipboardService, SnackbarService]
})
export class ElementaryComponentsModule {}
