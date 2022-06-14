import { Injectable } from '@nestjs/common';
import { node, relation } from 'cypher-query-builder';

import { Identification } from '../../imports/models';
import { Neo4jQueryRepositoryService } from '../../imports/services';

@Injectable()
export class IdentificationRepository {
  constructor(private _query: Neo4jQueryRepositoryService) {}

  async getTenure(identification = new Identification({ id: '' })) {
    const clone = identification.filterForInput();
    const query = this._query
      .queryBuilder()
      .match([
        node('identification', 'IDENTIFICATION', { ...clone }),
        relation('in', 'identificationRelationship', 'TENURE_OF'),
        node('tenure', 'TENURE')
      ])
      .return(['tenure']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }
}
