import { Injectable } from '@nestjs/common';
import { node, relation } from 'cypher-query-builder';

import { IdentificationDTO } from '../../imports/models';
import { Neo4jQueryRepositoryService } from '../../imports/services';

import { IdentificationHelper } from '../../helpers';

@Injectable()
export class IdentificationRepository {
  constructor(
    private _query: Neo4jQueryRepositoryService,
    private _helper: IdentificationHelper
  ) {}

  async getIdentification(id = '') {
    const query = this._query
      .queryBuilder()
      .match([node('identification', 'IDENTIFICATION', { id })])
      .return(['identification']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async getTenure(id = '') {
    const query = this._query
      .queryBuilder()
      .match([
        node('identification', 'IDENTIFICATION', { id }),
        relation('out', 'identificationRelationship', 'HAS_VALIDITY'),
        node('tenure', 'TENURE')
      ])
      .return(['tenure']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async createIdentification(id = '', identification: IdentificationDTO) {
    const create = this._helper.generateCreateObject({ id, identification });
    const query = this._query
      .queryBuilder()
      .create([node('identification', 'IDENTIFICATION', { ...create })])
      .return(['identification']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async updateIdentification(id: string, identification: IdentificationDTO) {
    const update = this._helper.generateUpdateObject(identification);
    const query = this._query
      .queryBuilder()
      .match([node('identification', 'IDENTIFICATION', { id })])
      .set({ values: { ...update } })
      .return(['identification']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async deleteIdentification(id: string) {
    const query = this._query
      .queryBuilder()
      .match([node('identification', 'IDENTIFICATION', { id })])
      .detachDelete(['identification'])
      .return(['identification']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async associateIdentificationWithTenure(
    identificationId: string,
    tenureId: string
  ) {
    const query = this._query
      .queryBuilder()
      .match([
        node('identification', 'IDENTIFICATION', { id: identificationId })
      ])
      .with(['identification'])
      .match([node('tenure', 'TENURE', { id: tenureId })])
      .with(['identification', 'tenure'])
      .create([
        node('identification'),
        relation('out', 'residentRelationship', 'HAS_VALIDITY'),
        node('tenure')
      ])
      .return(['identification']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async checkHasValidityRelationship(
    identificationId: string,
    tenureId: string
  ) {
    const query = this._query
      .queryBuilder()
      .match([
        node('identification', 'IDENTIFICATION', { id: identificationId }),
        relation('out', 'identificationRelationship', 'HAS_VALIDITY'),
        node('tenure', 'TENURE', { id: tenureId })
      ])
      .return(['identification']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }
}
