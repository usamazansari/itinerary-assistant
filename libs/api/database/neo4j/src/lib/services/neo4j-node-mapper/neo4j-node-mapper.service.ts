import { Injectable } from '@nestjs/common';
import type { DateTime } from 'neo4j-driver';

import {
  Address,
  Coordinates,
  Demographics,
  Identification,
  Location,
  Photo,
  Tenure,
  Timezone,
  SocialConnection,
  Person
} from '../../imports/models';
import { Neo4jNode } from '../../models';
import { parseDateTime } from '../../utils';

@Injectable()
export class Neo4jNodeMapperService {
  toAddress({ identity, properties }: Neo4jNode<Address>): Address {
    return new Address({
      ...properties,
      id: identity
    });
  }

  toPerson({ identity, properties }: Neo4jNode<Person>): Person {
    return new Person({
      ...properties,
      id: identity,
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
}
