import { Injectable } from '@nestjs/common';

import { Neo4jOutput } from '../../imports/models';
import { extractEntity, nodeMapper } from '../../imports/utils';

import { Trip, TripDTO } from '../../models';
import {
  generateCreateTripObject,
  generateReadTripObject,
  generateUpdateTripObject
} from '../../utils';

@Injectable()
export class TripHelper {
  extractTrips(result: Neo4jOutput<Trip>) {
    return extractEntity<Trip>(result)
      .map(({ properties }) => generateReadTripObject(properties))
      .map(trip => nodeMapper(Trip, trip));
  }

  createTripPayload(dto: TripDTO) {
    return generateCreateTripObject(dto);
  }

  updateTripPayload(dto: TripDTO) {
    return generateUpdateTripObject(dto);
  }
}
