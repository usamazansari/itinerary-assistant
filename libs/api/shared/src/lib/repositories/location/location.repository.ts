import { Injectable } from '@nestjs/common';
import { node, relation } from 'cypher-query-builder';

import { REPOSITORY_CONSTANTS } from '../../imports/constants';
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
      .match([
        node(
          REPOSITORY_CONSTANTS.Variables.Location,
          REPOSITORY_CONSTANTS.Labels.Location,
          { id }
        )
      ])
      .with({
        [`${REPOSITORY_CONSTANTS.Variables.Location}`]:
          REPOSITORY_CONSTANTS.Variables.Output
      })
      .return([REPOSITORY_CONSTANTS.Variables.Output]);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async getCoordinates(id = '') {
    const query = this._query
      .queryBuilder()
      .match([
        node(
          REPOSITORY_CONSTANTS.Variables.Location,
          REPOSITORY_CONSTANTS.Labels.Location,
          { id }
        ),
        relation(
          REPOSITORY_CONSTANTS.RelationshipDirection.IN,
          REPOSITORY_CONSTANTS.Relationships.Coordinates,
          REPOSITORY_CONSTANTS.Labels.CoordinatesOf
        ),
        node(
          REPOSITORY_CONSTANTS.Variables.Coordinates,
          REPOSITORY_CONSTANTS.Labels.Coordinates
        )
      ])
      .with({
        [`${REPOSITORY_CONSTANTS.Variables.Coordinates}`]:
          REPOSITORY_CONSTANTS.Variables.Output
      })
      .return([REPOSITORY_CONSTANTS.Variables.Output]);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async createLocation(id = '', location: LocationDTO) {
    const create = this._helper.generateCreateObject({ id, location });
    const query = this._query
      .queryBuilder()
      .create([
        node(
          REPOSITORY_CONSTANTS.Variables.Location,
          REPOSITORY_CONSTANTS.Labels.Location,
          { ...create }
        )
      ])
      .with({
        [`${REPOSITORY_CONSTANTS.Variables.Location}`]:
          REPOSITORY_CONSTANTS.Variables.Output
      })
      .return([REPOSITORY_CONSTANTS.Variables.Output]);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async updateLocation(id = '', location: LocationDTO) {
    const update = this._helper.generateUpdateObject(location);
    const query = this._query
      .queryBuilder()
      .match([
        node(
          REPOSITORY_CONSTANTS.Variables.Location,
          REPOSITORY_CONSTANTS.Labels.Location,
          { id }
        )
      ])
      .set({ values: { ...update } })
      .with({
        [`${REPOSITORY_CONSTANTS.Variables.Location}`]:
          REPOSITORY_CONSTANTS.Variables.Output
      })
      .return([REPOSITORY_CONSTANTS.Variables.Output]);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async deleteLocation(id = '') {
    const query = this._query
      .queryBuilder()
      .match([
        node(
          REPOSITORY_CONSTANTS.Variables.Location,
          REPOSITORY_CONSTANTS.Labels.Location,
          { id }
        )
      ])
      .detachDelete([REPOSITORY_CONSTANTS.Variables.Location]);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }
}
