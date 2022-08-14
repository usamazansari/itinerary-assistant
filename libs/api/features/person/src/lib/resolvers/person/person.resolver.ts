import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';

import { PersonEntity as Entity, AddressEntity } from '../../entities';
import { PersonService } from '../../services';

@Resolver(() => Entity)
export class PersonResolver {
  constructor(private _service: PersonService) {}

  @Query(() => [Entity])
  async getPeople() {
    return await this._service.getPeople();
  }

  // @ResolveField(() => [AddressEntity], { name: 'addresses' })
  // async resolvePersonAddress(@Parent() { id }: Entity) {
  //   return await this._service.getPersonAddress(id);
  // }
}
