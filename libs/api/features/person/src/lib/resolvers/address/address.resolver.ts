import {
  Parent,
  ResolveField,
  Query,
  Resolver,
  Mutation,
  Args
} from '@nestjs/graphql';

import {
  Address as Entity,
  Location,
  Person as PersonEntity
} from '../../imports/entities';
import { Address, Person as PersonModel } from '../../imports/models';

import { AddressInput } from '../../inputs';
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

  @Mutation(() => Entity)
  async createAddress(
    @Args('address', { type: () => AddressInput }) address: Entity
  ): Promise<Address> {
    return await this._service.createAddress(address);
  }

  @Mutation(() => Entity)
  async updateAddress(
    @Args('id', { type: () => String }) id: string,
    @Args('address', { type: () => AddressInput }) address: Entity
  ): Promise<Address> {
    return await this._service.updateAddress(id, address);
  }
}
