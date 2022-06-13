import { Point } from 'neo4j-driver';

interface ICoordinatesBase {
  latitude: number;
  longitude: number;
}

const BaseStub: ICoordinatesBase = {
  latitude: 0,
  longitude: 0
};

export interface ICoordinates extends ICoordinatesBase {
  id: string;
}

export class Coordinates implements ICoordinates {
  id: string;
  latitude: number;
  longitude: number;
  coordinates: Point | '' = '';
  constructor({
    id = '',
    latitude = BaseStub.latitude,
    longitude = BaseStub.longitude
  }: Partial<ICoordinates>) {
    this.id = id;
    this.latitude = latitude;
    this.longitude = longitude;
  }

  getId(): string {
    return this.id;
  }

  setId(id: string): void {
    this.id = id;
  }
  getLatitude(): number {
    return this.latitude;
  }

  setLatitude(latitude: number): void {
    this.latitude = latitude;
  }
  getLongitude(): number {
    return this.longitude;
  }

  setLongitude(longitude: number): void {
    this.longitude = longitude;
  }
}

type ICoordinatesDTO = ICoordinatesBase;

export class CoordinatesDTO implements ICoordinatesDTO {
  latitude: number;
  longitude: number;

  constructor({
    latitude = BaseStub.latitude,
    longitude = BaseStub.longitude
  }: Partial<ICoordinatesDTO>) {
    this.latitude = latitude;
    this.longitude = longitude;
  }
}
