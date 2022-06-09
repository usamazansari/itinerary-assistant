import { Injectable } from '@nestjs/common';
import { node, relation } from 'cypher-query-builder';

import { Neo4jQueryRepositoryService } from '../../imports/services';

@Injectable()
export class PersonRepository {
  constructor(private _query: Neo4jQueryRepositoryService) {}

  async getPerson(email = '') {
    const query = this._query
      .queryBuilder()
      .match([node('person', 'PERSON', { ['email']: email })])
      .return(['person']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async getPeople() {
    const query = this._query
      .queryBuilder()
      .match([node('person', 'PERSON')])
      .return(['person']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async getAddress(email = '') {
    const query = this._query
      .queryBuilder()
      .match([
        node('person', 'PERSON', { ['email']: email }),
        relation('out', 'addressRelationship', 'RESIDES_AT'),
        node('address', 'ADDRESS')
      ])
      .return(['address']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }
}
