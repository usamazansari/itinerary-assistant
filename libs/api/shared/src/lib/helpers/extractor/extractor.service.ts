import { Injectable } from '@nestjs/common';

import {
  Coordinates,
  Location,
  Neo4jNode,
  Timezone
} from '../../imports/models';
import { Neo4jNodeMapperService } from '../../imports/services';

@Injectable()
export class ExtractorService {
  constructor(private _mapNode: Neo4jNodeMapperService) {}

  extractLocations(result: { location: Neo4jNode<Location> }[]): Location[] {
    return result.map(({ location }) => location).map(this._mapNode.toLocation);
  }

  extractCoordinates(
    result: { coordinates: Neo4jNode<Coordinates> }[]
  ): Coordinates[] {
    return result
      .map(({ coordinates }) => coordinates)
      .map(this._mapNode.toCoordinates);
  }

  extractTimezones(result: { timezone: Neo4jNode<Timezone> }[]): Timezone[] {
    return result.map(({ timezone }) => timezone).map(this._mapNode.toTimezone);
  }
}
