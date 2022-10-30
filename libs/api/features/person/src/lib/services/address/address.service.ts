import { Injectable } from '@nestjs/common';

import { AddressHelper } from '../../helpers';
import { AddressDTO, AddressPersonAssociation } from '../../models';
import { AddressRepository } from '../../repositories';

@Injectable()
export class AddressService {
  constructor(
    private _helper: AddressHelper,
    private _repository: AddressRepository
  ) {}

  async getAddress(id = '') {
    const result = await this._repository.getAddress(id);
    const [response] = this._helper.extractAddresses(result);
    return response;
  }

  async createAddress(dto: AddressDTO) {
    const address = this._helper.createAddressPayload(dto);
    const result = await this._repository.createAddress(address);
    const [response] = this._helper.extractAddresses(result);
    return response;
  }

  async updateAddress(id: string, dto: AddressDTO) {
    const update = this._helper.updateAddressPayload(dto);
    const result = await this._repository.updateAddress(id, update);
    const [response] = this._helper.extractAddresses(result);
    return response;
  }

  async deleteAddress(id: string) {
    const result = await this._repository.deleteAddress(id);
    const [response] = this._helper.extractAddresses(result);
    return response;
  }

  async getResidents(id = '') {
    const result = await this._repository.getResidents(id);
    return this._helper.extractPeople(result);
  }

  async associateAddressWithPerson({
    addressId,
    personId
  }: AddressPersonAssociation) {
    const check = await this.checkAddressOfRelationship({
      addressId,
      personId
    });
    const result = check
      ? await this._repository.getAddress(addressId)
      : await this._repository.associateAddressWithPerson({
          addressId,
          personId
        });
    const [response] = this._helper.extractAddresses(result);
    return response;
  }

  async checkAddressOfRelationship({
    addressId,
    personId
  }: AddressPersonAssociation) {
    const result = await this._repository.checkAddressOfRelationship({
      addressId,
      personId
    });
    return !!result.length;
  }
}
