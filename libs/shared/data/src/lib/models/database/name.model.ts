export interface IName {
  id: string;
  full: string;
  first: string;
  last: string;
  user: string;
}

const Timestamp = new Date().toISOString();

const NameStub: IName = {
  id: `new-name-${Timestamp}`,
  full: '',
  first: '',
  last: '',
  user: `user-for-new-name-${Timestamp}`
};

export class Name implements IName {
  id: string;
  full: string;
  first: string;
  last: string;
  user: string;

  constructor({
    id = NameStub.id,
    full = NameStub.full,
    first = NameStub.first,
    last = NameStub.last,
    user = NameStub.user
  }: Partial<IName>) {
    this.id = id;
    this.first = first;
    this.last = last;
    this.full = full ?? `${this.first} ${this.last}`;
    this.user = user;
  }
}

type NameDTOOmitType = 'id' | 'full';

export class NameDTO implements Omit<IName, NameDTOOmitType> {
  first: string;
  last: string;
  user: string;

  constructor({
    first = NameStub.first,
    last = NameStub.last,
    user = NameStub.user
  }: Partial<IName>) {
    this.first = first;
    this.last = last;
    this.user = user;
  }
}
