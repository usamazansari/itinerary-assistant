import { Injectable } from '@nestjs/common';
import { node, relation } from 'cypher-query-builder';

import { Location } from '../../imports/models';
import { Neo4jQueryRepositoryService } from '../../imports/services';

@Injectable()
export class LocationRepository {
  constructor(private _query: Neo4jQueryRepositoryService) {}

  async getCoordinates(location = new Location({ id: '' })) {
    const clone = location.filterForInput();
    const query = this._query
      .queryBuilder()
      .match([
        node('location', 'LOCATION', { ...clone }),
        relation('in', 'coordinatesRelationship', 'COORDINATES_OF'),
        node('coordinates', 'COORDINATES')
      ])
      .return(['coordinates']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async getTimezone(location = new Location({ id: '' })) {
    const clone = location.filterForInput();
    const query = this._query
      .queryBuilder()
      .match([
        node('location', 'LOCATION', { ...clone }),
        relation('in', 'timezoneRelationship', 'TIMEZONE_OF'),
        node('timezone', 'TIMEZONE')
      ])
      .return(['timezone']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }
}
