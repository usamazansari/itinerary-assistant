import { v4 as uuid } from 'uuid';

import { Tenure } from '../..';

interface IIdentificationBase {
  type: string;
  number: string;
  name: string;
}

const BaseStub: IIdentificationBase = {
  type: '',
  number: '',
  name: ''
};

export interface IIdentification extends IIdentificationBase {
  id: string;
  validity: Tenure;
}

export class Identification implements IIdentification {
  id: string;
  type: string;
  number: string;
  name: string;
  validity: Tenure;

  constructor({
    id = '',
    type = BaseStub.type,
    number = BaseStub.number,
    name = BaseStub.name,
    validity = new Tenure({ id: '' })
  }: Partial<IIdentification>) {
    this.id = id;
    this.type = type;
    this.number = number;
    this.name = name;
    this.validity = validity;
  }

  getId(): string {
    return this.id;
  }

  setId(id: string): void {
    this.id = id;
  }

  getType(): string {
    return this.type;
  }

  setType(type: string): void {
    this.type = type;
  }

  getNumber(): string {
    return this.number;
  }

  setNumber(number: string): void {
    this.number = number;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }

  generateUUID(): string {
    this.setId(uuid());
    return this.getId();
  }
}

type IIdentificationDTO = IIdentificationBase;

export class IdentificationDTO implements IIdentificationDTO {
  type: string;
  number: string;
  name: string;

  constructor({
    type = BaseStub.type,
    number = BaseStub.number,
    name = BaseStub.name
  }: Partial<IIdentificationDTO>) {
    this.type = type;
    this.number = number;
    this.name = name;
  }
}
