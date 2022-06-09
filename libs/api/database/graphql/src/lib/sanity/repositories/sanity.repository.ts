import { Injectable } from '@nestjs/common';
import { node, relation } from 'cypher-query-builder';

import { Neo4jQueryRepositoryService } from '../../imports/services';

@Injectable()
export class SanityRepository {
  constructor(private _query: Neo4jQueryRepositoryService) {}

  async neo4jSanity() {
    const query = this._query
      .queryBuilder()
      .match([
        node('demographics', 'DEMOGRAPHICS'),
        relation('out', 'demographicsRelationship', 'DEMOGRAPHICS_OF'),
        node('person', 'PERSON'),
        relation('in', 'socialConnectionRelationship', 'SOCIAL_CONNECTION_OF'),
        node('socialConnection', 'SOCIAL_CONNECTION')
      ])
      .with([
        'demographics',
        'demographicsRelationship',
        'person',
        'socialConnectionRelationship',
        'socialConnection'
      ])
      .match([
        node('person', 'PERSON'),
        relation('out', 'addressRelationship', 'RESIDES_AT'),
        node('address', 'ADDRESS'),
        relation('in', 'locationRelationship', 'LOCATION_OF'),
        node('location', 'LOCATION')
      ])
      .with([
        'demographics',
        'demographicsRelationship',
        'person',
        'socialConnectionRelationship',
        'socialConnection',
        'addressRelationship',
        'address',
        'locationRelationship',
        'location'
      ])
      .match([
        node('coordinates', 'COORDINATES'),
        relation('out', 'coordinatesRelationship', 'COORDINATES_OF'),
        node('location', 'LOCATION'),
        relation('in', 'timezoneRelationship', 'TIMEZONE_OF'),
        node('timezone', 'TIMEZONE')
      ])
      .with([
        'demographics',
        'demographicsRelationship',
        'person',
        'socialConnectionRelationship',
        'socialConnection',
        'addressRelationship',
        'address',
        'locationRelationship',
        'location',
        'coordinatesRelationship',
        'coordinates',
        'timezoneRelationship',
        'timezone'
      ])
      .match([
        node('person', 'PERSON'),
        relation('in', 'identificationRelationship', 'IDENTIFICATION_OF'),
        node('identification', 'IDENTIFICATION'),
        relation('in', 'validityRelationship', 'TENURE_OF'),
        node('validity', 'TENURE')
      ])
      .return([
        'demographics',
        'demographicsRelationship',
        'person',
        'socialConnectionRelationship',
        'socialConnection',
        'addressRelationship',
        'address',
        'locationRelationship',
        'location',
        'coordinatesRelationship',
        'coordinates',
        'timezoneRelationship',
        'timezone',
        'identificationRelationship',
        'identification',
        'validityRelationship',
        'validity'
      ]);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async getPerson(email: string) {
    const query = this._query
      .queryBuilder()
      .match([node('person', 'PERSON', { ['email']: email })])
      .return(['person']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async getAddress(email: string) {
    const query = this._query
      .queryBuilder()
      .match([
        node('person', 'PERSON', { ['email']: email }),
        relation('out', 'addressRelationship', 'RESIDES_AT'),
        node('address', 'ADDRESS')
      ])
      .return(['address']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }
}
