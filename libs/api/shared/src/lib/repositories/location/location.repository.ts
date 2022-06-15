import { Injectable } from '@nestjs/common';
import { node, relation } from 'cypher-query-builder';

import { LocationDTO } from '../../imports/models';
import { Neo4jQueryRepositoryService } from '../../imports/services';

import { LocationHelper } from '../../helpers';

@Injectable()
export class LocationRepository {
  constructor(
    private _query: Neo4jQueryRepositoryService,
    private _helper: LocationHelper
  ) {}

  async getLocation(id = '') {
    const query = this._query
      .queryBuilder()
      .match([node('location', 'LOCATION', { id })])
      .with({ location: 'output' })
      .return(['output']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async getCoordinates(id = '') {
    const query = this._query
      .queryBuilder()
      .match([
        node('location', 'LOCATION', { id }),
        relation('in', 'coordinatesRelationship', 'COORDINATES_OF'),
        node('coordinates', 'COORDINATES')
      ])
      .with({ coordinates: 'output' })
      .return(['output']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async createLocation(id = '', location: LocationDTO) {
    const create = this._helper.generateCreateObject({ id, location });
    const query = this._query
      .queryBuilder()
      .create([node('location', 'LOCATION', { ...create })])
      .with({ location: 'output' })
      .return(['output']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async updateLocation(id = '', location: LocationDTO) {
    const update = this._helper.generateUpdateObject(location);
    const query = this._query
      .queryBuilder()
      .match([node('location', 'LOCATION', { id })])
      .set({ values: { ...update } })
      .with({ location: 'output' })
      .return(['output']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async deleteLocation(id = '') {
    const query = this._query
      .queryBuilder()
      .match([node('location', 'LOCATION', { id })])
      .detachDelete(['location']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }
}
