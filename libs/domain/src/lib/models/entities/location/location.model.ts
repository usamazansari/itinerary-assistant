import { Coordinates, CoordinatesDTO, Timezone, TimezoneDTO } from '.';

interface ILocationBase {
  plusCode: string;
}

const BaseStub: ILocationBase = {
  plusCode: ''
};

export interface ILocation extends ILocationBase {
  id: string;
  coordinates: Coordinates;
  timezone: Timezone;
}

export class Location implements ILocation {
  id: string;
  plusCode: string;
  coordinates: Coordinates;
  timezone: Timezone;
  constructor({
    id = '',
    plusCode = BaseStub.plusCode,
    coordinates = new Coordinates({ id: '' }),
    timezone = new Timezone({ id: '' })
  }: Partial<ILocation>) {
    this.id = id;
    this.plusCode = plusCode;
    this.coordinates = coordinates;
    this.timezone = timezone;
  }
}

interface ILocationDTO extends ILocationBase {
  coordinates: CoordinatesDTO;
  timezone: TimezoneDTO;
}

export class LocationDTO implements ILocationDTO {
  plusCode: string;
  coordinates: CoordinatesDTO;
  timezone: TimezoneDTO;

  constructor({
    plusCode = BaseStub.plusCode,
    coordinates = new CoordinatesDTO({}),
    timezone = new TimezoneDTO({})
  }: Partial<ILocationDTO>) {
    this.plusCode = plusCode;
    this.coordinates = coordinates;
    this.timezone = timezone;
  }
}
