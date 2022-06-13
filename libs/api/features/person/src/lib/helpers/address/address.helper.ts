import { Injectable } from '@nestjs/common';

import { AddressDTO } from '../../imports/models';

@Injectable()
export class AddressHelper {
  generateCreateObject(create: { id: string; address: AddressDTO }) {
    const {
      id,
      address: {
        apartment,
        city,
        country,
        landmark,
        locality,
        name,
        room,
        state,
        street,
        suburb,
        wing,
        zip
      }
    } = create;

    let _ = {};
    if (!!apartment) _ = { ..._, apartment };
    if (!!city) _ = { ..._, city };
    if (!!country) _ = { ..._, country };
    if (!!landmark) _ = { ..._, landmark };
    if (!!locality) _ = { ..._, locality };
    if (!!name) _ = { ..._, name };
    if (!!room) _ = { ..._, room };
    if (!!state) _ = { ..._, state };
    if (!!street) _ = { ..._, street };
    if (!!suburb) _ = { ..._, suburb };
    if (!!wing) _ = { ..._, wing };
    if (!!zip) _ = { ..._, zip };

    return { id, ..._ };
  }
  generateUpdateObject(address: AddressDTO) {
    const {
      apartment,
      city,
      country,
      landmark,
      locality,
      name,
      room,
      state,
      street,
      suburb,
      wing,
      zip
    } = address;

    let _ = {};
    if (!!apartment) _ = { ..._, [`address.apartment`]: apartment };
    if (!!city) _ = { ..._, [`address.city`]: city };
    if (!!country) _ = { ..._, [`address.country`]: country };
    if (!!landmark) _ = { ..._, [`address.landmark`]: landmark };
    if (!!locality) _ = { ..._, [`address.locality`]: locality };
    if (!!name) _ = { ..._, [`address.name`]: name };
    if (!!room) _ = { ..._, [`address.room`]: room };
    if (!!state) _ = { ..._, [`address.state`]: state };
    if (!!street) _ = { ..._, [`address.street`]: street };
    if (!!suburb) _ = { ..._, [`address.suburb`]: suburb };
    if (!!wing) _ = { ..._, [`address.wing`]: wing };
    if (!!zip) _ = { ..._, [`address.zip`]: zip };
    return _;
  }
}
