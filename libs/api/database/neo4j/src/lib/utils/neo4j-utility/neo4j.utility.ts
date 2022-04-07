import { Injectable } from '@nestjs/common';

import {
  Demographics,
  User,
  DemographicsRelationship
} from '../../imports/models';
import { Neo4jNode, Neo4jRelationship } from '../../models';

@Injectable()
export class Neo4jUtility {
  mapToPerson({ identity, properties }: Neo4jNode<User>): User {
    return new User({
      ...properties,
      id: identity,
      dateOfBirth: new Date(Object.values(properties.dateOfBirth).join('-'))
    });
  }

  mapToDemographics({
    identity,
    properties
  }: Neo4jNode<Demographics>): Demographics {
    return new Demographics({
      ...properties,
      id: identity
    });
  }

  mapToDemographicsRelationship({
    identity,
    start,
    end,
    properties
  }: Neo4jRelationship<DemographicsRelationship>): DemographicsRelationship {
    return new DemographicsRelationship({
      data: properties,
      id: identity,
      start,
      end
    });
  }
}
