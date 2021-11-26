import { Module } from '@nestjs/common';

import * as Controllers from './controllers';
import * as Services from './services';

@Module({
	controllers: [
		Controllers.TripController
	],
	providers: [
		Services.TripService
	],
	exports: []
})
export class TripModule { }
