import { Module } from '@nestjs/common';

import { AddressNodeMapper, PersonNodeMapper } from './services';

@Module({
  controllers: [],
  providers: [AddressNodeMapper, PersonNodeMapper],
  exports: []
})
export class PersonModule {}
