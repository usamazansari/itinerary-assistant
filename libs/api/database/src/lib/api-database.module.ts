import { Inject, Module, OnModuleDestroy } from '@nestjs/common';

import { DB_CONNECTION_TOKEN } from './constants';
import { DB_PROVIDERS } from './providers';

@Module({
	providers: [...DB_PROVIDERS],
	exports: [...DB_PROVIDERS]
})
export class ApiDatabaseModule implements OnModuleDestroy {

	constructor(
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		@Inject(DB_CONNECTION_TOKEN) private readonly dbConnection: any
	) { }

	public onModuleDestroy(): void {
		this.dbConnection.close();
	}
}
