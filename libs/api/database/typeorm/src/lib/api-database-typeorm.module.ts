import { Inject, Module, OnModuleDestroy } from '@nestjs/common';

import { DATABASE_CONNECTION } from './constants';
import { DATABASE_PROVIDERS } from './providers';

@Module({
	providers: [...DATABASE_PROVIDERS],
	exports: [...DATABASE_PROVIDERS]
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
