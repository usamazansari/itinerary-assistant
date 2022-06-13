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
      .return(['address']);

    console.log({ query: query.toString() });
    const result = query.run();
    return result;
  }

  async getLocation(id = '') {
    const query = this._query
      .queryBuilder()
      .match([
        node('address', 'ADDRESS', { id }),
        relation('in', 'locationRelationship', 'LOCATION_OF'),
        node('location', 'LOCATION')
      ])
      .return(['location']);

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
      .return(['person']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async createAddress(id = '', address = new AddressDTO({})) {
    const create = this._helper.generateCreateObject({ id, address });
    const query = this._query
      .queryBuilder()
      .create(node('address', 'ADDRESS', { ...create }))
      .return(['address']);

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
      .return(['address']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async checkExistingRelationship(addressId = '', personId = '') {
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

  async updateAddress(id = '', address = new AddressDTO({})) {
    const update = this._helper.generateUpdateObject(address);
    const query = this._query
      .queryBuilder()
      .match([node('address', 'ADDRESS', { id })])
      .set({ values: { ...update } })
      .return(['address']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async deleteAddress(id = '') {
    const query = this._query
      .queryBuilder()
      .match([node('address', 'ADDRESS', { id })])
      .detachDelete('address')
      .return(['address']);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }
}
