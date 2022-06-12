import { Injectable } from '@nestjs/common';
import { node, relation } from 'cypher-query-builder';

import { Address } from '../../imports/models';
import { Neo4jQueryRepositoryService } from '../../imports/services';

@Injectable()
export class AddressRepository {
  constructor(private _query: Neo4jQueryRepositoryService) {}

  async getLocation(address = new Address({ id: '' })) {
    const clone = address.filterForInput();
    const query = this._query
      .queryBuilder()
      .match([
        node('address', 'ADDRESS', { ...clone }),
        relation('in', 'locationRelationship', 'LOCATION_OF'),
        node('location', 'LOCATION')
      ])
      .return(['location']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }
}
