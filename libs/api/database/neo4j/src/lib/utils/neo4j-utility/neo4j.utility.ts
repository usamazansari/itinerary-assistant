import { Injectable } from '@nestjs/common';

import { User } from '../../imports/models';
import { Neo4jNode } from '../../models';

@Injectable()
export class Neo4jUtility {
  mapToPerson({ identity, properties }: Neo4jNode<User>) {
    return new User({
      ...properties,
      id: identity,
      dateOfBirth: new Date(
        Object.values(properties.dateOfBirth).join('-')
      )
    });
  }
}
