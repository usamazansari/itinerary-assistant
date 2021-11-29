import { Controller, Get, Param } from '@nestjs/common';

import { HttpStatus } from '../../imports/constants';
import type {
  APIResponseModel,
  TripListDataModel
} from '../../imports/models';

import { TripService } from '../../services';

@Controller('trip')
export class TripController {
  constructor(private _service: TripService) { }

  @Get('view-trip')
  fetchTripList(): APIResponseModel<TripListDataModel> {
    const data: TripListDataModel = { trips: this._service.fetchTripList() };
    return {
      status: HttpStatus.Ok,
      data,
      error: null
    };
  }

  @Get('view-trip/:tripName')
  fetchTripOverview(@Param('tripName') tripName: string) {
    return this._service.fetchTripOverview(tripName);
  }
}
