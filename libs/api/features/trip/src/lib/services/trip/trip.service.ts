import { Injectable } from '@nestjs/common';

import { TripHelper } from '../../helpers';
import { TripDTO } from '../../models';
import { TripRepository } from '../../repositories';

@Injectable()
export class TripService {
  constructor(
    private _helper: TripHelper,
    private _repository: TripRepository
  ) {}

  async getTrip(id = '') {
    const result = await this._repository.getTrip(id);
    const [response] = this._helper.extractTrips(result);
    return response;
  }

  async createTrip(dto: TripDTO) {
    const Trip = this._helper.createTripPayload(dto);
    const result = await this._repository.createTrip(Trip);
    const [response] = this._helper.extractTrips(result);
    return response;
  }

  async updateTrip(id: string, dto: TripDTO) {
    const update = this._helper.updateTripPayload(dto);
    const result = await this._repository.updateTrip(id, update);
    const [response] = this._helper.extractTrips(result);
    return response;
  }

  async deleteTrip(id: string) {
    const result = await this._repository.deleteTrip(id);
    const [response] = this._helper.extractTrips(result);
    return response;
  }
}
