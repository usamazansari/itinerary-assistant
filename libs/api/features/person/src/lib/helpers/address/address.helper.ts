import { Injectable } from '@nestjs/common';

import { Neo4jOutput } from '../../imports/models';
import { extractEntity, nodeMapper } from '../../imports/utils';

import { Address, AddressDTO, Person } from '../../models';
import {
  generateCreateAddressObject,
  generateReadAddressObject,
  generateReadPersonObject,
  generateUpdateAddressObject
} from '../../utils';

@Injectable()
export class AddressHelper {
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

  createAddressPayload(dto: AddressDTO) {
    return generateCreateAddressObject(dto);
  }

  updateAddressPayload(dto: AddressDTO) {
    return generateUpdateAddressObject(dto);
  }
}
