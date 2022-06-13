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
  Location as LocationEntity,
  Person as PersonEntity
} from '../../imports/entities';
import {
  Address,
  Location as LocationModel,
  Person as PersonModel
} from '../../imports/models';

import { AddressInput } from '../../inputs';
import { AddressService } from '../../services';

@Resolver(() => Entity)
export class AddressResolver {
  constructor(private _service: AddressService) {}

  @Query(() => Entity)
  async getAddress(@Parent() { id }: Entity): Promise<Address> {
    return await this._service.getAddress(id);
  }

  @ResolveField(() => LocationEntity, { name: 'location' })
  async getLocation(@Parent() { id }: Entity): Promise<LocationModel> {
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
  async associateAddressWithPerson(
    @Args('addressId', { type: () => String }) addressId: string,
    @Args('personId', { type: () => String }) personId: string
  ): Promise<Address> {
    return await this._service.associateAddressWithPerson(addressId, personId);
  }

  @Mutation(() => Entity)
  async updateAddress(
    @Args('id', { type: () => String }) id: string,
    @Args('address', { type: () => AddressInput }) address: Entity
  ): Promise<Address> {
    return await this._service.updateAddress(id, address);
  }

  @Mutation(() => Entity)
  async deleteAddress(
    @Args('id', { type: () => String }) id: string
  ): Promise<Address> {
    return await this._service.deleteAddress(id);
  }
}
