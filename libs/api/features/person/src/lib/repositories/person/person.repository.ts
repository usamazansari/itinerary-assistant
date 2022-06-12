import { Injectable } from '@nestjs/common';
import { node, relation } from 'cypher-query-builder';

import { Person, PersonDTO } from '../../imports/models';
import { Neo4jQueryRepositoryService } from '../../imports/services';
import { parseToDateTime } from '../../imports/utilities';

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
    const create = this.#generateCreateObject({ id, person });
    const query = this._query
      .queryBuilder()
      .create([node('person', 'PERSON', { ...create })])
      .return(['person']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async updatePerson(id = '', person = new PersonDTO({})) {
    const update = this.#generateUpdateObject(person);

    const query = this._query
      .queryBuilder()
      .match([node('person', 'PERSON', { id })])
      .set({
        values: { ...update }
      })
      .return(['person']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  #generateCreateObject(create: { id: string; person: PersonDTO }) {
    const {
      id,
      person: { dateOfBirth, email, fullName, gender, phone, website }
    } = create;

    let _ = {};
    if (!!dateOfBirth) _ = { ..._, dateOfBirth: parseToDateTime(dateOfBirth) };
    if (!!email) _ = { ..._, email };
    if (!!fullName) _ = { ..._, fullName };
    if (!!gender) _ = { ..._, gender };
    if (!!phone) _ = { ..._, phone };
    if (!!website) _ = { ..._, website };

    return { id, ..._ };
  }

  #generateUpdateObject(person: PersonDTO) {
    const { dateOfBirth, email, fullName, gender, phone, website } = person;

    let _ = {};
    if (!!dateOfBirth)
      _ = { ..._, [`person.dateOfBirth`]: parseToDateTime(dateOfBirth) };
    if (!!email) _ = { ..._, [`person.email`]: email };
    if (!!fullName) _ = { ..._, [`person.fullName`]: fullName };
    if (!!gender) _ = { ..._, [`person.gender`]: gender };
    if (!!phone) _ = { ..._, [`person.phone`]: phone };
    if (!!website) _ = { ..._, [`person.website`]: website };
    return _;
  }
}
