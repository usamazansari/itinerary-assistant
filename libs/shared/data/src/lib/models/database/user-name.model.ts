export interface IUserName {
  id: string;
  full?: string;
  first: string;
  last: string;
}

const Timestamp = new Date().toISOString();

const UserNameStub: IUserName = {
  id: `new-name-${Timestamp}`,
  full: '',
  first: '',
  last: ''
};

export class UserName implements IUserName {
  id: string;
  full: string;
  first: string;
  last: string;

  constructor({
    id = UserNameStub.id,
    full = UserNameStub.full,
    first = UserNameStub.first,
    last = UserNameStub.last
  }: Partial<IUserName>) {
    this.id = id;
    this.first = first;
    this.last = last;
    this.full = full ?? `${this.first} ${this.last}`;
  }
}

type NameDTOOmitType = 'id' | 'full';

export class NameDTO implements Omit<IUserName, NameDTOOmitType> {
  first: string;
  last: string;

  constructor({
    first = UserNameStub.first,
    last = UserNameStub.last
  }: Partial<IUserName>) {
    this.first = first;
    this.last = last;
  }
}
