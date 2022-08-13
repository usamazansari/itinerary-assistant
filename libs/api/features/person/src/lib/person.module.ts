import { Module } from '@nestjs/common';

import { CoreService } from './services';

@Module({
  providers: [CoreService]
})
export class PersonModule {}
