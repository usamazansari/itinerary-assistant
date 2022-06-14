import { v4 as uuid } from 'uuid';
import { Point } from 'neo4j-driver';

import { parseToPoint, updatePoint } from '../../../../utils';

interface ICoordinatesBase {
  coordinates: Point<number>;
  latitude?: number;
  longitude?: number;
}

const BaseStub: ICoordinatesBase = {
  coordinates: parseToPoint({})
};

export interface ICoordinates extends ICoordinatesBase {
  id: string;
}

export class Coordinates implements ICoordinates {
  id: string;
  coordinates: Point<number>;
  latitude?: number;
  longitude?: number;
  constructor({
    id = '',
    coordinates = BaseStub.coordinates,
    latitude,
    longitude
  }: Partial<ICoordinates>) {
    this.id = id;
    this.coordinates = coordinates;

    if (!!latitude) this.latitude = latitude;
    if (!!longitude) this.longitude = longitude;
  }

  getId(): string {
    return this.id;
  }

  setId(id: string): void {
    this.id = id;
  }

  getCoordinates(): Point<number> {
    return this.coordinates;
  }

  setCoordinates(coordinates: Point<number>): void {
    this.coordinates = coordinates;
  }

  getLatitude(): number | undefined {
    return this.latitude;
  }

  setLatitude(latitude: number): void {
    this.latitude = latitude;
    this.setCoordinates(updatePoint(this.coordinates, { latitude }));
  }
  getLongitude(): number | undefined {
    return this.longitude;
  }

  setLongitude(longitude: number): void {
    this.longitude = longitude;
    this.setCoordinates(updatePoint(this.coordinates, { longitude }));
  }

  generateUUID(): string {
    this.setId(uuid());
    return this.getId();
  }
}

type ICoordinatesDTO = ICoordinatesBase;

export class CoordinatesDTO implements ICoordinatesDTO {
  coordinates: Point<number>;
  latitude?: number | undefined;
  longitude?: number | undefined;

  constructor({
    coordinates = BaseStub.coordinates,
    latitude,
    longitude
  }: Partial<ICoordinatesDTO>) {
    this.coordinates = coordinates;

    if (!!latitude) this.latitude = latitude;
    if (!!longitude) this.longitude = longitude;
  }
}
