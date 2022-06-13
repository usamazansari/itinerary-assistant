import { Tenure, TenureDTO } from '../..';

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

  filterForInput(): Partial<Identification> {
    let clone: Partial<Identification> = {};
    if (!!this.id) clone = { ...clone, id: this.id };
    if (!!this.type) clone = { ...clone, type: this.type };
    if (!!this.number) clone = { ...clone, number: this.number };
    if (!!this.name) clone = { ...clone, name: this.name };
    return clone;
  }
}

interface IIdentificationDTO extends IIdentificationBase {
  validity: TenureDTO;
}

export class IdentificationDTO implements IIdentificationDTO {
  type: string;
  number: string;
  name: string;
  validity: TenureDTO;

  constructor({
    type = BaseStub.type,
    number = BaseStub.number,
    name = BaseStub.name,
    validity = new TenureDTO({})
  }: Partial<IIdentificationDTO>) {
    this.type = type;
    this.number = number;
    this.name = name;
    this.validity = validity;
  }
}
