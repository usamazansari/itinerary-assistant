import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  CoreService,
  EndpointService,
  RouterService
} from './services';

@NgModule({
  imports: [CommonModule],
  providers: [CoreService, EndpointService, RouterService]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (!!parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}
