export interface IIdentification {
  id: string;
  type: string;
  number: string;
  name: string;
  validity: string;
  // user: string;
}

const Timestamp = new Date().toISOString();

const IdentificationStub: IIdentification = {
  id: `new-identification-${Timestamp}`,
  type: '',
  number: '',
  name: '',
  validity: `tenure-for-new-identification-${Timestamp}`
  // user: `user-for-new-identification-${Timestamp}`
};

export class Identification implements IIdentification {
  id: string;
  type: string;
  number: string;
  name: string;
  validity: string;
  // user: string;

  constructor({
    id = IdentificationStub.id,
    type = IdentificationStub.type,
    number = IdentificationStub.number,
    name = IdentificationStub.name,
    validity = IdentificationStub.validity
  }: // user = IdentificationStub.user
  Partial<IIdentification>) {
    this.id = id;
    this.type = type;
    this.number = number;
    this.name = name;
    this.validity = validity;
    // this.user = user;
  }
}

type IdentificationDTOOmitType = 'id';

export class IdentificationDTO
  implements Omit<IIdentification, IdentificationDTOOmitType>
{
  type: string;
  number: string;
  name: string;
  validity: string;
  // user: string;

  constructor({
    type = IdentificationStub.type,
    number = IdentificationStub.number,
    name = IdentificationStub.name,
    validity = IdentificationStub.validity
  }: // user = IdentificationStub.user
  Partial<IIdentification>) {
    this.type = type;
    this.number = number;
    this.name = name;
    this.validity = validity;
    // this.user = user;
  }
}
