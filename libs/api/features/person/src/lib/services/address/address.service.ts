import { Injectable } from '@nestjs/common';

import {
  Address,
  AddressDTO,
  Location,
  Neo4jNode,
  Person
} from '../../imports/models';

import { ExtractorService } from '../../helpers';
import { AddressRepository } from '../../repositories';

@Injectable()
export class AddressService {
  constructor(
    private _repository: AddressRepository,
    private _extractor: ExtractorService
  ) {}

  async getAddress(id = ''): Promise<Address> {
    const result = await this._repository.getAddress(id);
    return (
      this._extractor
        .extractAddress((<unknown>result) as { address: Neo4jNode<Address> }[])
        .at(0) ?? new Address({ id: '' })
    );
  }

  async getLocation(id = ''): Promise<Location> {
    const result = await this._repository.getLocation(id);
    return (
      this._extractor
        .extractLocation(
          (<unknown>result) as { location: Neo4jNode<Location> }[]
        )
        .at(0) ?? new Location({ id: '' })
    );
  }

  async getResidents(id = ''): Promise<Person[]> {
    const result = await this._repository.getResidents(id);
    return (
      this._extractor.extractPeople(
        (<unknown>result) as { person: Neo4jNode<Person> }[]
      ) ?? []
    );
  }

  async createAddress(address: AddressDTO): Promise<Address> {
    const id = new Address({ ...address }).generateUUID();
    const result = await this._repository.createAddress(id, address);
    return (
      this._extractor
        .extractAddress((<unknown>result) as { address: Neo4jNode<Address> }[])
        .at(0) ?? new Address({ id: '' })
    );
  }

  async associateAddressWithPerson(
    addressId: string,
    personId: string
  ): Promise<Address> {
    const check = await this.checkExistingRelationship(addressId, personId);
    const result = check
      ? await this._repository.getAddress(addressId)
      : await this._repository.associateAddressWithPerson(addressId, personId);
    return (
      this._extractor
        .extractAddress((<unknown>result) as { address: Neo4jNode<Address> }[])
        .at(0) ?? new Address({ id: '' })
    );
  }

  async checkExistingRelationship(
    addressId: string,
    personId: string
  ): Promise<boolean> {
    const result = await this._repository.checkExistingRelationship(
      addressId,
      personId
    );
    return !!result.length;
  }

  async updateAddress(id: string, address: AddressDTO): Promise<Address> {
    const result = await this._repository.updateAddress(id, address);
    return (
      this._extractor
        .extractAddress((<unknown>result) as { address: Neo4jNode<Address> }[])
        .at(0) ?? new Address({ id: '' })
    );
  }

  async deleteAddress(id: string): Promise<Address> {
    const result = await this._repository.deleteAddress(id);
    return (
      this._extractor
        .extractAddress((<unknown>result) as { address: Neo4jNode<Address> }[])
        .at(0) ?? new Address({ id: '' })
    );
  }
}
