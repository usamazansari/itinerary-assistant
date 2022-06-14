import { Injectable } from '@nestjs/common';

import { parseToPoint } from '../../imports/utils';
import { CoordinatesDTO } from '../../imports/models';

@Injectable()
export class CoordinatesHelper {
  generateCreateObject(create: { id: string; coordinates: CoordinatesDTO }) {
    const {
      id,
      coordinates: { latitude, longitude }
    } = create;

    return { id, coordinates: parseToPoint({ latitude, longitude }) };
  }

  generateUpdateObject(coordinates: CoordinatesDTO) {
    const { latitude, longitude } = coordinates;

    return {
      [`coordinates.coordinates`]: parseToPoint({ latitude, longitude })
    };
  }
}
