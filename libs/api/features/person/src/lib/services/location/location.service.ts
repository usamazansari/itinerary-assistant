import { Injectable } from '@nestjs/common';

import {
  Coordinates,
  Location,
  Neo4jNode,
  Timezone
} from '../../imports/models';
import { Neo4jNodeMapperService } from '../../imports/services';

import { LocationRepository } from '../../repositories';

@Injectable()
export class LocationService {
  constructor(
    private _repository: LocationRepository,
    private _mapNode: Neo4jNodeMapperService
  ) {}

  private extractCoordinates(
    result: { coordinates: Neo4jNode<Coordinates> }[]
  ): Coordinates[] {
    return result
      .map(({ coordinates }) => coordinates)
      .map(this._mapNode.toCoordinates);
  }

  private extractTimezones(
    result: { timezone: Neo4jNode<Timezone> }[]
  ): Timezone[] {
    return result.map(({ timezone }) => timezone).map(this._mapNode.toTimezone);
  }

  async getCoordinates(location: Location): Promise<Coordinates> {
    const result = await this._repository.getCoordinates(location);
    return (
      this.extractCoordinates(
        (<unknown>result) as { coordinates: Neo4jNode<Coordinates> }[]
      ).at(0) ?? new Coordinates({ id: '' })
    );
  }

  async getTimezone(location: Location): Promise<Timezone> {
    const result = await this._repository.getTimezone(location);
    return (
      this.extractTimezones(
        (<unknown>result) as { timezone: Neo4jNode<Timezone> }[]
      ).at(0) ?? new Timezone({ id: '' })
    );
  }
}
