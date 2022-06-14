import { Injectable } from '@nestjs/common';
import { node, relation } from 'cypher-query-builder';

import { CoordinatesDTO } from '../../imports/models';
import { Neo4jQueryRepositoryService } from '../../imports/services';

import { CoordinatesHelper } from '../../helpers';

@Injectable()
export class CoordinatesRepository {
  constructor(
    private _query: Neo4jQueryRepositoryService,
    private _helper: CoordinatesHelper
  ) {}

  async getCoordinates(id = '') {
    const query = this._query
      .queryBuilder()
      .match([node('coordinates', 'COORDINATES', { id })])
      .return(['coordinates']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

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

  async deleteCoordinates(id = '') {
    const query = this._query
      .queryBuilder()
      .match([node('coordinates', 'COORDINATES', { id })])
      .delete(['coordinates']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async associateCoordinatesWithLocation(coordinatesId = '', locationId = '') {
    const query = this._query
      .queryBuilder()
      .match([node('coordinates', 'COORDINATES', { id: coordinatesId })])
      .with(['coordinates'])
      .match([node('location', 'LOCATION', { id: locationId })])
      .with(['coordinates', 'location'])
      .create([
        node('coordinates'),
        relation('out', 'residentRelationship', 'COORDINATES_OF'),
        node('location')
      ])
      .return(['coordinates']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async checkCoordinatesOfRelationship(coordinatesId = '', locationId = '') {
    const query = this._query
      .queryBuilder()
      .match([
        node('coordinates', 'COORDINATES', { id: coordinatesId }),
        relation('out', 'coordinatesRelationship', 'COORDINATES_OF'),
        node('location', 'LOCATION', { id: locationId })
      ])
      .return(['coordinates']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }
}
