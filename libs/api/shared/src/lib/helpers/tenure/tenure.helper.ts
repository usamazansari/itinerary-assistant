import { Injectable } from '@nestjs/common';

import { TenureDTO } from '../../imports/models';

@Injectable()
export class TenureHelper {
  generateCreateObject(create: { id: string; tenure: TenureDTO }) {
    const {
      id,
      tenure: { start, end }
    } = create;

    let _ = {};
    if (!!start) _ = { ..._, start };
    if (!!end) _ = { ..._, end };

    return { id, ..._ };
  }

  generateUpdateObject(tenure: TenureDTO) {
    const { start, end } = tenure;

    let _ = {};
    if (!!start) _ = { ..._, ['tenure.start']: start };
    if (!!end) _ = { ..._, ['tenure.end']: end };

    return { ..._ };
  }
}
