import { Controller, Get } from '@nestjs/common';

import type { Observable } from 'rxjs';
import { map } from 'rxjs';

import { HttpStatus } from '../../imports/constants';
import { APIResponse, User } from '../../imports/models';
import { UserService } from '../../services';

@Controller('user')
export class UserController {
  constructor(private readonly _service: UserService) {}

  @Get('all-users')
  fetchTripList(): Observable<APIResponse<User[]>> {
    return this._service.findAll().pipe(
      map(response =>
        response instanceof Error
          ? { error: response }
          : { data: response }
      ),
      map(response => {
        if (!!response.error)
          return new APIResponse({
            data: null,
            error: response.error,
            status: HttpStatus.InternalServerError
          });
        return new APIResponse({
          data: response.data,
          error: null,
          status: HttpStatus.Ok
        });
      })
    );
  }
}
