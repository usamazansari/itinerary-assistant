import { Parent, ResolveField, Query, Resolver } from '@nestjs/graphql';

import {
  Address as Entity,
  Location,
  Person as PersonEntity
} from '../../imports/entities';
import { Address, Person as PersonModel } from '../../imports/models';

import { AddressService } from '../../services';

@Resolver(() => Entity)
export class AddressResolver {
  constructor(private _service: AddressService) {}

  @Query(() => Entity)
  async getAddress(@Parent() { id }: Entity): Promise<Address> {
    return await this._service.getAddress(id);
  }

  @ResolveField(() => Location, { name: 'location' })
  async getLocation(@Parent() { id }: Entity): Promise<Location> {
    return await this._service.getLocation(id);
  }

  @ResolveField(() => [PersonEntity], { name: 'residents' })
  async getResidents(@Parent() { id }: Entity): Promise<PersonModel[]> {
    return await this._service.getResidents(id);
  }
}
