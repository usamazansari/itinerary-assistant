import { Injectable } from '@nestjs/common';
import { node, relation } from 'cypher-query-builder';

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
      .match([node('socialConnection', 'SOCIAL_CONNECTION', { id })])
      .return(['socialConnection']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async createSocialConnection(id = '', socialConnection: SocialConnectionDTO) {
    const create = this._helper.generateCreateObject({ id, socialConnection });
    const query = this._query
      .queryBuilder()
      .create([node('socialConnection', 'SOCIAL_CONNECTION', { ...create })])
      .return(['socialConnection']);

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
      .match([node('socialConnection', 'SOCIAL_CONNECTION', { id })])
      .set({ values: { ...update } })
      .return(['socialConnection']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async deleteSocialConnection(id: string) {
    const query = this._query
      .queryBuilder()
      .match([node('socialConnection', 'SOCIAL_CONNECTION', { id })])
      .detachDelete(['socialConnection'])
      .return(['socialConnection']);

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
        node('socialConnection', 'SOCIAL_CONNECTION', {
          id: socialConnectionId
        })
      ])
      .with(['socialConnection'])
      .match([node('person', 'PERSON', { id: personId })])
      .with(['socialConnection', 'person'])
      .create([
        node('socialConnection'),
        relation('out', 'socialConnectionRelationship', 'SOCIAL_CONNECTION_OF'),
        node('person')
      ])
      .return(['socialConnection']);

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
        node('socialConnection', 'SOCIAL_CONNECTION', {
          id: socialConnectionId
        }),
        relation('out', 'socialConnectionRelationship', 'SOCIAL_CONNECTION_OF'),
        node('person', 'PERSON', { id: personId })
      ])
      .return(['socialConnection']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }
}
