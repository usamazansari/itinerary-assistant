import { Injectable } from '@nestjs/common';
import { node } from 'cypher-query-builder';

import { REPOSITORY_CONSTANTS } from '../../imports/constants';
import { TenureDTO } from '../../imports/models';
import { Neo4jQueryRepositoryService } from '../../imports/services';

import { TenureHelper } from '../../helpers';

@Injectable()
export class TenureRepository {
  constructor(
    private _query: Neo4jQueryRepositoryService,
    private _helper: TenureHelper
  ) {}

  async getTenure(id = '') {
    const query = this._query
      .queryBuilder()
      .match([
        node(
          REPOSITORY_CONSTANTS.Variables.Tenure,
          REPOSITORY_CONSTANTS.Labels.Tenure,
          { id }
        )
      ])
      .with({
        [`${REPOSITORY_CONSTANTS.Variables.Tenure}`]:
          REPOSITORY_CONSTANTS.Variables.Output
      })
      .return([REPOSITORY_CONSTANTS.Variables.Output]);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async createTenure(id = '', tenure: TenureDTO) {
    const create = this._helper.generateCreateObject({ id, tenure });
    const query = this._query
      .queryBuilder()
      .create([
        node(
          REPOSITORY_CONSTANTS.Variables.Tenure,
          REPOSITORY_CONSTANTS.Labels.Tenure,
          { ...create }
        )
      ])
      .with({
        [`${REPOSITORY_CONSTANTS.Variables.Tenure}`]:
          REPOSITORY_CONSTANTS.Variables.Output
      })
      .return([REPOSITORY_CONSTANTS.Variables.Output]);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async updateTenure(id = '', tenure: TenureDTO) {
    const update = this._helper.generateUpdateObject(tenure);
    const query = this._query
      .queryBuilder()
      .match([
        node(
          REPOSITORY_CONSTANTS.Variables.Tenure,
          REPOSITORY_CONSTANTS.Labels.Tenure,
          { id }
        )
      ])
      .set({ values: { ...update } })
      .with({
        [`${REPOSITORY_CONSTANTS.Variables.Tenure}`]:
          REPOSITORY_CONSTANTS.Variables.Output
      })
      .return([REPOSITORY_CONSTANTS.Variables.Output]);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async deleteTenure(id = '') {
    const query = this._query
      .queryBuilder()
      .match([
        node(
          REPOSITORY_CONSTANTS.Variables.Tenure,
          REPOSITORY_CONSTANTS.Labels.Tenure,
          { id }
        )
      ])
      .detachDelete([REPOSITORY_CONSTANTS.Variables.Tenure]);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }
}
