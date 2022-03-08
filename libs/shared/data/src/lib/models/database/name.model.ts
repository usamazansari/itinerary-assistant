export interface IName {
  id: string;
  full: string;
  first: string;
  last: string;
  userId: string;
}

const NameStub: IName = {
  id: `new-name-${new Date().toISOString()}`,
  full: '',
  first: '',
  last: '',
  userId: `new-name-for-user-${new Date().toISOString()}`
};

export class Name implements IName {
  id: string;
  full: string;
  first: string;
  last: string;
  userId: string;

  constructor({
    id = NameStub.id,
    full = NameStub.full,
    first = NameStub.first,
    last = NameStub.last,
    userId = NameStub.userId
  }: Partial<IName>) {
    this.id = id;
    this.first = first;
    this.last = last;
    this.full = full ?? `${this.first} ${this.last}`;
    this.userId = userId;
  }
}

type NameDTOOmitType = 'id' | 'full';

export class NameDTO implements Omit<IName, NameDTOOmitType> {
  first: string;
  last: string;
  userId: string;

  constructor({
    first = NameStub.first,
    last = NameStub.last,
    userId = NameStub.userId
  }: Partial<IName>) {
    this.first = first;
    this.last = last;
    this.userId = userId;
  }
}
