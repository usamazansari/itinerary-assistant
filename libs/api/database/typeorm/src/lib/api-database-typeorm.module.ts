import { Inject, Module, OnModuleDestroy } from '@nestjs/common';

import { DATABASE_CONNECTION } from './constants';
import { DBProviders } from './providers';

@Module({
	providers: [...DBProviders],
	exports: [...DBProviders, DATABASE_CONNECTION]
})
export class ApiDatabaseTypeormModule implements OnModuleDestroy {

	constructor(
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		@Inject(DATABASE_CONNECTION) private readonly dbConnection: any
	) { }

	public onModuleDestroy(): void {
		this.dbConnection.close();
	}
}

// TODO: Usama Ansari - 🗑️ Cleanup required - rename stuff
