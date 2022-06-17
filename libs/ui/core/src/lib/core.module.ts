import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraphQLModule } from './imports/modules';

import { CoreService, EndpointService, RouterService } from './services';

@NgModule({
  imports: [CommonModule, GraphQLModule],
  providers: [CoreService, EndpointService, RouterService],
  exports: [GraphQLModule]
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
