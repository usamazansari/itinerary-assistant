export interface ICoordinates {
  id: string;
  latitude: number;
  longitude: number;
  location: string;
}

const Timestamp = new Date().toISOString();

const CoordinatesStub: ICoordinates = {
  id: `new-coordinates-${Timestamp}`,
  latitude: 0,
  longitude: 0,
  location: `location-for-new-coordinates-${Timestamp}`
};

export class Coordinates implements ICoordinates {
  id: string;
  latitude: number;
  longitude: number;
  location: string;
  constructor({
    id = CoordinatesStub.id,
    latitude = CoordinatesStub.latitude,
    longitude = CoordinatesStub.longitude,
    location = CoordinatesStub.location
  }: Partial<ICoordinates>) {
    this.id = id;
    this.latitude = latitude;
    this.longitude = longitude;
    this.location = location;
  }
}

type CoordinatesDTOOmitType = 'id';

export class CoordinatesDTO
  implements Omit<ICoordinates, CoordinatesDTOOmitType>
{
  latitude: number;
  longitude: number;
  location: string;

  constructor({
    latitude = CoordinatesStub.latitude,
    longitude = CoordinatesStub.longitude,
    location = CoordinatesStub.location
  }: Partial<ICoordinates>) {
    this.latitude = latitude;
    this.longitude = longitude;
    this.location = location;
  }
}
