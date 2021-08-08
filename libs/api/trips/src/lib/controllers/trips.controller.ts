import { Controller, Get, Param } from '@nestjs/common';
import { TripsService } from '../services';

import type { TripModel } from '../models';

@Controller('trips')
export class TripsController {
  constructor(private readonly service: TripsService) {}

  @Get()
  fetchTripsList(): TripModel[] {
    return this.service.fetchTripsList();
  }

  @Get(':tripName')
  fetchTripOverview(@Param('tripName') tripName: string) {
    return this.service.fetchTripOverview(tripName);
  }
}
