import { Parent, ResolveField, Resolver } from '@nestjs/graphql';

import { Address as AddressEntity, Location } from '../../imports/entities';
import { Address as AddressModel } from '../../imports/models';

import { AddressService } from '../../services';

@Resolver(() => AddressEntity)
export class AddressResolver {
  constructor(private _service: AddressService) {}

  @ResolveField(() => Location, { name: 'location' })
  async getLocation(@Parent() address: AddressEntity): Promise<Location> {
    return await this._service.getLocation(new AddressModel({ ...address }));
  }
}
