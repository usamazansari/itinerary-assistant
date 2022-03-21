export interface ICoordinates {
  id: string;
  latitude: number;
  longitude: number;
  locationId: string;
}

const Timestamp = new Date().toISOString().valueOf();

const CoordinatesStub: ICoordinates = {
  id: `new-coordinates-${Timestamp}`,
  latitude: 0,
  longitude: 0,
  locationId: `location-for-new-coordinates-${Timestamp}`
};

export class Coordinates implements ICoordinates {
  id: string;
  latitude: number;
  longitude: number;
  locationId: string;
  constructor({
    id = CoordinatesStub.id,
    latitude = CoordinatesStub.latitude,
    longitude = CoordinatesStub.longitude,
    locationId = CoordinatesStub.locationId
  }: Partial<ICoordinates>) {
    this.id = id;
    this.latitude = latitude;
    this.longitude = longitude;
    this.locationId = locationId;
  }
}

type CoordinatesDTOOmitType = 'id';

export class CoordinatesDTO
  implements Omit<ICoordinates, CoordinatesDTOOmitType>
{
  latitude: number;
  longitude: number;
  locationId: string;

  constructor({
    latitude = CoordinatesStub.latitude,
    longitude = CoordinatesStub.longitude,
    locationId = CoordinatesStub.locationId
  }: Partial<ICoordinates>) {
    this.latitude = latitude;
    this.longitude = longitude;
    this.locationId = locationId;
  }
}
