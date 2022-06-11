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
  toAddress({ properties }: Neo4jNode<Address>): Address {
    return new Address({ ...properties });
  }

  toPerson({ properties }: Neo4jNode<Person>): Person {
    return new Person({
      ...properties,
      dateOfBirth: parseDateTime((<unknown>properties.dateOfBirth) as DateTime)
    });
  }

  toDemographics({ properties }: Neo4jNode<Demographics>): Demographics {
    return new Demographics({ ...properties });
  }

  toIdentification({ properties }: Neo4jNode<Identification>): Identification {
    return new Identification({ ...properties });
  }

  toSocialConnection({
    properties
  }: Neo4jNode<SocialConnection>): SocialConnection {
    return new SocialConnection({ ...properties });
  }

  toLocation({ properties }: Neo4jNode<Location>): Location {
    return new Location({ ...properties });
  }

  toCoordinates({ properties }: Neo4jNode<Coordinates>): Coordinates {
    return new Coordinates({ ...properties });
  }

  toTimezone({ properties }: Neo4jNode<Timezone>): Timezone {
    return new Timezone({ ...properties });
  }

  toTenure({ properties }: Neo4jNode<Tenure>): Tenure {
    return new Tenure({
      ...properties,
      start: parseDateTime((<unknown>properties.start) as DateTime),
      end: parseDateTime((<unknown>properties.end) as DateTime)
    });
  }
}
