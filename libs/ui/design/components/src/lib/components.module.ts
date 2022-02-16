import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './imports/libraries';

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
  imports: [CommonModule, MaterialModule],
  exports: [ButtonContainerComponent, LoaderContainerComponent],
  providers: [ClipboardService, SnackbarService]
})
export class ComponentsModule {}
