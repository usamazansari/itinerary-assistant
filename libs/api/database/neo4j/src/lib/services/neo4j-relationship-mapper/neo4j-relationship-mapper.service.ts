import { Injectable } from '@nestjs/common';

import {
  AddressRelationship,
  AddressRelationshipData,
  CoordinatesRelationship,
  CoordinatesRelationshipData,
  DemographicsRelationship,
  DemographicsRelationshipData,
  IdentificationRelationship,
  IdentificationRelationshipData,
  LocationRelationship,
  LocationRelationshipData,
  SocialConnectionRelationship,
  SocialConnectionRelationshipData,
  TenureRelationship,
  TenureRelationshipData
} from '../../imports/models';
import { Neo4jRelationship } from '../../models';

@Injectable()
export class Neo4jRelationshipMapperService {
  // TODO: Use relationship.id instead of internal Neo4j <id>
  toAddressRelationship({
    identity,
    start,
    end,
    properties
  }: Neo4jRelationship<AddressRelationshipData>): AddressRelationship {
    return new AddressRelationship({
      id: identity,
      start: start,
      end: end,
      data: new AddressRelationshipData({ ...properties })
    });
  }

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

  toLocationRelationship({
    identity,
    start,
    end,
    properties
  }: Neo4jRelationship<LocationRelationshipData>): LocationRelationship {
    return new LocationRelationship({
      id: identity,
      start: start,
      end: end,
      data: properties
    });
  }

  toCoordinatesRelationship({
    identity,
    start,
    end,
    properties
  }: Neo4jRelationship<CoordinatesRelationshipData>): CoordinatesRelationship {
    return new CoordinatesRelationship({
      id: identity,
      start: start,
      end: end,
      data: properties
    });
  }

  toIdentificationRelationship({
    identity,
    start,
    end,
    properties
  }: Neo4jRelationship<IdentificationRelationshipData>): IdentificationRelationship {
    return new IdentificationRelationship({
      id: identity,
      start: start,
      end: end,
      data: properties
    });
  }

  toTenureRelationship({
    identity,
    start,
    end,
    properties
  }: Neo4jRelationship<TenureRelationshipData>): TenureRelationship {
    return new TenureRelationship({
      id: identity,
      start: start,
      end: end,
      data: properties
    });
  }
}
