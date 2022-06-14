import { Injectable } from '@nestjs/common';

import { IdentificationDTO } from '../../imports/models';

@Injectable()
export class IdentificationHelper {
  generateCreateObject(create: {
    id: string;
    identification: IdentificationDTO;
  }) {
    const {
      id,
      identification: { name, number, type }
    } = create;

    let _ = {};
    if (!!name) _ = { ..._, name };
    if (!!number) _ = { ..._, number };
    if (!!type) _ = { ..._, type };

    return { id, ..._ };
  }

  generateUpdateObject(identification: IdentificationDTO) {
    const { name, number, type } = identification;

    let _ = {};
    if (!!name) _ = { ..._, ['identification.name']: name };
    if (!!number) _ = { ..._, ['identification.number']: number };
    if (!!type) _ = { ..._, ['identification.type']: type };
    return _;
  }
}
