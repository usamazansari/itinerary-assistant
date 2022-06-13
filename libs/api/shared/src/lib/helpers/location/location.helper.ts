import { Injectable } from '@nestjs/common';

import { LocationDTO } from '../../imports/models';

@Injectable()
export class LocationHelper {
  generateCreateObject(create: { id: string; location: LocationDTO }) {
    const {
      id,
      location: { plusCode }
    } = create;

    let _ = {};
    if (!!plusCode) _ = { ..._, plusCode };

    return { id, ..._ };
  }

  generateUpdateObject(location: LocationDTO) {
    const { plusCode } = location;

    let _ = {};
    if (!!plusCode) _ = { ..._, [`location.plusCode`]: plusCode };

    return { ..._ };
  }
}
