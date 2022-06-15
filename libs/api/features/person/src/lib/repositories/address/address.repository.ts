import { Injectable } from '@nestjs/common';
import { node, relation } from 'cypher-query-builder';

import { AddressDTO } from '../../imports/models';
import { Neo4jQueryRepositoryService } from '../../imports/services';

import { AddressHelper } from '../../helpers';

@Injectable()
export class AddressRepository {
  constructor(
    private _query: Neo4jQueryRepositoryService,
    private _helper: AddressHelper
  ) {}

  getAddress(id = '') {
    const query = this._query
      .queryBuilder()
      .match([node('address', 'ADDRESS', { id })])
      .with({ address: 'output' })
      .return(['output']);

    console.log({ query: query.toString() });
    const result = query.run();
    return result;
  }

  async getLocation(id = '') {
    const query = this._query
      .queryBuilder()
      .match([
        node('address', 'ADDRESS', { id }),
        relation('out', 'locationRelationship', 'HAS_LOCATION'),
        node('location', 'LOCATION')
      ])
      .with({ location: 'output' })
      .return(['output']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async getResidents(id = '') {
    const query = this._query
      .queryBuilder()
      .match([
        node('address', 'ADDRESS', { id }),
        relation('out', 'residentRelationship', 'ADDRESS_OF'),
        node('person', 'PERSON')
      ])
      .with({ person: 'output' })
      .return(['output']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async createAddress(id = '', address = new AddressDTO({})) {
    const create = this._helper.generateCreateObject({ id, address });
    const query = this._query
      .queryBuilder()
      .create(node('address', 'ADDRESS', { ...create }))
      .with({ address: 'output' })
      .return(['output']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async updateAddress(id = '', address = new AddressDTO({})) {
    const update = this._helper.generateUpdateObject(address);
    const query = this._query
      .queryBuilder()
      .match([node('address', 'ADDRESS', { id })])
      .set({ values: { ...update } })
      .with({ address: 'output' })
      .return(['output']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async deleteAddress(id = '') {
    const query = this._query
      .queryBuilder()
      .match([node('address', 'ADDRESS', { id })])
      .detachDelete('address')
      .with({ address: 'output' })
      .return(['output']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async associateAddressWithPerson(addressId = '', personId = '') {
    const query = this._query
      .queryBuilder()
      .match([node('address', 'ADDRESS', { id: addressId })])
      .with(['address'])
      .match([node('person', 'PERSON', { id: personId })])
      .with(['address', 'person'])
      .create([
        node('address'),
        relation('out', 'residentRelationship', 'ADDRESS_OF'),
        node('person')
      ])
      .with({ address: 'output' })
      .return(['output']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async associateAddressWithLocation(addressId = '', locationId = '') {
    const query = this._query
      .queryBuilder()
      .match([node('address', 'ADDRESS', { id: addressId })])
      .with(['address'])
      .match([node('location', 'LOCATION', { id: locationId })])
      .with(['address', 'location'])
      .create([
        node('address'),
        relation('out', 'locationRelationship', 'HAS_LOCATION'),
        node('location')
      ])
      .with({ address: 'output' })
      .return(['output']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async checkAddressOfRelationship(addressId = '', personId = '') {
    const query = this._query
      .queryBuilder()
      .match([
        node('address', 'ADDRESS', { id: addressId }),
        relation('out', 'residentRelationship', 'ADDRESS_OF'),
        node('person', 'PERSON', { id: personId })
      ])
      .return(['residentRelationship']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async checkHasLocationRelationship(addressId = '', locationId = '') {
    const query = this._query
      .queryBuilder()
      .match([
        node('address', 'ADDRESS', { id: addressId }),
        relation('out', 'locationRelationship', 'HAS_LOCATION'),
        node('location', 'LOCATION', { id: locationId })
      ])
      .return(['locationRelationship']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }
}
