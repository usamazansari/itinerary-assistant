// TODO - Usama Ansari: add more fields (salutation, nickname, etc)
export interface IUserName {
  id: string;
  full?: string;
  first: string;
  last: string;
  userId: string;
}

const Timestamp = new Date().toISOString().valueOf();

const UserNameStub: IUserName = {
  id: `new-name-${Timestamp}`,
  full: '',
  first: '',
  last: '',
  userId: `user-for-new-name-${Timestamp}`
};

export class UserName implements IUserName {
  id: string;
  full: string;
  first: string;
  last: string;
  userId: string;

  constructor({
    id = UserNameStub.id,
    full = UserNameStub.full,
    first = UserNameStub.first,
    last = UserNameStub.last,
    userId = UserNameStub.userId
  }: Partial<IUserName>) {
    this.id = id;
    this.first = first;
    this.last = last;
    this.full = full ?? `${this.first} ${this.last}`;
    this.userId = userId;
  }
}

type NameDTOOmitType = 'id' | 'full';

export class NameDTO implements Omit<IUserName, NameDTOOmitType> {
  first: string;
  last: string;
  userId: string;

  constructor({
    first = UserNameStub.first,
    last = UserNameStub.last,
    userId = UserNameStub.userId
  }: Partial<IUserName>) {
    this.first = first;
    this.last = last;
    this.userId = userId;
  }
}
