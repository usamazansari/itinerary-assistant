import { Injectable } from '@nestjs/common';
import { node } from 'cypher-query-builder';

import { REPOSITORY_CONSTANTS } from '../../imports/constants';
import { Neo4jOutput } from '../../imports/models';
import { QueryRepositoryService } from '../../imports/services';

import { Trip, TripDTO } from '../../models';

@Injectable()
export class TripRepository {
  constructor(private _query: QueryRepositoryService) {}

  async getTrip(id = '') {
    const query = this._query
      .queryBuilder()
      .match([
        node(
          REPOSITORY_CONSTANTS.VARIABLE.Trip,
          REPOSITORY_CONSTANTS.LABEL.Trip,
          { id }
        )
      ])
      .with({
        [`${REPOSITORY_CONSTANTS.VARIABLE.Trip}`]:
          REPOSITORY_CONSTANTS.VARIABLE.Output
      })
      .return([REPOSITORY_CONSTANTS.VARIABLE.Output]);

    const result = await query.run();
    return result as Neo4jOutput<Trip>;
  }

  async createTrip(dto = new TripDTO({})) {
    const query = this._query
      .queryBuilder()
      .create([
        node(
          REPOSITORY_CONSTANTS.VARIABLE.Trip,
          REPOSITORY_CONSTANTS.LABEL.Trip,
          { ...dto }
        )
      ])
      .with({
        [`${REPOSITORY_CONSTANTS.VARIABLE.Trip}`]:
          REPOSITORY_CONSTANTS.VARIABLE.Output
      })
      .return([REPOSITORY_CONSTANTS.VARIABLE.Output]);

    const result = await query.run();
    return result as Neo4jOutput<Trip>;
  }

  async updateTrip(id = '', update = new TripDTO({})) {
    const query = this._query
      .queryBuilder()
      .match([
        node(
          REPOSITORY_CONSTANTS.VARIABLE.Trip,
          REPOSITORY_CONSTANTS.LABEL.Trip,
          { id }
        )
      ])
      .set({ values: { ...update } })
      .with({
        [`${REPOSITORY_CONSTANTS.VARIABLE.Trip}`]:
          REPOSITORY_CONSTANTS.VARIABLE.Output
      })
      .return([REPOSITORY_CONSTANTS.VARIABLE.Output]);

    const result = await query.run();
    return result as Neo4jOutput<Trip>;
  }

  async deleteTrip(id = '') {
    const query = this._query
      .queryBuilder()
      .match([
        node(
          REPOSITORY_CONSTANTS.VARIABLE.Trip,
          REPOSITORY_CONSTANTS.LABEL.Trip,
          { id }
        )
      ])
      .detachDelete([REPOSITORY_CONSTANTS.VARIABLE.Trip])
      .with({
        [`${REPOSITORY_CONSTANTS.VARIABLE.Trip}`]:
          REPOSITORY_CONSTANTS.VARIABLE.Output
      })
      .return([REPOSITORY_CONSTANTS.VARIABLE.Output]);

    const result = await query.run();
    return result as Neo4jOutput<Trip>;
  }
}
