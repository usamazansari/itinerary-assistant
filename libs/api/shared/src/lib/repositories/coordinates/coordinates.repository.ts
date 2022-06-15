import { Injectable } from '@nestjs/common';
import { node, relation } from 'cypher-query-builder';

import { REPOSITORY_CONSTANTS } from '../../imports/constants';
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
      .match([
        node(
          REPOSITORY_CONSTANTS.Variables.Coordinates,
          REPOSITORY_CONSTANTS.Labels.Coordinates,
          { id }
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

  async createCoordinates(id = '', coordinates: CoordinatesDTO) {
    const create = this._helper.generateCreateObject({ id, coordinates });
    const query = this._query
      .queryBuilder()
      .create([
        node(
          REPOSITORY_CONSTANTS.Variables.Coordinates,
          REPOSITORY_CONSTANTS.Labels.Coordinates,
          {
            ...create
          }
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

  async updateCoordinates(id = '', coordinates: CoordinatesDTO) {
    const update = this._helper.generateUpdateObject(coordinates);
    const query = this._query
      .queryBuilder()
      .match([
        node(
          REPOSITORY_CONSTANTS.Variables.Coordinates,
          REPOSITORY_CONSTANTS.Labels.Coordinates,
          { id }
        )
      ])
      .set({ values: { ...update } })
      .with({
        [`${REPOSITORY_CONSTANTS.Variables.Coordinates}`]:
          REPOSITORY_CONSTANTS.Variables.Output
      })
      .return([REPOSITORY_CONSTANTS.Variables.Output]);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async deleteCoordinates(id = '') {
    const query = this._query
      .queryBuilder()
      .match([
        node(
          REPOSITORY_CONSTANTS.Variables.Coordinates,
          REPOSITORY_CONSTANTS.Labels.Coordinates,
          { id }
        )
      ])
      .detachDelete([REPOSITORY_CONSTANTS.Variables.Coordinates]);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async associateCoordinatesWithLocation(coordinatesId = '', locationId = '') {
    const query = this._query
      .queryBuilder()
      .match([
        node(
          REPOSITORY_CONSTANTS.Variables.Coordinates,
          REPOSITORY_CONSTANTS.Labels.Coordinates,
          {
            id: coordinatesId
          }
        )
      ])
      .with([REPOSITORY_CONSTANTS.Variables.Coordinates])
      .match([
        node(
          REPOSITORY_CONSTANTS.Variables.Location,
          REPOSITORY_CONSTANTS.Labels.Location,
          {
            id: locationId
          }
        )
      ])
      .with([
        REPOSITORY_CONSTANTS.Variables.Coordinates,
        REPOSITORY_CONSTANTS.Variables.Location
      ])
      .create([
        node(REPOSITORY_CONSTANTS.Variables.Coordinates),
        relation(
          REPOSITORY_CONSTANTS.RelationshipDirection.OUT,
          REPOSITORY_CONSTANTS.Relationships.Resident,
          REPOSITORY_CONSTANTS.Labels.CoordinatesOf
        ),
        node(REPOSITORY_CONSTANTS.Variables.Location)
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

  async checkCoordinatesOfRelationship(coordinatesId = '', locationId = '') {
    const query = this._query
      .queryBuilder()
      .match([
        node(
          REPOSITORY_CONSTANTS.Variables.Coordinates,
          REPOSITORY_CONSTANTS.Labels.Coordinates,
          {
            id: coordinatesId
          }
        ),
        relation(
          REPOSITORY_CONSTANTS.RelationshipDirection.OUT,
          REPOSITORY_CONSTANTS.Relationships.Coordinates,
          REPOSITORY_CONSTANTS.Labels.CoordinatesOf
        ),
        node(
          REPOSITORY_CONSTANTS.Variables.Location,
          REPOSITORY_CONSTANTS.Labels.Location,
          {
            id: locationId
          }
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
}
