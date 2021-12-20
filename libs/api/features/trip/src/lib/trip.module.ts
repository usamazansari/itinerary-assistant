import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';

// import * as Entities from './imports/entities';
import * as Libraries from './imports/modules';

import * as Controllers from './controllers';
import * as Services from './services';

import { TripProviders } from './providers';

@Module({
	// imports: [TypeOrmModule.forFeature([Entities.TripEntity])],
	imports: [Libraries.ApiDatabaseTypeormModule],
	controllers: [
		Controllers.TripController
	],
	providers: [
		...TripProviders,
		Services.TripService
	] // ,
	// exports: [TypeOrmModule]
})
export class TripModule { }

// TODO: Usama Ansari - 🗑️ Cleanup required
