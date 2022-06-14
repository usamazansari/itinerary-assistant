import { Injectable } from '@nestjs/common';
import { node } from 'cypher-query-builder';

import { CoordinatesDTO } from '../../imports/models';
import { Neo4jQueryRepositoryService } from '../../imports/services';

import { CoordinatesHelper } from '../../helpers';

@Injectable()
export class CoordinatesRepository {
  constructor(
    private _query: Neo4jQueryRepositoryService,
    private _helper: CoordinatesHelper
  ) {}

  async createCoordinates(id = '', coordinates: CoordinatesDTO) {
    const create = this._helper.generateCreateObject({ id, coordinates });
    const query = this._query
      .queryBuilder()
      .create([node('coordinates', 'COORDINATES', { ...create })])
      .return(['coordinates']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async updateCoordinates(id = '', coordinates: CoordinatesDTO) {
    const update = this._helper.generateUpdateObject(coordinates);
    const query = this._query
      .queryBuilder()
      .match([node('coordinates', 'COORDINATES', { id })])
      .set({ values: { ...update } })
      .return(['coordinates']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }
}
