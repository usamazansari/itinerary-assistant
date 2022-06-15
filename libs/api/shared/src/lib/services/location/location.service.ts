import { Injectable } from '@nestjs/common';

import {
  Coordinates,
  Location,
  LocationDTO,
  Neo4jOutput
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
      this._extractor.extractLocations(result as Neo4jOutput<Location>).at(0) ??
      new Location({ id: '' })
    );
  }

  async getCoordinates(id = ''): Promise<Coordinates> {
    const result = await this._repository.getCoordinates(id);
    return (
      this._extractor
        .extractCoordinates(result as Neo4jOutput<Coordinates>)
        .at(0) ?? new Coordinates({ id: '' })
    );
  }

  async createLocation(location: LocationDTO): Promise<Location> {
    const id = new Location({ ...location }).generateUUID();
    const result = await this._repository.createLocation(id, location);
    return (
      this._extractor.extractLocations(result as Neo4jOutput<Location>).at(0) ??
      new Location({ id: '' })
    );
  }

  async updateLocation(id = '', location: LocationDTO): Promise<Location> {
    const result = await this._repository.updateLocation(id, location);
    return (
      this._extractor.extractLocations(result as Neo4jOutput<Location>).at(0) ??
      new Location({ id: '' })
    );
  }

  async deleteLocation(id = ''): Promise<Location> {
    const result = await this._repository.deleteLocation(id);
    return (
      this._extractor.extractLocations(result as Neo4jOutput<Location>).at(0) ??
      new Location({ id: '' })
    );
  }
}
