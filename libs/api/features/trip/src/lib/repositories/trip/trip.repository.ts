import { Injectable } from '@nestjs/common';
import { node, relation } from 'cypher-query-builder';

import { REPOSITORY_CONSTANTS } from '../../imports/constants';
import { Neo4jOutput, Person } from '../../imports/models';
import { LoggerService, QueryRepositoryService } from '../../imports/services';

import { Trip, TripDTO } from '../../models';

@Injectable()
export class TripRepository {
  constructor(
    private _query: QueryRepositoryService,
    private _logger: LoggerService
  ) {}

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

    this._logger.logQuery(query.toString());
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

    this._logger.logQuery(query.toString());
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

    this._logger.logQuery(query.toString());
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

    this._logger.logQuery(query.toString());
    const result = await query.run();
    return result as Neo4jOutput<Trip>;
  }

  async resolveAccomplices(id: string) {
    const query = this._query
      .queryBuilder()
      .match([
        node(
          REPOSITORY_CONSTANTS.VARIABLE.Trip,
          REPOSITORY_CONSTANTS.LABEL.Trip,
          { id }
        ),
        relation(
          REPOSITORY_CONSTANTS.RELATIONSHIP_DIRECTION.IN,
          REPOSITORY_CONSTANTS.RELATIONSHIP.Accomplice,
          REPOSITORY_CONSTANTS.LABEL.AccompliceOf
        ),
        node(
          REPOSITORY_CONSTANTS.VARIABLE.Person,
          REPOSITORY_CONSTANTS.LABEL.Person
        )
      ])
      .with({
        [`${REPOSITORY_CONSTANTS.VARIABLE.Person}`]:
          REPOSITORY_CONSTANTS.VARIABLE.Output
      })
      .return([REPOSITORY_CONSTANTS.VARIABLE.Output]);

    this._logger.logQuery(query.toString());
    const result = await query.run();
    return result as Neo4jOutput<Person>;
  }
}
