import { Injectable } from '@nestjs/common';
import { node, relation } from 'cypher-query-builder';

import { Neo4jQueryRepositoryService } from '../../imports/services';

@Injectable()
export class IdentificationRepository {
  constructor(private _query: Neo4jQueryRepositoryService) {}

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
