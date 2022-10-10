import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver
} from '@nestjs/graphql';

import { AddressEntity as Entity, PersonEntity } from '../../entities';
import { AddressInput } from '../../inputs';
import { AddressService } from '../../services';

@Resolver(() => Entity)
export class AddressResolver {
  constructor(private _service: AddressService) {}

  @Query(() => [Entity], {
    defaultValue: [],
    description: 'Fetch all the nodes labelled `ADDRESS` in the database'
  })
  async getAddresses() {
    return await this._service.getAddresses();
  }

  @Query(() => Entity, {
    description: 'Get `ADDRESS` having `{ id: id }`',
    nullable: true
  })
  async getAddress(@Args('id', { type: () => String }) id: string) {
    return await this._service.getAddress(id);
  }

  @ResolveField(() => [PersonEntity], {
    defaultValue: [],
    description: 'Get the `PERSON`s residing at the concerning `ADDRESS`',
    name: 'residents',
    nullable: true
  })
  async resolveResidents(@Parent() { id }: Entity) {
    return await this._service.getResidents(id);
  }

  @Mutation(() => Entity, {
    description:
      'Create a new node having label `ADDRESS` with the input provided'
  })
  async createAddress(
    @Args('address', { type: () => AddressInput }) address: Entity
  ) {
    return await this._service.createAddress(address);
  }

  @Mutation(() => Entity, {
    description:
      'Update the `ADDRESS` having `{ id: id }` with the input provided'
  })
  async updateAddress(
    @Args('id', { type: () => String }) id: string,
    @Args('address', { type: () => AddressInput }) address: Entity
  ) {
    return await this._service.updateAddress(id, address);
  }

  @Mutation(() => Entity, {
    description: 'Delete the `ADDRESS` having `{ id: id }`'
  })
  async deleteAddress(@Args('id', { type: () => String }) id: string) {
    return await this._service.deleteAddress(id);
  }

  @Mutation(() => Entity, {
    description:
      'Link `ADDRESS` having `{ id: addressId }` to the `PERSON` having `{ id: personId }`, if not linked already'
  })
  async associateAddressWithPerson(
    @Args('addressId', { type: () => String }) addressId: string,
    @Args('personId', { type: () => String }) personId: string
  ) {
    return await this._service.associateAddressWithPerson({
      addressId,
      personId
    });
  }

  // TODO: Usama Ansari - Implement this method
  // async disassociateAddressWithPerson() {
  //   return this._service.disassociateAddressWithPerson()
  // }
}
