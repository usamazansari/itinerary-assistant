import { Injectable } from '@nestjs/common';
import { node, relation } from 'cypher-query-builder';

import { Person } from '../../imports/models';
import { Neo4jQueryRepositoryService } from '../../imports/services';

@Injectable()
export class PersonRepository {
  constructor(private _query: Neo4jQueryRepositoryService) {}

  async getPerson(person = new Person({ id: '' })) {
    const clone = person.filterForInput();
    const query = this._query
      .queryBuilder()
      .match([node('person', 'PERSON', { ...clone })])
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

  async getAddress(person = new Person({ id: '' })) {
    const clone = person.filterForInput();
    const query = this._query
      .queryBuilder()
      .match([
        node('person', 'PERSON', { ...clone }),
        relation('out', 'addressRelationship', 'RESIDES_AT'),
        node('address', 'ADDRESS')
      ])
      .return(['address']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async getDemographics(person = new Person({ id: '' })) {
    const clone = person.filterForInput();
    const query = this._query
      .queryBuilder()
      .match([
        node('person', 'PERSON', { ...clone }),
        relation('in', 'demographicRelationship', 'DEMOGRAPHICS_OF'),
        node('demographics', 'DEMOGRAPHICS')
      ])
      .return(['demographics']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }
}
