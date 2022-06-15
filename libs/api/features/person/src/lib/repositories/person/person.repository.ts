import { Injectable } from '@nestjs/common';
import { node, relation } from 'cypher-query-builder';

import { REPOSITORY_CONSTANTS } from '../../imports/constants';
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
      .match([
        node(
          REPOSITORY_CONSTANTS.Variables.Person,
          REPOSITORY_CONSTANTS.Labels.Person,
          { id }
        )
      ])
      .with({
        [`${REPOSITORY_CONSTANTS.Variables.Person}`]:
          REPOSITORY_CONSTANTS.Variables.Output
      })
      .return([REPOSITORY_CONSTANTS.Variables.Output]);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async getPeople() {
    const query_log = this._query
      .queryBuilder()
      .match([
        node(
          REPOSITORY_CONSTANTS.Variables.Person,
          REPOSITORY_CONSTANTS.Labels.Person
        )
      ])
      .with({
        [`${REPOSITORY_CONSTANTS.Variables.Person}`]:
          REPOSITORY_CONSTANTS.Variables.Output
      })
      .return([REPOSITORY_CONSTANTS.Variables.Output])
      .interpolate();
    const query = this._query
      .queryBuilder()
      .match([
        node(
          REPOSITORY_CONSTANTS.Variables.Person,
          REPOSITORY_CONSTANTS.Labels.Person
        )
      ])
      .with({
        [`${REPOSITORY_CONSTANTS.Variables.Person}`]:
          REPOSITORY_CONSTANTS.Variables.Output
      })
      .return([REPOSITORY_CONSTANTS.Variables.Output]);

    console.log({ query: query_log });
    const result = await query.run();
    return result;
  }

  async getAddress(id = '') {
    const query = this._query
      .queryBuilder()
      .match([
        node(
          REPOSITORY_CONSTANTS.Variables.Person,
          REPOSITORY_CONSTANTS.Labels.Person,
          { id }
        ),
        relation(
          REPOSITORY_CONSTANTS.RelationshipDirection.IN,
          REPOSITORY_CONSTANTS.Relationships.Address,
          REPOSITORY_CONSTANTS.Labels.AddressOf
        ),
        node(
          REPOSITORY_CONSTANTS.Variables.Address,
          REPOSITORY_CONSTANTS.Labels.Address
        )
      ])
      .with({
        [`${REPOSITORY_CONSTANTS.Variables.Address}`]:
          REPOSITORY_CONSTANTS.Variables.Output
      })
      .return([REPOSITORY_CONSTANTS.Variables.Output]);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async getDemographics(id = '') {
    const query = this._query
      .queryBuilder()
      .match([
        node(
          REPOSITORY_CONSTANTS.Variables.Person,
          REPOSITORY_CONSTANTS.Labels.Person,
          { id }
        ),
        relation(
          REPOSITORY_CONSTANTS.RelationshipDirection.IN,
          REPOSITORY_CONSTANTS.Relationships.Demographics,
          REPOSITORY_CONSTANTS.Labels.DemographicsOf
        ),
        node(
          REPOSITORY_CONSTANTS.Variables.Demographics,
          REPOSITORY_CONSTANTS.Labels.Demographics
        )
      ])
      .with({
        [`${REPOSITORY_CONSTANTS.Variables.Demographics}`]:
          REPOSITORY_CONSTANTS.Variables.Output
      })
      .return([REPOSITORY_CONSTANTS.Variables.Output]);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async getIdentifications(id = '') {
    const query = this._query
      .queryBuilder()
      .match([
        node(
          REPOSITORY_CONSTANTS.Variables.Person,
          REPOSITORY_CONSTANTS.Labels.Person,
          { id }
        ),
        relation(
          REPOSITORY_CONSTANTS.RelationshipDirection.IN,
          REPOSITORY_CONSTANTS.Relationships.Identification,
          REPOSITORY_CONSTANTS.Labels.IdentificationOf
        ),
        node(
          REPOSITORY_CONSTANTS.Variables.Identification,
          REPOSITORY_CONSTANTS.Labels.Identification
        )
      ])
      .with({
        [`${REPOSITORY_CONSTANTS.Variables.Identification}`]:
          REPOSITORY_CONSTANTS.Variables.Output
      })
      .return([REPOSITORY_CONSTANTS.Variables.Output]);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async getSocialConnections(id = '') {
    const query = this._query
      .queryBuilder()
      .match([
        node(
          REPOSITORY_CONSTANTS.Variables.Person,
          REPOSITORY_CONSTANTS.Labels.Person,
          { id }
        ),
        relation(
          REPOSITORY_CONSTANTS.RelationshipDirection.IN,
          REPOSITORY_CONSTANTS.Relationships.SocialConnection,
          REPOSITORY_CONSTANTS.Labels.SocialConnectionOf
        ),
        node(
          REPOSITORY_CONSTANTS.Variables.SocialConnection,
          REPOSITORY_CONSTANTS.Labels.SocialConnection
        )
      ])
      .with({
        [`${REPOSITORY_CONSTANTS.Variables.SocialConnection}`]:
          REPOSITORY_CONSTANTS.Variables.Output
      })
      .return([REPOSITORY_CONSTANTS.Variables.Output]);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async createPerson(id = '', person = new PersonDTO({})) {
    const create = this._helper.generateCreateObject({ id, person });
    const query = this._query
      .queryBuilder()
      .create([
        node(
          REPOSITORY_CONSTANTS.Variables.Person,
          REPOSITORY_CONSTANTS.Labels.Person,
          { ...create }
        )
      ])
      .with({
        [`${REPOSITORY_CONSTANTS.Variables.Person}`]:
          REPOSITORY_CONSTANTS.Variables.Output
      })
      .return([REPOSITORY_CONSTANTS.Variables.Output]);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async updatePerson(id = '', person = new PersonDTO({})) {
    const update = this._helper.generateUpdateObject(person);
    const query = this._query
      .queryBuilder()
      .match([
        node(
          REPOSITORY_CONSTANTS.Variables.Person,
          REPOSITORY_CONSTANTS.Labels.Person,
          { id }
        )
      ])
      .set({ values: { ...update } })
      .with({
        [`${REPOSITORY_CONSTANTS.Variables.Person}`]:
          REPOSITORY_CONSTANTS.Variables.Output
      })
      .return([REPOSITORY_CONSTANTS.Variables.Output]);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async deletePerson(id = '') {
    const query = this._query
      .queryBuilder()
      .match([
        node(
          REPOSITORY_CONSTANTS.Variables.Person,
          REPOSITORY_CONSTANTS.Labels.Person,
          { id }
        )
      ])
      .detachDelete([REPOSITORY_CONSTANTS.Variables.Person])
      .with({
        [`${REPOSITORY_CONSTANTS.Variables.Person}`]:
          REPOSITORY_CONSTANTS.Variables.Output
      })
      .return([REPOSITORY_CONSTANTS.Variables.Output]);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }
}
