import { Coordinates, Timezone } from '.';

export interface ILocation {
  id: string;
  plusCode: string;
  coordinates: Coordinates;
  timezone: Timezone;
}

const LocationStub: ILocation = {
  id: `new-location-${new Date().toISOString()}`,
  plusCode: '',
  coordinates: new Coordinates({}),
  timezone: new Timezone({})
};

export class Location implements ILocation {
  id: string;
  plusCode: string;
  coordinates: Coordinates;
  timezone: Timezone;
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
  coordinates: Coordinates;
  timezone: Timezone;

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
