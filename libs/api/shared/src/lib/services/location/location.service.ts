import { Injectable } from '@nestjs/common';

import {
  Coordinates,
  Location,
  LocationDTO,
  Neo4jNode,
  Timezone
} from '../../imports/models';

import { ExtractorService } from '../../helpers';
import { LocationRepository } from '../../repositories';

@Injectable()
export class LocationService {
  constructor(
    private _repository: LocationRepository,
    private _extractor: ExtractorService
  ) {}

  async getLocation(id = ''): Promise<Location> {
    const result = await this._repository.getLocation(id);
    return (
      this._extractor
        .extractLocations(
          (<unknown>result) as { location: Neo4jNode<Location> }[]
        )
        .at(0) ?? new Location({ id: '' })
    );
  }

  async getCoordinates(id = ''): Promise<Coordinates> {
    const result = await this._repository.getCoordinates(id);
    return (
      this._extractor
        .extractCoordinates(
          (<unknown>result) as { coordinates: Neo4jNode<Coordinates> }[]
        )
        .at(0) ?? new Coordinates({ id: '' })
    );
  }

  async getTimezone(id = ''): Promise<Timezone> {
    const result = await this._repository.getTimezone(id);
    return (
      this._extractor
        .extractTimezones(
          (<unknown>result) as { timezone: Neo4jNode<Timezone> }[]
        )
        .at(0) ?? new Timezone({ id: '' })
    );
  }

  async createLocation(location: LocationDTO): Promise<Location> {
    const id = new Location({ ...location }).generateUUID();
    const result = await this._repository.createLocation(id, location);
    return (
      this._extractor
        .extractLocations(
          (<unknown>result) as { location: Neo4jNode<Location> }[]
        )
        .at(0) ?? new Location({ id: '' })
    );
  }
}
