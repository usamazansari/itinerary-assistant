import { Injectable } from '@nestjs/common';

import { Coordinates, CoordinatesDTO, Neo4jNode } from '../../imports/models';

import { ExtractorService } from '../../helpers';
import { CoordinatesRepository } from '../../repositories';

@Injectable()
export class CoordinatesService {
  constructor(
    private _repository: CoordinatesRepository,
    private _extractor: ExtractorService
  ) {}

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

  async createCoordinates(coordinates: CoordinatesDTO): Promise<Coordinates> {
    const id = new Coordinates({ ...coordinates }).generateUUID();
    const result = await this._repository.createCoordinates(id, coordinates);
    return (
      this._extractor
        .extractCoordinates(
          (<unknown>result) as { coordinates: Neo4jNode<Coordinates> }[]
        )
        .at(0) ?? new Coordinates({ id: '' })
    );
  }

  async updateCoordinates(
    id = '',
    coordinates: CoordinatesDTO
  ): Promise<Coordinates> {
    const result = await this._repository.updateCoordinates(id, coordinates);
    return (
      this._extractor
        .extractCoordinates(
          (<unknown>result) as { coordinates: Neo4jNode<Coordinates> }[]
        )
        .at(0) ?? new Coordinates({ id: '' })
    );
  }

  async deleteCoordinates(id = ''): Promise<Coordinates> {
    const result = await this._repository.deleteCoordinates(id);
    return (
      this._extractor
        .extractCoordinates(
          (<unknown>result) as { coordinates: Neo4jNode<Coordinates> }[]
        )
        .at(0) ?? new Coordinates({ id: '' })
    );
  }
}
