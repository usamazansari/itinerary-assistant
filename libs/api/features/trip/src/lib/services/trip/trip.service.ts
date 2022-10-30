import { Injectable } from '@nestjs/common';

import { TripHelper } from '../../helpers';
import { TripDTO, TripPersonAssociation } from '../../models';
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
    const trip = this._helper.createTripPayload(dto);
    const result = await this._repository.createTrip(trip);
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

  async resolveAccomplices(id: string) {
    const result = await this._repository.resolveAccomplices(id);
    return this._helper.extractPeople(result);
  }

  async associateTripWithPerson({
    tripId = '',
    personId = ''
  }: TripPersonAssociation) {
    const check = await this.checkAccompliceOfRelationship({
      tripId,
      personId
    });
    const result = check
      ? await this._repository.getTrip(tripId)
      : await this._repository.associateTripWithPerson({
          tripId,
          personId
        });
    const [response] = this._helper.extractTrips(result);
    return response;
  }

  async checkAccompliceOfRelationship({
    tripId = '',
    personId = ''
  }: TripPersonAssociation) {
    const result = await this._repository.checkAccompliceOfRelationship({
      tripId,
      personId
    });
    return !!result.length;
  }
}
