export interface ICoordinates {
  id: string;
  latitude: number;
  longitude: number;
}

const CoordinatesStub: ICoordinates = {
  id: `new-coordinates-${new Date().toISOString()}`,
  latitude: 0,
  longitude: 0
};

export class Coordinates implements ICoordinates {
  id: string;
  latitude: number;
  longitude: number;
  constructor({
    id = CoordinatesStub.id,
    latitude = CoordinatesStub.latitude,
    longitude = CoordinatesStub.longitude
  }: Partial<ICoordinates>) {
    this.id = id;
    this.latitude = latitude;
    this.longitude = longitude;
  }
}

type CoordinatesDTOOmitType = 'id';

export class CoordinatesDTO
  implements Omit<ICoordinates, CoordinatesDTOOmitType>
{
  latitude: number;
  longitude: number;

  constructor({
    latitude = CoordinatesStub.latitude,
    longitude = CoordinatesStub.longitude
  }: Partial<ICoordinates>) {
    this.latitude = latitude;
    this.longitude = longitude;
  }
}
