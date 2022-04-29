import { Tenure } from '../..';

export interface IIdentification {
  id: string;
  type: string;
  number: string;
  name: string;
  validity: Tenure;
  personId: string;
}

const Timestamp = new Date().toISOString().valueOf();

const IdentificationStub: IIdentification = {
  id: `new-identification-${Timestamp}`,
  type: '',
  number: '',
  name: '',
  validity: new Tenure({
    id: `tenure-for-new-identification-${Timestamp}`
  }),
  personId: `person-for-new-identification-${Timestamp}`
};

export class Identification implements IIdentification {
  id: string;
  type: string;
  number: string;
  name: string;
  validity: Tenure;
  personId: string;

  constructor({
    id = IdentificationStub.id,
    type = IdentificationStub.type,
    number = IdentificationStub.number,
    name = IdentificationStub.name,
    validity = IdentificationStub.validity,
    personId = IdentificationStub.personId
  }: Partial<IIdentification>) {
    this.id = id;
    this.type = type;
    this.number = number;
    this.name = name;
    this.validity = validity;
    this.personId = personId;
  }
}

type IdentificationDTOOmitType = 'id';

export class IdentificationDTO
  implements Omit<IIdentification, IdentificationDTOOmitType>
{
  type: string;
  number: string;
  name: string;
  validity: Tenure;
  personId: string;

  constructor({
    type = IdentificationStub.type,
    number = IdentificationStub.number,
    name = IdentificationStub.name,
    validity = IdentificationStub.validity,
    personId = IdentificationStub.personId
  }: Partial<IIdentification>) {
    this.type = type;
    this.number = number;
    this.name = name;
    this.validity = validity;
    this.personId = personId;
  }
}
