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
      .with({ person: 'output' })
      .return(['output']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async getPeople() {
    const query = this._query
      .queryBuilder()
      .match([node('person', 'PERSON')])
      .with({ person: 'output' })
      .return(['output']);

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
      .with({ address: 'output' })
      .return(['output']);

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
      .with({ demographics: 'output' })
      .return(['output']);

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
      .with({ identification: 'output' })
      .return(['output']);

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
      .with({ socialConnection: 'output' })
      .return(['output']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async createPerson(id = '', person = new PersonDTO({})) {
    const create = this._helper.generateCreateObject({ id, person });
    const query = this._query
      .queryBuilder()
      .create([node('person', 'PERSON', { ...create })])
      .with({ person: 'output' })
      .return(['output']);

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
      .with({ person: 'output' })
      .return(['output']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async deletePerson(id = '') {
    const query = this._query
      .queryBuilder()
      .match([node('person', 'PERSON', { id })])
      .detachDelete(['person'])
      .with({ person: 'output' })
      .return(['output']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }
}
