import { Injectable } from '@nestjs/common';

import { Neo4jOutput } from '../../imports/models';
import { extractEntity, nodeMapper } from '../../imports/utils';

import { Address, Person } from '../../models';
import {
  generateCreateAddressObject,
  generateReadPersonObject
} from '../../utils';

@Injectable()
export class PersonHelper {
  extractAddresses(result: Neo4jOutput<Address>) {
    return extractEntity<Address>(result)
      .map(({ properties }) => generateCreateAddressObject(properties))
      .map(address => nodeMapper(Address, address))
      .at(0);
  }

  extractPeople(result: Neo4jOutput<Person>) {
    return extractEntity<Person>(result)
      .map(({ properties }) => generateReadPersonObject(properties))
      .map(person => nodeMapper(Person, person));
  }
}
