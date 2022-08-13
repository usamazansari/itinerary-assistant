import { Injectable } from '@nestjs/common';

import { Neo4jNode, Neo4jOutput } from '../../imports/models';

import { Address, AddressDTO } from '../../models';

type CreateAddressPayload = {
  id: string;
  address: AddressDTO;
};

@Injectable()
export class AddressHelper {
  extractAddresses(result: Neo4jOutput<Address>) {
    return result.map(({ output }) => output).map(this.mapOutputToModel);
  }

  extractAddress(result: Neo4jOutput<Address>) {
    return this.extractAddresses(result).at(0);
  }

  mapOutputToModel({ properties }: Neo4jNode<Address>) {
    return new Address({ ...properties });
  }

  generateCreateObject({
    id,
    address: {
      apartment,
      city,
      country,
      landmark,
      locality,
      room,
      state,
      street,
      suburb,
      wing,
      zip
    }
  }: CreateAddressPayload) {
    let _ = {};
    if (!!apartment) _ = { ..._, apartment };
    if (!!city) _ = { ..._, city };
    if (!!country) _ = { ..._, country };
    if (!!landmark) _ = { ..._, landmark };
    if (!!locality) _ = { ..._, locality };
    if (!!room) _ = { ..._, room };
    if (!!state) _ = { ..._, state };
    if (!!street) _ = { ..._, street };
    if (!!suburb) _ = { ..._, suburb };
    if (!!wing) _ = { ..._, wing };
    if (!!zip) _ = { ..._, zip };

    return { id, ..._ } as Partial<Address>;
  }

  generateUpdateObject({
    apartment,
    city,
    country,
    landmark,
    locality,
    room,
    state,
    street,
    suburb,
    wing,
    zip
  }: AddressDTO) {
    let _ = {};
    if (!!apartment) _ = { ..._, ['address.apartment']: apartment };
    if (!!city) _ = { ..._, ['address.city']: city };
    if (!!country) _ = { ..._, ['address.country']: country };
    if (!!landmark) _ = { ..._, ['address.landmark']: landmark };
    if (!!locality) _ = { ..._, ['address.locality']: locality };
    if (!!room) _ = { ..._, ['address.room']: room };
    if (!!state) _ = { ..._, ['address.state']: state };
    if (!!street) _ = { ..._, ['address.street']: street };
    if (!!suburb) _ = { ..._, ['address.suburb']: suburb };
    if (!!wing) _ = { ..._, ['address.wing']: wing };
    if (!!zip) _ = { ..._, ['address.zip']: zip };
    return _ as Partial<AddressDTO>;
  }
}
