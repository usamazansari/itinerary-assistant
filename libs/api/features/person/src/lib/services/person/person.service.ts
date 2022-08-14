import { Injectable } from '@nestjs/common';

import { PersonHelper } from '../../helpers';
import { PersonRepository } from '../../repositories';

@Injectable()
export class PersonService {
  constructor(
    private _helper: PersonHelper,
    private _repository: PersonRepository
  ) {}

  async getPeople() {
    const result = await this._repository.getPeople();
    return this._helper.extractPeople(result);
  }

  async getPersonAddress(id: string) {
    const result = await this._repository.getPersonAddress(id);
    return this._helper.extractAddresses(result);
  }
}
