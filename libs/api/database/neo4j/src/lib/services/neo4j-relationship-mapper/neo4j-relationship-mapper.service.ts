import { Injectable } from '@nestjs/common';

import {
  DemographicsRelationship,
  DemographicsRelationshipData,
  SocialConnectionRelationship,
  SocialConnectionRelationshipData
} from '../../imports/models';
import { Neo4jRelationship } from '../../models';

@Injectable()
export class Neo4jRelationshipMapperService {
  toDemographicsRelationship({
    identity,
    start,
    end,
    properties
  }: Neo4jRelationship<DemographicsRelationshipData>): DemographicsRelationship {
    return new DemographicsRelationship({
      id: identity,
      start: start,
      end: end,
      data: properties
    });
  }

  toSocialConnectionRelationship({
    identity,
    start,
    end,
    properties
  }: Neo4jRelationship<SocialConnectionRelationshipData>): SocialConnectionRelationship {
    return new SocialConnectionRelationship({
      id: identity,
      start: start,
      end: end,
      data: properties
    });
  }
}
