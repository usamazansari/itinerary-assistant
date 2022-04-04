import { Tenure } from '../..';

export interface IIdentification {
  id: string;
  type: string;
  number: string;
  name: string;
  validity: Tenure;
  userId: string;
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
  userId: `user-for-new-identification-${Timestamp}`
};

export class Identification implements IIdentification {
  id: string;
  type: string;
  number: string;
  name: string;
  validity: Tenure;
  userId: string;

  constructor({
    id = IdentificationStub.id,
    type = IdentificationStub.type,
    number = IdentificationStub.number,
    name = IdentificationStub.name,
    validity = IdentificationStub.validity,
    userId = IdentificationStub.userId
  }: Partial<IIdentification>) {
    this.id = id;
    this.type = type;
    this.number = number;
    this.name = name;
    this.validity = validity;
    this.userId = userId;
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
  userId: string;

  constructor({
    type = IdentificationStub.type,
    number = IdentificationStub.number,
    name = IdentificationStub.name,
    validity = IdentificationStub.validity,
    userId = IdentificationStub.userId
  }: Partial<IIdentification>) {
    this.type = type;
    this.number = number;
    this.name = name;
    this.validity = validity;
    this.userId = userId;
  }
}
