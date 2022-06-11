import { Injectable } from '@nestjs/common';

import {
  Address,
  Location,
  Neo4jNode
} from '../../imports/models';
import { Neo4jNodeMapperService } from '../../imports/services';

import { AddressRepository } from '../../repositories';

@Injectable()
export class AddressService {
  constructor(
    private _repository: AddressRepository,
    private _mapNode: Neo4jNodeMapperService
  ) { }

  private extractLocation(result: { location: Neo4jNode<Location> }[]): Location[] {
    return result.map(({ location }) => location).map(this._mapNode.toLocation);
  }

  async getLocation(address: Address): Promise<Location> {
    const result = await this._repository.getLocation(address);
    return (
      this.extractLocation(
        (<unknown>result) as { location: Neo4jNode<Location> }[]
      ).at(0) ?? new Location({ id: '' })
    );
  }
}
