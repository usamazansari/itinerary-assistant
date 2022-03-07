export interface IName {
  full: string;
  first: string;
  last: string;
}

const NameStub: IName = {
  full: '',
  first: '',
  last: ''
};

export class Name implements IName {
  full: string;
  first: string;
  last: string;

  constructor({
    full = NameStub.full,
    first = NameStub.first,
    last = NameStub.last
  }: Partial<IName>) {
    this.first = first;
    this.last = last;
    this.full = full ?? `${this.first} ${this.last}`;
  }
}
