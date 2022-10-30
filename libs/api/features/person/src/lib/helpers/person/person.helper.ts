import { Injectable } from '@nestjs/common';

import { Neo4jOutput, Trip } from '../../imports/models';
import {
  extractEntity,
  generateReadTripObject,
  nodeMapper
} from '../../imports/utils';

import { Address, Person, PersonDTO } from '../../models';
import {
  generateCreatePersonObject,
  generateReadAddressObject,
  generateReadPersonObject,
  generateUpdatePersonObject
} from '../../utils';

@Injectable()
export class PersonHelper {
  extractAddresses(result: Neo4jOutput<Address>) {
    return extractEntity<Address>(result)
      .map(properties => generateReadAddressObject(properties))
      .map(address => nodeMapper(Address, address));
  }

  extractPeople(result: Neo4jOutput<Person>) {
    return extractEntity<Person>(result)
      .map(properties => generateReadPersonObject(properties))
      .map(person => nodeMapper(Person, person));
  }

  extractTrips(result: Neo4jOutput<Trip>) {
    return extractEntity<Trip>(result)
      .map(properties => generateReadTripObject(properties))
      .map(trip => nodeMapper(Trip, trip));
  }

  createPersonPayload(dto: PersonDTO) {
    return generateCreatePersonObject(dto);
  }

  updatePersonPayload(dto: PersonDTO) {
    return generateUpdatePersonObject(dto);
  }
}
