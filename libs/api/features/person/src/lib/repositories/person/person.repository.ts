import { Injectable } from '@nestjs/common';
import { node, relation } from 'cypher-query-builder';

import { REPOSITORY_CONSTANTS } from '../../imports/constants';
import { Neo4jOutput } from '../../imports/models';
import { QueryRepositoryService } from '../../imports/services';

import { Address, Person, PersonDTO } from '../../models';

@Injectable()
export class PersonRepository {
  constructor(private _query: QueryRepositoryService) {}

  async getPeople() {
    const query = this._query
      .queryBuilder()
      .match([
        node(
          REPOSITORY_CONSTANTS.VARIABLE.Person,
          REPOSITORY_CONSTANTS.LABEL.Person
        )
      ])
      .with({
        [`${REPOSITORY_CONSTANTS.VARIABLE.Person}`]:
          REPOSITORY_CONSTANTS.VARIABLE.Output
      })
      .return([REPOSITORY_CONSTANTS.VARIABLE.Output]);

    console.log({ query: query.interpolate() });
    const result = await query.run();
    return result as Neo4jOutput<Person>;
  }

  async getPerson(id = '') {
    const query = this._query
      .queryBuilder()
      .match([
        node(
          REPOSITORY_CONSTANTS.VARIABLE.Person,
          REPOSITORY_CONSTANTS.LABEL.Person,
          { id }
        )
      ])
      .with({
        [`${REPOSITORY_CONSTANTS.VARIABLE.Person}`]:
          REPOSITORY_CONSTANTS.VARIABLE.Output
      })
      .return([REPOSITORY_CONSTANTS.VARIABLE.Output]);

    console.log({ query: query.interpolate() });
    const result = await query.run();
    return result as Neo4jOutput<Person>;
  }

  async createPerson(dto = new PersonDTO({})) {
    const query = this._query
      .queryBuilder()
      .create([
        node(
          REPOSITORY_CONSTANTS.VARIABLE.Person,
          REPOSITORY_CONSTANTS.LABEL.Person,
          { ...dto }
        )
      ])
      .with({
        [`${REPOSITORY_CONSTANTS.VARIABLE.Person}`]:
          REPOSITORY_CONSTANTS.VARIABLE.Output
      })
      .return([REPOSITORY_CONSTANTS.VARIABLE.Output]);

    console.log({ query: query.interpolate() });
    const result = await query.run();
    return result as Neo4jOutput<Person>;
  }

  async updatePerson(id = '', update = new PersonDTO({})) {
    const query = this._query
      .queryBuilder()
      .match([
        node(
          REPOSITORY_CONSTANTS.VARIABLE.Person,
          REPOSITORY_CONSTANTS.LABEL.Person,
          { id }
        )
      ])
      .set({ values: { ...update } })
      .with({
        [`${REPOSITORY_CONSTANTS.VARIABLE.Person}`]:
          REPOSITORY_CONSTANTS.VARIABLE.Output
      })
      .return([REPOSITORY_CONSTANTS.VARIABLE.Output]);

    console.log({ query: query.interpolate() });
    const result = await query.run();
    return result as Neo4jOutput<Person>;
  }

  async deletePerson(id = '') {
    const query = this._query
      .queryBuilder()
      .match([
        node(
          REPOSITORY_CONSTANTS.VARIABLE.Person,
          REPOSITORY_CONSTANTS.LABEL.Person,
          { id }
        )
      ])
      .detachDelete([REPOSITORY_CONSTANTS.VARIABLE.Person])
      .with({
        [`${REPOSITORY_CONSTANTS.VARIABLE.Person}`]:
          REPOSITORY_CONSTANTS.VARIABLE.Output
      })
      .return([REPOSITORY_CONSTANTS.VARIABLE.Output]);

    console.log({ query: query.interpolate() });
    const result = await query.run();
    return result as Neo4jOutput<Person>;
  }

  async getPersonAddress(id = '') {
    const query = this._query
      .queryBuilder()
      .match([
        node(
          REPOSITORY_CONSTANTS.VARIABLE.Person,
          REPOSITORY_CONSTANTS.LABEL.Person,
          { id }
        ),
        relation(
          REPOSITORY_CONSTANTS.RELATIONSHIP_DIRECTION.IN,
          REPOSITORY_CONSTANTS.RELATIONSHIP.Address,
          REPOSITORY_CONSTANTS.LABEL.AddressOf
        ),
        node(
          REPOSITORY_CONSTANTS.VARIABLE.Address,
          REPOSITORY_CONSTANTS.LABEL.Address
        )
      ])
      .with({
        [`${REPOSITORY_CONSTANTS.VARIABLE.Address}`]:
          REPOSITORY_CONSTANTS.VARIABLE.Output
      })
      .return([REPOSITORY_CONSTANTS.VARIABLE.Output]);

    console.log({ query: query.interpolate() });
    const result = await query.run();
    return result as Neo4jOutput<Address>;
  }
}
