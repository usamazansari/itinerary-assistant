import {
  Controller
  // Get,
  // Param
} from '@nestjs/common';

// import type { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';

// import { APIResponse } from '../../imports/models';
// import { HttpStatus } from '../../imports/constants';
// import type { TripMaster } from '../../imports/entities';

import { TripService } from '../../services';

@Controller('trip')
export class TripController {
  constructor(private _service: TripService) {}

  // @Get('view-trip')
  // fetchTripList(): Observable<APIResponse<TripMaster[]>> {
  //   return this._service.fetchTripList().pipe(
  //     map(response =>
  //       response instanceof Error
  //         ? { error: response }
  //         : { data: response }
  //     ),
  //     map(response => {
  //       if (!!response.error)
  //         return new APIResponse({
  //           data: null,
  //           error: response.error,
  //           status: HttpStatus.InternalServerError
  //         });
  //       return new APIResponse({
  //         data: response.data,
  //         error: null,
  //         status: HttpStatus.Ok
  //       });
  //     })
  //   );
  // }

  // @Get('view-trip/:tripName')
  // fetchTripOverview(@Param('tripName') tripName: string) {
  //   return this._service.fetchTrip(tripName);
  // }
}
