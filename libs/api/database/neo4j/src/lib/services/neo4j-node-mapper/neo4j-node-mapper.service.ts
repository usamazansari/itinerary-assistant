import { Injectable } from '@nestjs/common';
import type { DateTime } from 'neo4j-driver';

import {
  Address,
  Coordinates,
  Demographics,
  Identification,
  Location,
  Tenure,
  Timezone,
  SocialConnection,
  Person
} from '../../imports/models';
import { Neo4jNode } from '../../models';
import { parseDateTime } from '../../utils';

@Injectable()
export class Neo4jNodeMapperService {
  // TODO: Use node.id instead of internal Neo4j <id>
  toAddress({ identity, properties }: Neo4jNode<Address>): Address {
    return new Address({
      ...properties,
      id: identity
    });
  }

  toPerson({ properties }: Neo4jNode<Person>): Person {
    return new Person({
      ...properties,
      dateOfBirth: parseDateTime((<unknown>properties.dateOfBirth) as DateTime)
    });
  }

  toDemographics({
    identity,
    properties
  }: Neo4jNode<Demographics>): Demographics {
    return new Demographics({
      ...properties,
      id: identity
    });
  }

  toSocialConnection({
    identity,
    properties
  }: Neo4jNode<SocialConnection>): SocialConnection {
    return new SocialConnection({
      ...properties,
      id: identity
    });
  }

  toLocation({ identity, properties }: Neo4jNode<Location>): Location {
    return new Location({
      ...properties,
      id: identity
    });
  }

  toCoordinates({ identity, properties }: Neo4jNode<Coordinates>): Coordinates {
    return new Coordinates({
      ...properties,
      id: identity
    });
  }

  toTimezone({ identity, properties }: Neo4jNode<Timezone>): Timezone {
    return new Timezone({
      ...properties,
      id: identity
    });
  }

  toIdentification({
    identity,
    properties
  }: Neo4jNode<Identification>): Identification {
    return new Identification({
      ...properties,
      id: identity
    });
  }

  toTenure({ identity, properties }: Neo4jNode<Tenure>): Tenure {
    return new Tenure({
      ...properties,
      id: identity
    });
  }
}
