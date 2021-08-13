import { Controller, Get, Param } from '@nestjs/common';

import { TripListItemModel } from '../../imports/models';

import { TripService } from '../../services';

@Controller('trip')
export class TripController {
  constructor(private _service: TripService) {}

  @Get('view-trip')
  fetchTripList(): TripListItemModel[] {
    return this._service.fetchTripList();
  }

  @Get('view-trip/:tripName')
  fetchTripOverview(@Param('tripName') tripName: string) {
    return this._service.fetchTripOverview(tripName);
  }
}
