import { Module } from '@nestjs/common';

import * as Controllers from './controllers';
import * as Services from './services';

import { TripProviders } from './providers';

@Module({
	controllers: [
		Controllers.TripController
	],
	providers: [
		...TripProviders,
		Services.TripService
	],
	exports: []
})
export class TripModule { }
