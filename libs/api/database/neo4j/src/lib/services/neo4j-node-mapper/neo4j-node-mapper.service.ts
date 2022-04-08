import { Injectable } from '@nestjs/common';
import type { DateTime } from 'neo4j-driver';

import { Demographics, SocialConnection, User } from '../../imports/models';
import { Neo4jNode } from '../../models';
import { parseDateTime } from '../../utils';

@Injectable()
export class Neo4jNodeMapperService {
  toPerson({ identity, properties }: Neo4jNode<User>): User {
    return new User({
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
