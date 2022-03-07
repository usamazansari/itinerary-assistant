export interface IValidity {
  start: string | number;
  end: string | number;
}

const ValidityStub: IValidity = {
  start: '',
  end: ''
};

export class Validity implements IValidity {
  start: string | number;
  end: string | number;

  constructor({
    start = ValidityStub.start,
    end = ValidityStub.end
  }: Partial<IValidity>) {
    this.start = start;
    this.end = end;
  }
}

export interface IIdentification {
  id: string;
  type: string;
  number: string;
  name: string;
  validity: Validity;
}

const IdentificationStub: IIdentification = {
  id: '',
  type: '',
  number: '',
  name: '',
  validity: new Validity({})
};

export class Identification implements IIdentification {
  id: string;
  type: string;
  number: string;
  name: string;
  validity: Validity;

  constructor({
    id = IdentificationStub.id,
    type = IdentificationStub.type,
    number = IdentificationStub.number,
    name = IdentificationStub.name,
    validity = new Validity({})
  }: Partial<IIdentification>) {
    this.id = id;
    this.type = type;
    this.number = number;
    this.name = name;
    this.validity = validity;
  }
}
