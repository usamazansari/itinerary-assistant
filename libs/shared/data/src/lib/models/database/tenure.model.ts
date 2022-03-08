export interface ITenure {
  id: string;
  start: string | number;
  end: string | number;
}

const TenureStub: ITenure = {
  id: `new-tenure-${new Date().toISOString()}`,
  start: '',
  end: ''
};

export class Tenure implements ITenure {
  id: string;
  start: string | number;
  end: string | number;

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
  start: string | number;
  end: string | number;

  constructor({
    start = TenureStub.start,
    end = TenureStub.end
  }: Partial<ITenure>) {
    this.start = start;
    this.end = end;
  }
}
