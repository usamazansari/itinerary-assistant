export interface ILocation {
  id: string;
  plusCode: string;
  coordinates: string;
  timezone: string;
}

const Timestamp = new Date().toISOString();

const LocationStub: ILocation = {
  id: `new-location-${Timestamp}`,
  plusCode: '',
  coordinates: `coordinates-for-new-location-${Timestamp}`,
  timezone: `timezone-for-new-location-${Timestamp}`
};

export class Location implements ILocation {
  id: string;
  plusCode: string;
  coordinates: string;
  timezone: string;
  constructor({
    id = LocationStub.id,
    plusCode = LocationStub.plusCode,
    coordinates = LocationStub.coordinates,
    timezone = LocationStub.timezone
  }: Partial<ILocation>) {
    this.id = id;
    this.plusCode = plusCode;
    this.coordinates = coordinates;
    this.timezone = timezone;
  }
}

type LocationDTOOmitType = 'id';

export class LocationDTO
  implements Omit<ILocation, LocationDTOOmitType>
{
  plusCode: string;
  coordinates: string;
  timezone: string;

  constructor({
    plusCode = LocationStub.plusCode,
    coordinates = LocationStub.coordinates,
    timezone = LocationStub.timezone
  }: Partial<ILocation>) {
    this.plusCode = plusCode;
    this.coordinates = coordinates;
    this.timezone = timezone;
  }
}
