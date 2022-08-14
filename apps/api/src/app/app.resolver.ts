import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';

import { Address as AddressEntity, Person as Entity } from './imports/entities';
import { Address, Person } from './imports/models';
import {
  EramAddresses,
  EramPerson,
  UsamaAddresses,
  UsamaPerson
} from './imports/seed';

const people: Person[] = [UsamaPerson, EramPerson];
const addresses: Address[] = [...UsamaAddresses, ...EramAddresses];

@Resolver(() => Entity)
export class AppResolver {
  @Query(() => Entity)
  gqlSanity() {
    return Math.random() > 0.5 ? people[0] : people[1];
  }

  @ResolveField(() => [AddressEntity], { name: 'addresses' })
  getAddress(@Parent() { id }: Entity) {
    return addresses.filter(address => new RegExp(id).test(address.id));
  }
}
