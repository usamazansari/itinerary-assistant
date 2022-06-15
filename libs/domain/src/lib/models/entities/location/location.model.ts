import { v4 as uuid } from 'uuid';

import { Coordinates } from '.';

interface ILocationBase {
  plusCode: string;
}

const BaseStub: ILocationBase = {
  plusCode: ''
};

export interface ILocation extends ILocationBase {
  id: string;
  coordinates: Coordinates;
}

export class Location implements ILocation {
  id: string;
  plusCode: string;
  coordinates: Coordinates;
  constructor({
    id = '',
    plusCode = BaseStub.plusCode,
    coordinates = new Coordinates({ id: '' })
  }: Partial<ILocation>) {
    this.id = id;
    this.plusCode = plusCode;
    this.coordinates = coordinates;
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
