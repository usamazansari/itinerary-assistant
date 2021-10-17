import { Module } from '@nestjs/common';

import { ApiCoreModule } from './imports/modules';

@Module({
	imports: [ApiCoreModule]
})
export class ApiEntityModule { }
