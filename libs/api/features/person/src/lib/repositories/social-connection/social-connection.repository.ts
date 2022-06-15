import { Injectable } from '@nestjs/common';
import { node, relation } from 'cypher-query-builder';

import { REPOSITORY_CONSTANTS } from '../../imports/constants';
import { SocialConnectionDTO } from '../../imports/models';
import { Neo4jQueryRepositoryService } from '../../imports/services';

import { SocialConnectionHelper } from '../../helpers';

@Injectable()
export class SocialConnectionRepository {
  constructor(
    private _query: Neo4jQueryRepositoryService,
    private _helper: SocialConnectionHelper
  ) {}

  async getSocialConnection(id = '') {
    const query = this._query
      .queryBuilder()
      .match([
        node(
          REPOSITORY_CONSTANTS.Variables.SocialConnection,
          REPOSITORY_CONSTANTS.Labels.SocialConnection,
          { id }
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

  async createSocialConnection(id = '', socialConnection: SocialConnectionDTO) {
    const create = this._helper.generateCreateObject({ id, socialConnection });
    const query = this._query
      .queryBuilder()
      .create([
        node(
          REPOSITORY_CONSTANTS.Variables.SocialConnection,
          REPOSITORY_CONSTANTS.Labels.SocialConnection,
          { ...create }
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

  async updateSocialConnection(
    id: string,
    socialConnection: SocialConnectionDTO
  ) {
    const update = this._helper.generateUpdateObject(socialConnection);
    const query = this._query
      .queryBuilder()
      .match([
        node(
          REPOSITORY_CONSTANTS.Variables.SocialConnection,
          REPOSITORY_CONSTANTS.Labels.SocialConnection,
          { id }
        )
      ])
      .set({ values: { ...update } })
      .with({
        [`${REPOSITORY_CONSTANTS.Variables.SocialConnection}`]:
          REPOSITORY_CONSTANTS.Variables.Output
      })
      .return([REPOSITORY_CONSTANTS.Variables.Output]);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async deleteSocialConnection(id: string) {
    const query = this._query
      .queryBuilder()
      .match([
        node(
          REPOSITORY_CONSTANTS.Variables.SocialConnection,
          REPOSITORY_CONSTANTS.Labels.SocialConnection,
          { id }
        )
      ])
      .detachDelete([REPOSITORY_CONSTANTS.Variables.SocialConnection])
      .with({
        [`${REPOSITORY_CONSTANTS.Variables.SocialConnection}`]:
          REPOSITORY_CONSTANTS.Variables.Output
      })
      .return([REPOSITORY_CONSTANTS.Variables.Output]);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async associateSocialConnectionWithPerson(
    socialConnectionId: string,
    personId: string
  ) {
    const query = this._query
      .queryBuilder()
      .match([
        node(
          REPOSITORY_CONSTANTS.Variables.SocialConnection,
          REPOSITORY_CONSTANTS.Labels.SocialConnection,
          {
            id: socialConnectionId
          }
        )
      ])
      .with([REPOSITORY_CONSTANTS.Variables.SocialConnection])
      .match([
        node(
          REPOSITORY_CONSTANTS.Variables.Person,
          REPOSITORY_CONSTANTS.Labels.Person,
          { id: personId }
        )
      ])
      .with([
        REPOSITORY_CONSTANTS.Variables.SocialConnection,
        REPOSITORY_CONSTANTS.Variables.Person
      ])
      .create([
        node(REPOSITORY_CONSTANTS.Variables.SocialConnection),
        relation(
          REPOSITORY_CONSTANTS.RelationshipDirection.OUT,
          REPOSITORY_CONSTANTS.Relationships.SocialConnection,
          REPOSITORY_CONSTANTS.Labels.SocialConnectionOf
        ),
        node(REPOSITORY_CONSTANTS.Variables.Person)
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

  async checkSocialConnectionOfRelationship(
    socialConnectionId: string,
    personId: string
  ) {
    const query = this._query
      .queryBuilder()
      .match([
        node(
          REPOSITORY_CONSTANTS.Variables.SocialConnection,
          REPOSITORY_CONSTANTS.Labels.SocialConnection,
          {
            id: socialConnectionId
          }
        ),
        relation(
          REPOSITORY_CONSTANTS.RelationshipDirection.OUT,
          REPOSITORY_CONSTANTS.Relationships.SocialConnection,
          REPOSITORY_CONSTANTS.Labels.SocialConnectionOf
        ),
        node(
          REPOSITORY_CONSTANTS.Variables.Person,
          REPOSITORY_CONSTANTS.Labels.Person,
          { id: personId }
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
}
