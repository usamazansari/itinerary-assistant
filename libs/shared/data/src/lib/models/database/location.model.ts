import { Coordinates, Timezone } from '.';

export interface ILocation {
  plusCode: string;
  coordinates: Coordinates;
  timezone: Timezone;
}

const LocationStub: ILocation = {
  plusCode: '',
  coordinates: new Coordinates({}),
  timezone: new Timezone({})
};

export class Location implements ILocation {
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
