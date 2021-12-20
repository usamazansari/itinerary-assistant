import { Controller, Get, Param } from '@nestjs/common';

import type { APIResponseModel } from '../../imports/models';
import type { TripOverview } from '../../imports/entities';

import { TripService } from '../../services';

@Controller('trip')
export class TripController {
  constructor(private _service: TripService) { }

  @Get('view-trip')
  fetchTripList(): Promise<APIResponseModel<TripOverview[]>> {
    return this._service.fetchTripList();
  }

  @Get('view-trip/:tripName')
  fetchTripOverview(@Param('tripName') tripName: string) {
    return this._service.fetchTripOverview(tripName);
  }
}
