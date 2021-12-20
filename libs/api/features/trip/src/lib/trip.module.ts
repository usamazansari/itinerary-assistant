import { Module } from '@nestjs/common';

import * as Libraries from './imports/modules';

import * as Controllers from './controllers';
import * as Services from './services';

import { TripProviders } from './providers';

@Module({
	imports: [Libraries.ApiDatabaseTypeormModule],
	controllers: [
		Controllers.TripController
	],
	providers: [
		...TripProviders,
		Services.TripService
	]
})
export class TripModule { }
