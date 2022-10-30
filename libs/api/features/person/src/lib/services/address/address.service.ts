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

  async getAddresses() {
    const result = await this._repository.getAddresses();
    const response = this._helper.extractAddresses(result);

    if (!response?.length)
      throw new Error('No Addresses found in the database.');
    return response;
  }

  async getAddress(id = '') {
    const result = await this._repository.getAddress(id);
    const [response] = this._helper.extractAddresses(result);

    if (!response)
      throw new Error(
        `Cannot fetch the Address having id: '${id}'. The address might not exist in the database.`
      );
    return response;
  }

  async createAddress(dto: AddressDTO) {
    const address = this._helper.createAddressPayload(dto);
    const result = await this._repository.createAddress(address);
    const [response] = this._helper.extractAddresses(result);

    if (!response) throw new Error(`Cannot create the new Address`);
    return response;
  }

  async updateAddress(id = '', dto: AddressDTO) {
    const update = this._helper.updateAddressPayload(dto);
    const result = await this._repository.updateAddress(id, update);
    const [response] = this._helper.extractAddresses(result);

    if (!response)
      throw new Error(
        `Cannot update the Address having id: '${id}'. The address might not exist in the database.`
      );
    return response;
  }

  async deleteAddress(id = '') {
    const result = await this._repository.deleteAddress(id);
    const [response] = this._helper.extractAddresses(result);

    if (!response)
      throw new Error(
        `Cannot delete the Address having id: '${id}'. The address might not exist in the database.`
      );
    return response;
  }

  async getResidents(addressId = '') {
    const result = await this._repository.getResidents(addressId);
    const response = this._helper.extractPeople(result);

    return response;
  }

  async associateAddressWithPerson({
    addressId = '',
    personId = ''
  }: AddressPersonAssociation) {
    const check = await this.checkAddressOfRelationship({
      addressId,
      personId
    });

    if (check) return this.getAddress(addressId);
    const result = await this._repository.associateAddressWithPerson({
      addressId,
      personId
    });
    const [response] = this._helper.extractAddresses(result);

    if (!response)
      throw new Error(
        `Unable to associate the address having id: ${addressId} with person having id: ${personId}.`
      );
    return response;
  }

  async disassociateAddressWithPerson({
    addressId = '',
    personId = ''
  }: AddressPersonAssociation) {
    const check = await this.checkAddressOfRelationship({
      addressId,
      personId
    });

    if (!check) return this.getAddress();
    else {
      const result = await this._repository.disassociateAddressWithPerson({
        addressId,
        personId
      });
      const [response] = this._helper.extractAddresses(result);

      if (!response)
        throw new Error(
          `Unable to disassociate the address having id: ${addressId} with person having id: ${personId}.`
        );
      return response;
    }
  }

  async checkAddressOfRelationship({
    addressId = '',
    personId = ''
  }: AddressPersonAssociation) {
    const result = await this._repository.checkAddressOfRelationship({
      addressId,
      personId
    });
    return !!result.length;
  }
}
