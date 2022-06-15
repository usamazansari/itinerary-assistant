import { Injectable } from '@nestjs/common';

import {
  Address,
  AddressDTO,
  Location,
  Neo4jOutput,
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
      this._extractor.extractAddress(result as Neo4jOutput<Address>).at(0) ??
      new Address({ id: '' })
    );
  }

  async getLocation(id = ''): Promise<Location> {
    const result = await this._repository.getLocation(id);
    return (
      this._extractor.extractLocation(result as Neo4jOutput<Location>).at(0) ??
      new Location({ id: '' })
    );
  }

  async getResidents(id = ''): Promise<Person[]> {
    const result = await this._repository.getResidents(id);
    return this._extractor.extractPeople(result as Neo4jOutput<Person>) ?? [];
  }

  async createAddress(address: AddressDTO): Promise<Address> {
    const id = new Address({ ...address }).generateUUID();
    const result = await this._repository.createAddress(id, address);
    return (
      this._extractor.extractAddress(result as Neo4jOutput<Address>).at(0) ??
      new Address({ id: '' })
    );
  }

  async updateAddress(id: string, address: AddressDTO): Promise<Address> {
    const result = await this._repository.updateAddress(id, address);
    return (
      this._extractor.extractAddress(result as Neo4jOutput<Address>).at(0) ??
      new Address({ id: '' })
    );
  }

  async deleteAddress(id: string): Promise<Address> {
    const result = await this._repository.deleteAddress(id);
    return (
      this._extractor.extractAddress(result as Neo4jOutput<Address>).at(0) ??
      new Address({ id: '' })
    );
  }

  async associateAddressWithPerson(
    addressId: string,
    personId: string
  ): Promise<Address> {
    const check = await this.checkAddressOfRelationship(addressId, personId);
    const result = check
      ? await this._repository.getAddress(addressId)
      : await this._repository.associateAddressWithPerson(addressId, personId);
    return (
      this._extractor.extractAddress(result as Neo4jOutput<Address>).at(0) ??
      new Address({ id: '' })
    );
  }

  async associateAddressWithLocation(
    addressId: string,
    locationId: string
  ): Promise<Address> {
    const check = await this.checkHasLocationRelationship(
      addressId,
      locationId
    );
    const result = check
      ? await this._repository.getAddress(addressId)
      : await this._repository.associateAddressWithLocation(
          addressId,
          locationId
        );
    return (
      this._extractor.extractAddress(result as Neo4jOutput<Address>).at(0) ??
      new Address({ id: '' })
    );
  }

  async checkAddressOfRelationship(
    addressId: string,
    personId: string
  ): Promise<boolean> {
    const result = await this._repository.checkAddressOfRelationship(
      addressId,
      personId
    );
    return !!result.length;
  }

  async checkHasLocationRelationship(
    addressId: string,
    locationId: string
  ): Promise<boolean> {
    const result = await this._repository.checkHasLocationRelationship(
      addressId,
      locationId
    );
    return !!result.length;
  }
}
