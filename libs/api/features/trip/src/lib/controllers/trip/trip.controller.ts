import { Controller, Get, Param } from '@nestjs/common';

import type { Observable } from 'rxjs';

import { HttpStatus } from '../../imports/constants';
import type {
  APIResponseModel,
  TripListDataModel,
} from '../../imports/models';

import type { TripEntity } from '../../imports/entities';

import { TripService } from '../../services';

@Controller('trip')
export class TripController {
  constructor(private _service: TripService) { }

  @Get('view-trip')
  // fetchTripList(): APIResponseModel<TripListDataModel> {
  //   const data: TripListDataModel = { trips: this._service.fetchTripList() };
  //   return {
  //     status: HttpStatus.Ok,
  //     data,
  //     error: null
  //   };
  // }

  fetchTripList(): Observable<TripEntity[]> {
    return this._service.fetchTripList();
  }

  @Get('view-trip/:tripName')
  fetchTripOverview(@Param('tripName') tripName: string) {
    return this._service.fetchTripOverview(tripName);
  }
}
