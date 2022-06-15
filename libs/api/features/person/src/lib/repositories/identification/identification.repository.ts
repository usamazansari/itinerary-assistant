import { Injectable } from '@nestjs/common';
import { node, relation } from 'cypher-query-builder';

import { REPOSITORY_CONSTANTS } from '../../imports/constants';
import { IdentificationDTO } from '../../imports/models';
import { Neo4jQueryRepositoryService } from '../../imports/services';

import { IdentificationHelper } from '../../helpers';

@Injectable()
export class IdentificationRepository {
  constructor(
    private _query: Neo4jQueryRepositoryService,
    private _helper: IdentificationHelper
  ) {}

  async getIdentification(id = '') {
    const query = this._query
      .queryBuilder()
      .match([
        node(
          REPOSITORY_CONSTANTS.Variables.Identification,
          REPOSITORY_CONSTANTS.Labels.Identification,
          {
            id
          }
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

  async getTenure(id = '') {
    const query = this._query
      .queryBuilder()
      .match([
        node(
          REPOSITORY_CONSTANTS.Variables.Identification,
          REPOSITORY_CONSTANTS.Labels.Identification,
          {
            id
          }
        ),
        relation(
          REPOSITORY_CONSTANTS.RelationshipDirection.OUT,
          REPOSITORY_CONSTANTS.Relationships.Identification,
          REPOSITORY_CONSTANTS.Labels.HasValidity
        ),
        node(
          REPOSITORY_CONSTANTS.Variables.Tenure,
          REPOSITORY_CONSTANTS.Labels.Tenure
        )
      ])
      .with({
        [`${REPOSITORY_CONSTANTS.Variables.Tenure}`]:
          REPOSITORY_CONSTANTS.Variables.Output
      })
      .return([REPOSITORY_CONSTANTS.Variables.Output]);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async createIdentification(id = '', identification: IdentificationDTO) {
    const create = this._helper.generateCreateObject({ id, identification });
    const query = this._query
      .queryBuilder()
      .create([
        node(
          REPOSITORY_CONSTANTS.Variables.Identification,
          REPOSITORY_CONSTANTS.Labels.Identification,
          {
            ...create
          }
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

  async updateIdentification(id: string, identification: IdentificationDTO) {
    const update = this._helper.generateUpdateObject(identification);
    const query = this._query
      .queryBuilder()
      .match([
        node(
          REPOSITORY_CONSTANTS.Variables.Identification,
          REPOSITORY_CONSTANTS.Labels.Identification,
          {
            id
          }
        )
      ])
      .set({ values: { ...update } })
      .with({
        [`${REPOSITORY_CONSTANTS.Variables.Identification}`]:
          REPOSITORY_CONSTANTS.Variables.Output
      })
      .return([REPOSITORY_CONSTANTS.Variables.Output]);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async deleteIdentification(id: string) {
    const query = this._query
      .queryBuilder()
      .match([
        node(
          REPOSITORY_CONSTANTS.Variables.Identification,
          REPOSITORY_CONSTANTS.Labels.Identification,
          {
            id
          }
        )
      ])
      .detachDelete([REPOSITORY_CONSTANTS.Variables.Identification])
      .with({
        [`${REPOSITORY_CONSTANTS.Variables.Identification}`]:
          REPOSITORY_CONSTANTS.Variables.Output
      })
      .return([REPOSITORY_CONSTANTS.Variables.Output]);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async associateIdentificationWithTenure(
    identificationId: string,
    tenureId: string
  ) {
    const query = this._query
      .queryBuilder()
      .match([
        node(
          REPOSITORY_CONSTANTS.Variables.Identification,
          REPOSITORY_CONSTANTS.Labels.Identification,
          {
            id: identificationId
          }
        )
      ])
      .with([REPOSITORY_CONSTANTS.Variables.Identification])
      .match([
        node(
          REPOSITORY_CONSTANTS.Variables.Tenure,
          REPOSITORY_CONSTANTS.Labels.Tenure,
          { id: tenureId }
        )
      ])
      .with([
        REPOSITORY_CONSTANTS.Variables.Identification,
        REPOSITORY_CONSTANTS.Variables.Tenure
      ])
      .create([
        node(REPOSITORY_CONSTANTS.Variables.Identification),
        relation(
          REPOSITORY_CONSTANTS.RelationshipDirection.OUT,
          REPOSITORY_CONSTANTS.Relationships.Resident,
          REPOSITORY_CONSTANTS.Labels.HasValidity
        ),
        node(REPOSITORY_CONSTANTS.Variables.Tenure)
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

  async associateIdentificationWithPerson(
    identificationId: string,
    personId: string
  ) {
    const query = this._query
      .queryBuilder()
      .match([
        node(
          REPOSITORY_CONSTANTS.Variables.Identification,
          REPOSITORY_CONSTANTS.Labels.Identification,
          {
            id: identificationId
          }
        )
      ])
      .with([REPOSITORY_CONSTANTS.Variables.Identification])
      .match([
        node(
          REPOSITORY_CONSTANTS.Variables.Person,
          REPOSITORY_CONSTANTS.Labels.Person,
          { id: personId }
        )
      ])
      .with([
        REPOSITORY_CONSTANTS.Variables.Identification,
        REPOSITORY_CONSTANTS.Variables.Person
      ])
      .create([
        node(REPOSITORY_CONSTANTS.Variables.Identification),
        relation(
          REPOSITORY_CONSTANTS.RelationshipDirection.OUT,
          REPOSITORY_CONSTANTS.Relationships.Resident,
          REPOSITORY_CONSTANTS.Labels.IdentificationOf
        ),
        node(REPOSITORY_CONSTANTS.Variables.Person)
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

  async checkHasValidityRelationship(
    identificationId: string,
    tenureId: string
  ) {
    const query = this._query
      .queryBuilder()
      .match([
        node(
          REPOSITORY_CONSTANTS.Variables.Identification,
          REPOSITORY_CONSTANTS.Labels.Identification,
          {
            id: identificationId
          }
        ),
        relation(
          REPOSITORY_CONSTANTS.RelationshipDirection.OUT,
          REPOSITORY_CONSTANTS.Relationships.Identification,
          REPOSITORY_CONSTANTS.Labels.HasValidity
        ),
        node(
          REPOSITORY_CONSTANTS.Variables.Tenure,
          REPOSITORY_CONSTANTS.Labels.Tenure,
          { id: tenureId }
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

  async checkIdentificationOfRelationship(
    identificationId: string,
    personId: string
  ) {
    const query = this._query
      .queryBuilder()
      .match([
        node(
          REPOSITORY_CONSTANTS.Variables.Identification,
          REPOSITORY_CONSTANTS.Labels.Identification,
          {
            id: identificationId
          }
        ),
        relation(
          REPOSITORY_CONSTANTS.RelationshipDirection.OUT,
          REPOSITORY_CONSTANTS.Relationships.Identification,
          REPOSITORY_CONSTANTS.Labels.IdentificationOf
        ),
        node(
          REPOSITORY_CONSTANTS.Variables.Person,
          REPOSITORY_CONSTANTS.Labels.Person,
          { id: personId }
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
}
