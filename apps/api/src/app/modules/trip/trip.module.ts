import { Module } from '@nestjs/common';

import { ApiCoreModule } from './imports/modules';

import * as Controllers from './controllers';
import * as Services from './services';
import * as Providers from './providers';

@Module({
  controllers: [Controllers.TripController],
  imports: [
    ApiCoreModule
  ],
  providers: [
    Services.TripService,
    ...Providers.TripProviders
  ]
})
export class TripModule { }
