import { Injectable } from '@nestjs/common';
import { node, relation } from 'cypher-query-builder';

import { Person, PersonDTO } from '../../imports/models';
import { Neo4jQueryRepositoryService } from '../../imports/services';

import { PersonHelper } from '../../helpers';

@Injectable()
export class PersonRepository {
  constructor(
    private _query: Neo4jQueryRepositoryService,
    private _helper: PersonHelper
  ) {}

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

  async getIdentifications(person = new Person({ id: '' })) {
    const clone = person.filterForInput();
    const query = this._query
      .queryBuilder()
      .match([
        node('person', 'PERSON', { ...clone }),
        relation('in', 'identificationRelationship', 'IDENTIFICATION_OF'),
        node('identification', 'IDENTIFICATION')
      ])
      .return(['identification']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async getSocialConnections(person = new Person({ id: '' })) {
    const clone = person.filterForInput();
    const query = this._query
      .queryBuilder()
      .match([
        node('person', 'PERSON', { ...clone }),
        relation('in', 'socialConnectionRelationship', 'SOCIAL_CONNECTION_OF'),
        node('socialConnection', 'SOCIAL_CONNECTION')
      ])
      .return(['socialConnection']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async createPerson(id = '', person = new PersonDTO({})) {
    const create = this._helper.generateCreateObject({ id, person });
    const query = this._query
      .queryBuilder()
      .create([node('person', 'PERSON', { ...create })])
      .return(['person']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async updatePerson(id = '', person = new PersonDTO({})) {
    const update = this._helper.generateUpdateObject(person);
    const query = this._query
      .queryBuilder()
      .match([node('person', 'PERSON', { id })])
      .set({ values: { ...update } })
      .return(['person']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async deletePerson(id = '') {
    const query = this._query
      .queryBuilder()
      .match([node('person', 'PERSON', { id })])
      .delete(['person'])
      .return(['person']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }
}
