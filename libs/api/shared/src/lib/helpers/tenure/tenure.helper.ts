import { Injectable } from '@nestjs/common';

import { TenureDTO } from '../../imports/models';
import { parseToDateTime } from '../../imports/utils';

@Injectable()
export class TenureHelper {
  generateCreateObject(create: { id: string; tenure: TenureDTO }) {
    const {
      id,
      tenure: { start, end }
    } = create;

    let _ = {};
    if (!!start) _ = { ..._, start: parseToDateTime(start) };
    if (!!end) _ = { ..._, end: parseToDateTime(end) };

    return { id, ..._ };
  }

  generateUpdateObject(tenure: TenureDTO) {
    const { start, end } = tenure;

    let _ = {};
    if (!!start) _ = { ..._, ['tenure.start']: parseToDateTime(start) };
    if (!!end) _ = { ..._, ['tenure.end']: parseToDateTime(end) };

    return { ..._ };
  }
}
