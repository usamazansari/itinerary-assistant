import { Injectable } from '@nestjs/common';
import { node, relation } from 'cypher-query-builder';

import { Neo4jQueryRepositoryService } from '../../imports/services';

@Injectable()
export class SanityRepository {
  constructor(private _query: Neo4jQueryRepositoryService) {}

  async neo4jSanity() {
    const query = this._query
      .queryBuilder()
      .match([
        node('demographics', 'DEMOGRAPHICS'),
        relation('out', 'demographicsRelationship', 'DEMOGRAPHICS_OF'),
        node('person', 'PERSON'),
        relation('in', 'socialConnectionRelationship', 'SOCIAL_CONNECTION_OF'),
        node('socialConnection', 'SOCIAL_CONNECTION')
      ])
      .return([
        'demographics',
        'demographicsRelationship',
        'person',
        'socialConnectionRelationship',
        'socialConnection'
      ]);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }
}
