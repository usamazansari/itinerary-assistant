import { v4 as uuid } from 'uuid';

import { Coordinates, Timezone } from '.';

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

  getId(): string {
    return this.id;
  }

  setId(id: string): void {
    this.id = id;
  }
  getPlusCode(): string {
    return this.plusCode;
  }

  setPlusCode(plusCode: string): void {
    this.plusCode = plusCode;
  }

  generateUUID(): string {
    this.setId(uuid());
    return this.getId();
  }
}

type ILocationDTO = ILocationBase;

export class LocationDTO implements ILocationDTO {
  plusCode: string;

  constructor({ plusCode = BaseStub.plusCode }: Partial<ILocationDTO>) {
    this.plusCode = plusCode;
  }
}
