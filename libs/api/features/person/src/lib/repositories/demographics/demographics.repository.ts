import { Injectable } from '@nestjs/common';
import { node, relation } from 'cypher-query-builder';

import { REPOSITORY_CONSTANTS } from '../../imports/constants';
import { DemographicsDTO } from '../../imports/models';
import { Neo4jQueryRepositoryService } from '../../imports/services';

import { DemographicsHelper } from '../../helpers';

@Injectable()
export class DemographicsRepository {
  constructor(
    private _query: Neo4jQueryRepositoryService,
    private _helper: DemographicsHelper
  ) {}

  async getDemographics(id = '') {
    const query = this._query
      .queryBuilder()
      .match([
        node(
          REPOSITORY_CONSTANTS.Variables.Demographics,
          REPOSITORY_CONSTANTS.Labels.Demographics,
          {
            id
          }
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

  async createDemographics(id = '', demographics: DemographicsDTO) {
    const create = this._helper.generateCreateObject({ id, demographics });
    const query = this._query
      .queryBuilder()
      .create([
        node(
          REPOSITORY_CONSTANTS.Variables.Demographics,
          REPOSITORY_CONSTANTS.Labels.Demographics,
          {
            ...create
          }
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

  async updateDemographics(id: string, demographics: DemographicsDTO) {
    const update = this._helper.generateUpdateObject(demographics);
    const query = this._query
      .queryBuilder()
      .match([
        node(
          REPOSITORY_CONSTANTS.Variables.Demographics,
          REPOSITORY_CONSTANTS.Labels.Demographics,
          {
            id
          }
        )
      ])
      .set({ values: { ...update } })
      .with({
        [`${REPOSITORY_CONSTANTS.Variables.Demographics}`]:
          REPOSITORY_CONSTANTS.Variables.Output
      })
      .return([REPOSITORY_CONSTANTS.Variables.Output]);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async deleteDemographics(id: string) {
    const query = this._query
      .queryBuilder()
      .match([
        node(
          REPOSITORY_CONSTANTS.Variables.Demographics,
          REPOSITORY_CONSTANTS.Labels.Demographics,
          {
            id
          }
        )
      ])
      .detachDelete([REPOSITORY_CONSTANTS.Variables.Demographics])
      .with({
        [`${REPOSITORY_CONSTANTS.Variables.Demographics}`]:
          REPOSITORY_CONSTANTS.Variables.Output
      })
      .return([REPOSITORY_CONSTANTS.Variables.Output]);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async associateDemographicsWithPerson(
    demographicsId: string,
    personId: string
  ) {
    const query = this._query
      .queryBuilder()
      .match([
        node(
          REPOSITORY_CONSTANTS.Variables.Demographics,
          REPOSITORY_CONSTANTS.Labels.Demographics,
          {
            id: demographicsId
          }
        )
      ])
      .with([REPOSITORY_CONSTANTS.Variables.Demographics])
      .match([
        node(
          REPOSITORY_CONSTANTS.Variables.Person,
          REPOSITORY_CONSTANTS.Labels.Person,
          { id: personId }
        )
      ])
      .with([
        REPOSITORY_CONSTANTS.Variables.Demographics,
        REPOSITORY_CONSTANTS.Variables.Person
      ])
      .create([
        node(REPOSITORY_CONSTANTS.Variables.Demographics),
        relation(
          REPOSITORY_CONSTANTS.RelationshipDirection.OUT,
          REPOSITORY_CONSTANTS.Relationships.Demographics,
          REPOSITORY_CONSTANTS.Labels.DemographicsOf
        ),
        node(REPOSITORY_CONSTANTS.Variables.Person)
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

  async checkDemographicsOfRelationship(
    demographicsId: string,
    personId: string
  ) {
    const query = this._query
      .queryBuilder()
      .match([
        node(
          REPOSITORY_CONSTANTS.Variables.Demographics,
          REPOSITORY_CONSTANTS.Labels.Demographics,
          {
            id: demographicsId
          }
        ),
        relation(
          REPOSITORY_CONSTANTS.RelationshipDirection.OUT,
          REPOSITORY_CONSTANTS.Relationships.Demographics,
          REPOSITORY_CONSTANTS.Labels.DemographicsOf
        ),
        node(
          REPOSITORY_CONSTANTS.Variables.Person,
          REPOSITORY_CONSTANTS.Labels.Person,
          { id: personId }
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
}
