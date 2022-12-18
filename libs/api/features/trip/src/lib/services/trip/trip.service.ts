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

  async getTrips() {
    const result = await this._repository.getTrips();
    const response = this._helper.extractTrips(result);

    if (!response?.length) throw new Error('No Trips found in the database.');
    return response;
  }

  async getTrip(id = '') {
    const result = await this._repository.getTrip(id);
    const [response] = this._helper.extractTrips(result);

    if (!response)
      throw new Error(
        `Cannot fetch the Trip having id: '${id}'. The trip might not exist in the database.`
      );
    return response;
  }

  async createTrip(dto: TripDTO) {
    const trip = this._helper.createTripPayload(dto);
    const result = await this._repository.createTrip(trip);
    const [response] = this._helper.extractTrips(result);

    if (!response) throw new Error(`Cannot create the new Address`);
    return response;
  }

  async updateTrip(id: string, dto: TripDTO) {
    const update = this._helper.updateTripPayload(dto);
    const result = await this._repository.updateTrip(id, update);
    const [response] = this._helper.extractTrips(result);

    if (!response)
      throw new Error(
        `Cannot update the Trip having id: '${id}'. The trip might not exist in the database.`
      );
    return response;
  }

  async deleteTrip(id: string) {
    const result = await this._repository.deleteTrip(id);
    const [response] = this._helper.extractTrips(result);

    if (!response)
      throw new Error(
        `Cannot delete the Trip having id: '${id}'. The trip might not exist in the database.`
      );
    return response;
  }

  async resolveAccomplices(tripId: string) {
    const result = await this._repository.resolveAccomplices(tripId);
    const response = this._helper.extractPeople(result);

    return response;
  }

  async associateTripWithPerson({
    tripId = '',
    personId = ''
  }: TripPersonAssociation) {
    const check = await this.checkAccompliceOfRelationship({
      tripId,
      personId
    });

    if (check) return this.getTrip(tripId);
    const result = await this._repository.associateTripWithPerson({
      tripId,
      personId
    });
    const [response] = this._helper.extractTrips(result);

    if (!response)
      throw new Error(
        `Unable to associate the trip having id: ${tripId} with person having id: ${personId}.`
      );
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
