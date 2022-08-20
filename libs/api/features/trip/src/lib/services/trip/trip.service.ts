import { Injectable } from '@nestjs/common';

import { TripHelper } from '../../helpers';
import { TripRepository } from '../../repositories';

@Injectable()
export class TripService {
  constructor(
    private _helper: TripHelper,
    private _repository: TripRepository
  ) {}
}
