// TODO - Usama Ansari: Try using `Date` instead of `string`

export interface ITenure {
  id: string;
  start: string;
  end: string;
}

const TenureStub: ITenure = {
  id: `new-tenure-${new Date().toISOString()}`,
  start: '',
  end: ''
};

export class Tenure implements ITenure {
  id: string;
  start: string;
  end: string;

  constructor({
    id = TenureStub.id,
    start = TenureStub.start,
    end = TenureStub.end
  }: Partial<ITenure>) {
    this.id = id;
    this.start = start;
    this.end = end;
  }
}

type TenureDTOOmitType = 'id';

export class TenureDTO implements Omit<ITenure, TenureDTOOmitType> {
  start: string;
  end: string;

  constructor({
    start = TenureStub.start,
    end = TenureStub.end
  }: Partial<ITenure>) {
    this.start = start;
    this.end = end;
  }
}
