import { Injectable } from '@nestjs/common';
import { node, relation } from 'cypher-query-builder';

import { REPOSITORY_CONSTANTS } from '../../imports/constants';
import { Neo4jOutput } from '../../imports/models';
import { QueryRepositoryService } from '../../imports/services';

import {
  Address,
  AddressDTO,
  AddressPersonAssociation,
  Person
} from '../../models';

@Injectable()
export class AddressRepository {
  constructor(private _query: QueryRepositoryService) {}

  async getAddress(id = '') {
    const query = this._query
      .queryBuilder()
      .match([
        node(
          REPOSITORY_CONSTANTS.VARIABLE.Address,
          REPOSITORY_CONSTANTS.LABEL.Address,
          { id }
        )
      ])
      .with({
        [`${REPOSITORY_CONSTANTS.VARIABLE.Address}`]:
          REPOSITORY_CONSTANTS.VARIABLE.Output
      })
      .return([REPOSITORY_CONSTANTS.VARIABLE.Output]);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result as Neo4jOutput<Address>;
  }

  async createAddress(dto = new AddressDTO({})) {
    const query = this._query
      .queryBuilder()
      .create(
        node(
          REPOSITORY_CONSTANTS.VARIABLE.Address,
          REPOSITORY_CONSTANTS.LABEL.Address,
          { ...dto }
        )
      )
      .with({
        [`${REPOSITORY_CONSTANTS.VARIABLE.Address}`]:
          REPOSITORY_CONSTANTS.VARIABLE.Output
      })
      .return([REPOSITORY_CONSTANTS.VARIABLE.Output]);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result as Neo4jOutput<Address>;
  }

  async updateAddress(id = '', update = new AddressDTO({})) {
    const query = this._query
      .queryBuilder()
      .match([
        node(
          REPOSITORY_CONSTANTS.VARIABLE.Address,
          REPOSITORY_CONSTANTS.LABEL.Address,
          { id }
        )
      ])
      .set({ values: { ...update } })
      .with({
        [`${REPOSITORY_CONSTANTS.VARIABLE.Address}`]:
          REPOSITORY_CONSTANTS.VARIABLE.Output
      })
      .return([REPOSITORY_CONSTANTS.VARIABLE.Output]);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result as Neo4jOutput<Address>;
  }

  async deleteAddress(id = '') {
    const query = this._query
      .queryBuilder()
      .match([
        node(
          REPOSITORY_CONSTANTS.VARIABLE.Address,
          REPOSITORY_CONSTANTS.LABEL.Address,
          { id }
        )
      ])
      .detachDelete(REPOSITORY_CONSTANTS.VARIABLE.Address)
      .with({
        [`${REPOSITORY_CONSTANTS.VARIABLE.Address}`]:
          REPOSITORY_CONSTANTS.VARIABLE.Output
      })
      .return([REPOSITORY_CONSTANTS.VARIABLE.Output]);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result as Neo4jOutput<Address>;
  }

  async getResidents(id = '') {
    const query = this._query
      .queryBuilder()
      .match([
        node(
          REPOSITORY_CONSTANTS.VARIABLE.Address,
          REPOSITORY_CONSTANTS.LABEL.Address,
          { id }
        ),
        relation(
          REPOSITORY_CONSTANTS.RELATIONSHIP_DIRECTION.OUT,
          REPOSITORY_CONSTANTS.RELATIONSHIP.Resident,
          REPOSITORY_CONSTANTS.LABEL.AddressOf
        ),
        node(
          REPOSITORY_CONSTANTS.VARIABLE.Person,
          REPOSITORY_CONSTANTS.LABEL.Person
        )
      ])
      .with({
        [`${REPOSITORY_CONSTANTS.VARIABLE.Person}`]:
          REPOSITORY_CONSTANTS.VARIABLE.Output
      })
      .return([REPOSITORY_CONSTANTS.VARIABLE.Output]);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result as Neo4jOutput<Person>;
  }

  async associateAddressWithPerson({
    addressId = '',
    personId = ''
  }: AddressPersonAssociation) {
    const query = this._query
      .queryBuilder()
      .match([
        node(
          REPOSITORY_CONSTANTS.VARIABLE.Address,
          REPOSITORY_CONSTANTS.LABEL.Address,
          {
            id: addressId
          }
        )
      ])
      .with([REPOSITORY_CONSTANTS.VARIABLE.Address])
      .match([
        node(
          REPOSITORY_CONSTANTS.VARIABLE.Person,
          REPOSITORY_CONSTANTS.LABEL.Person,
          { id: personId }
        )
      ])
      .with([
        REPOSITORY_CONSTANTS.VARIABLE.Address,
        REPOSITORY_CONSTANTS.VARIABLE.Person
      ])
      .create([
        node(REPOSITORY_CONSTANTS.VARIABLE.Address),
        relation(
          REPOSITORY_CONSTANTS.RELATIONSHIP_DIRECTION.OUT,
          REPOSITORY_CONSTANTS.RELATIONSHIP.Resident,
          REPOSITORY_CONSTANTS.LABEL.AddressOf
        ),
        node(REPOSITORY_CONSTANTS.VARIABLE.Person)
      ])
      .with({
        [`${REPOSITORY_CONSTANTS.VARIABLE.Address}`]:
          REPOSITORY_CONSTANTS.VARIABLE.Output
      })
      .return([REPOSITORY_CONSTANTS.VARIABLE.Output]);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result as Neo4jOutput<Address>;
  }

  async checkAddressOfRelationship({
    addressId = '',
    personId = ''
  }: AddressPersonAssociation) {
    const query = this._query
      .queryBuilder()
      .match([
        node(
          REPOSITORY_CONSTANTS.VARIABLE.Address,
          REPOSITORY_CONSTANTS.LABEL.Address,
          {
            id: addressId
          }
        ),
        relation(
          REPOSITORY_CONSTANTS.RELATIONSHIP_DIRECTION.OUT,
          REPOSITORY_CONSTANTS.RELATIONSHIP.Resident,
          REPOSITORY_CONSTANTS.LABEL.AddressOf
        ),
        node(
          REPOSITORY_CONSTANTS.VARIABLE.Person,
          REPOSITORY_CONSTANTS.LABEL.Person,
          { id: personId }
        )
      ])
      .return([REPOSITORY_CONSTANTS.RELATIONSHIP.Resident]);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result as Neo4jOutput<Address>;
  }
}
