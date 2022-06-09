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
