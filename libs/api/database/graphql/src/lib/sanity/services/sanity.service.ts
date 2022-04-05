import { Injectable } from '@nestjs/common';

import { SanityRepository } from '..';

@Injectable()
export class SanityService {
  constructor(private _repository: SanityRepository) {}

  async neo4jSanity() {
    return await this._repository.neo4jSanity();
  }
}
