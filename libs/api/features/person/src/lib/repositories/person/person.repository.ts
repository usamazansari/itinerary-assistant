import { Injectable } from '@nestjs/common';
import { node, relation } from 'cypher-query-builder';

import { PersonDTO } from '../../imports/models';
import { Neo4jQueryRepositoryService } from '../../imports/services';

import { PersonHelper } from '../../helpers';

@Injectable()
export class PersonRepository {
  constructor(
    private _query: Neo4jQueryRepositoryService,
    private _helper: PersonHelper
  ) {}

  async getPerson(id = '') {
    const query = this._query
      .queryBuilder()
      .match([node('person', 'PERSON', { id })])
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

  async getAddress(id = '') {
    const query = this._query
      .queryBuilder()
      .match([
        node('person', 'PERSON', { id }),
        relation('in', 'addressRelationship', 'ADDRESS_OF'),
        node('address', 'ADDRESS')
      ])
      .return(['address']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async getDemographics(id = '') {
    const query = this._query
      .queryBuilder()
      .match([
        node('person', 'PERSON', { id }),
        relation('in', 'demographicRelationship', 'DEMOGRAPHICS_OF'),
        node('demographics', 'DEMOGRAPHICS')
      ])
      .return(['demographics']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async getIdentifications(id = '') {
    const query = this._query
      .queryBuilder()
      .match([
        node('person', 'PERSON', { id }),
        relation('in', 'identificationRelationship', 'IDENTIFICATION_OF'),
        node('identification', 'IDENTIFICATION')
      ])
      .return(['identification']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async getSocialConnections(id = '') {
    const query = this._query
      .queryBuilder()
      .match([
        node('person', 'PERSON', { id }),
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
      .detachDelete(['person'])
      .return(['person']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }
}
