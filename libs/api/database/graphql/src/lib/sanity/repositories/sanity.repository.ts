import { Injectable } from '@nestjs/common';
import { node, relation } from 'cypher-query-builder';

import { QueryRepositoryService } from '../../imports/services';

@Injectable()
export class SanityRepository {
  constructor(private _query: QueryRepositoryService) {}

  async neo4jSanity() {
    const query = this._query
      .queryBuilder()
      .match([
        node('demographics', 'DEMOGRAPHICS'),
        relation('out', 'demographicsRelationship', 'DEMOGRAPHICS_OF'),
        node('person', 'PERSON'),
        relation('in', 'socialRelationship', 'SOCIAL_CONNECTION_OF'),
        node('social', 'SOCIAL_CONNECTION')
      ])
      .return([
        'demographics',
        'demographicsRelationship',
        'person',
        'socialRelationship',
        'social'
      ]);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }
}
