import { Injectable } from '@nestjs/common';
import { node, relation } from 'cypher-query-builder';

import { QueryRepositoryService } from '../../imports/services';

@Injectable()
export class SanityRepository {
  constructor(private _query: QueryRepositoryService) {}

  async neo4jSanity() {
    const query = await this._query
      .queryBuilder()
      .match([
        node('people', 'PERSON'),
        relation('in', 'demographicsRelationship', 'DEMOGRAPHICS_OF'),
        node('demographics', 'DEMOGRAPHICS')
      ])
      .return(['people', 'demographics'])
      .run();

    return query.map(({ people, demographics }) => {
      const { year, month, day } = people.properties.dateOfBirth;
      return {
        id: people.identity,
        ...people.properties,
        dateOfBirth: new Date(`${year}-${month}-${day}`),
        demographics: {
          id: demographics.identity,
          ...demographics.properties
        }
      };
    });
  }
}
