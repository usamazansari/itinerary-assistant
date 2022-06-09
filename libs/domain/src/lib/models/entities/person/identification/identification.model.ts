import { Person, PersonDTO, Tenure, TenureDTO } from '../..';

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
  person: Person;
}

export class Identification implements IIdentification {
  id: string;
  type: string;
  number: string;
  name: string;
  validity: Tenure;
  person: Person;

  constructor({
    id = '',
    type = BaseStub.type,
    number = BaseStub.number,
    name = BaseStub.name,
    validity = new Tenure({ id: '' }),
    person = new Person({ id: '' })
  }: Partial<IIdentification>) {
    this.id = id;
    this.type = type;
    this.number = number;
    this.name = name;
    this.validity = validity;
    this.person = person;
  }
}

interface IIdentificationDTO extends IIdentificationBase {
  validity: TenureDTO;
  person: PersonDTO;
}

export class IdentificationDTO implements IIdentificationDTO {
  type: string;
  number: string;
  name: string;
  validity: TenureDTO;
  person: PersonDTO;

  constructor({
    type = BaseStub.type,
    number = BaseStub.number,
    name = BaseStub.name,
    validity = new TenureDTO({}),
    person = new PersonDTO({})
  }: Partial<IIdentificationDTO>) {
    this.type = type;
    this.number = number;
    this.name = name;
    this.validity = validity;
    this.person = person;
  }
}
