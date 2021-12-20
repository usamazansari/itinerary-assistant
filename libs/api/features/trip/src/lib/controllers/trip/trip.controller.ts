import { Controller, Get, Param } from '@nestjs/common';

import type { Observable } from 'rxjs';

// import { HttpStatus } from '../../imports/constants';
import type {
  APIResponseModel,
  TripOverviewModel
} from '../../imports/models';

// import type { TripOverview } from '../../imports/entities';

import { TripService } from '../../services';

@Controller('trip')
export class TripController {
  constructor(private _service: TripService) { }

  // @Get('view-trip')
  // fetchTripList(): APIResponseModel<TripListDataModel> {
  //   const data: TripListDataModel = { trips: this._service.fetchTripList() };
  //   return {
  //     status: HttpStatus.Ok,
  //     data,
  //     error: null
  //   };
  // }

  @Get('view-trip')
  fetchTripList(): Observable<APIResponseModel<TripOverviewModel[]>> {
    return this._service.fetchTripList();
  }

  @Get('view-trip/:tripName')
  fetchTripOverview(@Param('tripName') tripName: string) {
    return this._service.fetchTripOverview(tripName);
  }
}

// TODO: Usama Ansari - 🗑️ Cleanup required
