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
    return this._extractor.extractLocation(result as Neo4jOutput<Location>);
  }

  async getCoordinates(id = ''): Promise<Coordinates> {
    const result = await this._repository.getCoordinates(id);
    return this._extractor.extractCoordinate(
      result as Neo4jOutput<Coordinates>
    );
  }

  async createLocation(location: LocationDTO): Promise<Location> {
    const id = new Location({ ...location }).generateUUID();
    const result = await this._repository.createLocation(id, location);
    return this._extractor.extractLocation(result as Neo4jOutput<Location>);
  }

  async updateLocation(id = '', location: LocationDTO): Promise<Location> {
    const result = await this._repository.updateLocation(id, location);
    return this._extractor.extractLocation(result as Neo4jOutput<Location>);
  }

  async deleteLocation(id = ''): Promise<Location> {
    const result = await this._repository.deleteLocation(id);
    return this._extractor.extractLocation(result as Neo4jOutput<Location>);
  }
}
