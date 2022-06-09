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
  constructor({
    id = '',
    latitude = BaseStub.latitude,
    longitude = BaseStub.longitude
  }: Partial<ICoordinates>) {
    this.id = id;
    this.latitude = latitude;
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
