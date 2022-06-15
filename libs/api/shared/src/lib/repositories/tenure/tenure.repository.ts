import { Injectable } from '@nestjs/common';
import { node } from 'cypher-query-builder';

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
      .match([node('tenure', 'TENURE', { id })])
      .with({ tenure: 'output' })
      .return(['output']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async createTenure(id = '', tenure: TenureDTO) {
    const create = this._helper.generateCreateObject({ id, tenure });
    const query = this._query
      .queryBuilder()
      .create([node('tenure', 'TENURE', { ...create })])
      .with({ tenure: 'output' })
      .return(['output']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async updateTenure(id = '', tenure: TenureDTO) {
    const update = this._helper.generateUpdateObject(tenure);
    const query = this._query
      .queryBuilder()
      .match([node('tenure', 'TENURE', { id })])
      .set({ values: { ...update } })
      .with({ tenure: 'output' })
      .return(['output']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async deleteTenure(id = '') {
    const query = this._query
      .queryBuilder()
      .match([node('tenure', 'TENURE', { id })])
      .detachDelete(['tenure']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }
}
