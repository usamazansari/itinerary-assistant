import { Injectable } from '@nestjs/common';
import { DateTime } from 'neo4j-driver';

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
      dateOfBirth: this.parseDateTime(
        (<unknown>properties.dateOfBirth) as DateTime
      )
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

  parseDateTime(dateTime: DateTime): Date {
    const { year, month, day, hour, minute, second, nanosecond } = dateTime;

    return new Date(
      +year || 1970,
      (+month || 1) - 1,
      +day || 1,
      +hour || 0,
      +minute || 0,
      +second || 0,
      (+nanosecond || 0) / 1000000
    );
  }
}
