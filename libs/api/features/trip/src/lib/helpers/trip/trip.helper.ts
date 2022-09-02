import { Injectable } from '@nestjs/common';

import { Neo4jOutput, Person } from '../../imports/models';
import {
  extractEntity,
  generateReadPersonObject,
  nodeMapper
} from '../../imports/utils';

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
      .map(properties => generateReadTripObject(properties))
      .map(trip => nodeMapper(Trip, trip));
  }

  extractPeople(result: Neo4jOutput<Person>) {
    return extractEntity<Person>(result)
      .map(properties => generateReadPersonObject(properties))
      .map(person => nodeMapper(Person, person));
  }

  createTripPayload(dto: TripDTO) {
    return generateCreateTripObject(dto);
  }

  updateTripPayload(dto: TripDTO) {
    return generateUpdateTripObject(dto);
  }
}
