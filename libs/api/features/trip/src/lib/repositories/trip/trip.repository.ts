import { Injectable } from '@nestjs/common';

import { QueryRepositoryService } from '../../imports/services';

@Injectable()
export class TripRepository {
  constructor(private _query: QueryRepositoryService) {}
}
