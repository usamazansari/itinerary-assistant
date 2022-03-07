export interface ICoordinates {
  latitude: number;
  longitude: number;
}

const CoordinatesStub: ICoordinates = {
  latitude: 0,
  longitude: 0
};

export class Coordinates implements ICoordinates {
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

export interface ITimezone {
  offset: number;
  description: string;
}

const TimezoneStub: ITimezone = {
  offset: 0,
  description: ''
};

export class Timezone implements ITimezone {
  offset: number;
  description: string;
  constructor({
    offset = TimezoneStub.offset,
    description = TimezoneStub.description
  }: Partial<ITimezone>) {
    this.offset = offset;
    this.description = description;
  }
}

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
