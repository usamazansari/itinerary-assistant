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
}
