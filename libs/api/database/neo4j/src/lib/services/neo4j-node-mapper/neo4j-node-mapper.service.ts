import { Injectable } from '@nestjs/common';
import type { DateTime, Point } from 'neo4j-driver';

import {
  Address,
  Coordinates,
  Demographics,
  Identification,
  Location,
  Tenure,
  SocialConnection,
  Person
} from '../../imports/models';
import { parseFromDateTime, parseFromPoint } from '../../imports/utils';

import { Neo4jNode } from '../../models';

@Injectable()
export class Neo4jNodeMapperService {
  toAddress({ properties }: Neo4jNode<Address>): Address {
    return new Address({ ...properties });
  }

  toPerson({ properties }: Neo4jNode<Person>): Person {
    const { dateOfBirth, ...rest } = properties;
    return !!dateOfBirth
      ? new Person({
          ...rest,
          dateOfBirth: parseFromDateTime((<unknown>dateOfBirth) as DateTime)
        })
      : new Person({ ...rest });
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
    const { latitude, longitude } = parseFromPoint(
      (<unknown>properties.coordinates) as Point<number>
    );
    return new Coordinates({
      ...properties,
      latitude,
      longitude
    });
  }

  toTenure({ properties }: Neo4jNode<Tenure>): Tenure {
    return new Tenure({
      ...properties,
      start: parseFromDateTime((<unknown>properties.start) as DateTime),
      end: parseFromDateTime((<unknown>properties.end) as DateTime)
    });
  }
}
