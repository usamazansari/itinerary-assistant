export interface ITenure {
  id: string;
  start: Date;
  end: Date;
}

const TenureStub: ITenure = {
  id: `new-tenure-${new Date().toISOString()}`,
  start: new Date(),
  end: new Date()
};

export class Tenure implements ITenure {
  id: string;
  start: Date;
  end: Date;

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
  start: Date;
  end: Date;

  constructor({
    start = TenureStub.start,
    end = TenureStub.end
  }: Partial<ITenure>) {
    this.start = start;
    this.end = end;
  }
}
