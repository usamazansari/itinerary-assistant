export interface IName {
  id: string;
  full: string;
  first: string;
  last: string;
}

const NameStub: IName = {
  id: `new-name-${new Date().toISOString()}`,
  full: '',
  first: '',
  last: ''
};

export class Name implements IName {
  id: string;
  full: string;
  first: string;
  last: string;

  constructor({
    id = NameStub.id,
    full = NameStub.full,
    first = NameStub.first,
    last = NameStub.last
  }: Partial<IName>) {
    this.id = id;
    this.first = first;
    this.last = last;
    this.full = full ?? `${this.first} ${this.last}`;
  }
}
