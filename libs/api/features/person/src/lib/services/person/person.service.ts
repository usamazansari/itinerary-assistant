import { Injectable } from '@nestjs/common';

import { PersonHelper } from '../../helpers';
import { PersonDTO } from '../../models';
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

  async getPerson(id = '') {
    const result = await this._repository.getPerson(id);
    const [response] = this._helper.extractPeople(result);
    return response;
  }

  async createPerson(dto: PersonDTO) {
    const person = this._helper.createPersonPayload(dto);
    const result = await this._repository.createPerson(person);
    const [response] = this._helper.extractPeople(result);
    return response;
  }

  async updatePerson(id: string, dto: PersonDTO) {
    const update = this._helper.updatePersonPayload(dto);
    const result = await this._repository.updatePerson(id, update);
    const [response] = this._helper.extractPeople(result);
    return response;
  }

  async deletePerson(id: string) {
    const result = await this._repository.deletePerson(id);
    const [response] = this._helper.extractPeople(result);
    return response;
  }

  async getAddresses(id: string) {
    const result = await this._repository.getAddresses(id);
    return this._helper.extractAddresses(result);
  }

  async getTrips(id: string) {
    const result = await this._repository.getTrips(id);
    return this._helper.extractTrips(result);
  }
}
