import { Controller, Get } from '@nestjs/common';
import { TripService } from '../../services';

import type { TripModel } from '../../models';

@Controller('trips')
export class TripController {
  constructor(private readonly service: TripService) {}

  @Get()
  fetchTripsList(): TripModel[] {
    return this.service.fetchTripsList();
  }
}
