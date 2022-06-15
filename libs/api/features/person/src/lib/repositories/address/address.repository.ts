import { Injectable } from '@nestjs/common';
import { node, relation } from 'cypher-query-builder';

import { REPOSITORY_CONSTANTS } from '../../imports/constants';
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
      .match([
        node(
          REPOSITORY_CONSTANTS.Variables.Address,
          REPOSITORY_CONSTANTS.Labels.Address,
          { id }
        )
      ])
      .with({
        [`${REPOSITORY_CONSTANTS.Variables.Address}`]:
          REPOSITORY_CONSTANTS.Variables.Output
      })
      .return([REPOSITORY_CONSTANTS.Variables.Output]);

    console.log({ query: query.toString() });
    const result = query.run();
    return result;
  }

  async getLocation(id = '') {
    const query = this._query
      .queryBuilder()
      .match([
        node(
          REPOSITORY_CONSTANTS.Variables.Address,
          REPOSITORY_CONSTANTS.Labels.Address,
          { id }
        ),
        relation(
          REPOSITORY_CONSTANTS.RelationshipDirection.OUT,
          REPOSITORY_CONSTANTS.Relationships.Location,
          REPOSITORY_CONSTANTS.Labels.HasLocation
        ),
        node(
          REPOSITORY_CONSTANTS.Variables.Location,
          REPOSITORY_CONSTANTS.Labels.Location
        )
      ])
      .with({
        [`${REPOSITORY_CONSTANTS.Variables.Location}`]:
          REPOSITORY_CONSTANTS.Variables.Output
      })
      .return([REPOSITORY_CONSTANTS.Variables.Output]);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async getResidents(id = '') {
    const query = this._query
      .queryBuilder()
      .match([
        node(
          REPOSITORY_CONSTANTS.Variables.Address,
          REPOSITORY_CONSTANTS.Labels.Address,
          { id }
        ),
        relation(
          REPOSITORY_CONSTANTS.RelationshipDirection.OUT,
          REPOSITORY_CONSTANTS.Relationships.Resident,
          REPOSITORY_CONSTANTS.Labels.AddressOf
        ),
        node(
          REPOSITORY_CONSTANTS.Variables.Person,
          REPOSITORY_CONSTANTS.Labels.Person
        )
      ])
      .with({
        [`${REPOSITORY_CONSTANTS.Variables.Person}`]:
          REPOSITORY_CONSTANTS.Variables.Output
      })
      .return([REPOSITORY_CONSTANTS.Variables.Output]);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async createAddress(id = '', address = new AddressDTO({})) {
    const create = this._helper.generateCreateObject({ id, address });
    const query = this._query
      .queryBuilder()
      .create(
        node(
          REPOSITORY_CONSTANTS.Variables.Address,
          REPOSITORY_CONSTANTS.Labels.Address,
          { ...create }
        )
      )
      .with({
        [`${REPOSITORY_CONSTANTS.Variables.Address}`]:
          REPOSITORY_CONSTANTS.Variables.Output
      })
      .return([REPOSITORY_CONSTANTS.Variables.Output]);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async updateAddress(id = '', address = new AddressDTO({})) {
    const update = this._helper.generateUpdateObject(address);
    const query = this._query
      .queryBuilder()
      .match([
        node(
          REPOSITORY_CONSTANTS.Variables.Address,
          REPOSITORY_CONSTANTS.Labels.Address,
          { id }
        )
      ])
      .set({ values: { ...update } })
      .with({
        [`${REPOSITORY_CONSTANTS.Variables.Address}`]:
          REPOSITORY_CONSTANTS.Variables.Output
      })
      .return([REPOSITORY_CONSTANTS.Variables.Output]);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async deleteAddress(id = '') {
    const query = this._query
      .queryBuilder()
      .match([
        node(
          REPOSITORY_CONSTANTS.Variables.Address,
          REPOSITORY_CONSTANTS.Labels.Address,
          { id }
        )
      ])
      .detachDelete(REPOSITORY_CONSTANTS.Variables.Address)
      .with({
        [`${REPOSITORY_CONSTANTS.Variables.Address}`]:
          REPOSITORY_CONSTANTS.Variables.Output
      })
      .return([REPOSITORY_CONSTANTS.Variables.Output]);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async associateAddressWithPerson(addressId = '', personId = '') {
    const query = this._query
      .queryBuilder()
      .match([
        node(
          REPOSITORY_CONSTANTS.Variables.Address,
          REPOSITORY_CONSTANTS.Labels.Address,
          {
            id: addressId
          }
        )
      ])
      .with([REPOSITORY_CONSTANTS.Variables.Address])
      .match([
        node(
          REPOSITORY_CONSTANTS.Variables.Person,
          REPOSITORY_CONSTANTS.Labels.Person,
          { id: personId }
        )
      ])
      .with([
        REPOSITORY_CONSTANTS.Variables.Address,
        REPOSITORY_CONSTANTS.Variables.Person
      ])
      .create([
        node(REPOSITORY_CONSTANTS.Variables.Address),
        relation(
          REPOSITORY_CONSTANTS.RelationshipDirection.OUT,
          REPOSITORY_CONSTANTS.Relationships.Resident,
          REPOSITORY_CONSTANTS.Labels.AddressOf
        ),
        node(REPOSITORY_CONSTANTS.Variables.Person)
      ])
      .with({
        [`${REPOSITORY_CONSTANTS.Variables.Address}`]:
          REPOSITORY_CONSTANTS.Variables.Output
      })
      .return([REPOSITORY_CONSTANTS.Variables.Output]);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async associateAddressWithLocation(addressId = '', locationId = '') {
    const query = this._query
      .queryBuilder()
      .match([
        node(
          REPOSITORY_CONSTANTS.Variables.Address,
          REPOSITORY_CONSTANTS.Labels.Address,
          {
            id: addressId
          }
        )
      ])
      .with([REPOSITORY_CONSTANTS.Variables.Address])
      .match([
        node(
          REPOSITORY_CONSTANTS.Variables.Location,
          REPOSITORY_CONSTANTS.Labels.Location,
          {
            id: locationId
          }
        )
      ])
      .with([
        REPOSITORY_CONSTANTS.Variables.Address,
        REPOSITORY_CONSTANTS.Variables.Location
      ])
      .create([
        node(REPOSITORY_CONSTANTS.Variables.Address),
        relation(
          REPOSITORY_CONSTANTS.RelationshipDirection.OUT,
          REPOSITORY_CONSTANTS.Relationships.Location,
          REPOSITORY_CONSTANTS.Labels.HasLocation
        ),
        node(REPOSITORY_CONSTANTS.Variables.Location)
      ])
      .with({
        [`${REPOSITORY_CONSTANTS.Variables.Address}`]:
          REPOSITORY_CONSTANTS.Variables.Output
      })
      .return([REPOSITORY_CONSTANTS.Variables.Output]);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async checkAddressOfRelationship(addressId = '', personId = '') {
    const query = this._query
      .queryBuilder()
      .match([
        node(
          REPOSITORY_CONSTANTS.Variables.Address,
          REPOSITORY_CONSTANTS.Labels.Address,
          {
            id: addressId
          }
        ),
        relation(
          REPOSITORY_CONSTANTS.RelationshipDirection.OUT,
          REPOSITORY_CONSTANTS.Relationships.Resident,
          REPOSITORY_CONSTANTS.Labels.AddressOf
        ),
        node(
          REPOSITORY_CONSTANTS.Variables.Person,
          REPOSITORY_CONSTANTS.Labels.Person,
          { id: personId }
        )
      ])
      .return([REPOSITORY_CONSTANTS.Relationships.Resident]);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }

  async checkHasLocationRelationship(addressId = '', locationId = '') {
    const query = this._query
      .queryBuilder()
      .match([
        node(
          REPOSITORY_CONSTANTS.Variables.Address,
          REPOSITORY_CONSTANTS.Labels.Address,
          {
            id: addressId
          }
        ),
        relation(
          REPOSITORY_CONSTANTS.RelationshipDirection.OUT,
          REPOSITORY_CONSTANTS.Relationships.Location,
          REPOSITORY_CONSTANTS.Labels.HasLocation
        ),
        node(
          REPOSITORY_CONSTANTS.Variables.Location,
          REPOSITORY_CONSTANTS.Labels.Location,
          {
            id: locationId
          }
        )
      ])
      .return([REPOSITORY_CONSTANTS.Relationships.Location]);

    console.log({ query: query.toString() });
    const result = await query.run();
    return result;
  }
}
