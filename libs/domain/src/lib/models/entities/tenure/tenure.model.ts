interface ITenureBase {
  start: Date;
  end: Date;
}

const BaseStub: ITenureBase = {
  start: new Date(),
  end: new Date()
};

export interface ITenure extends ITenureBase {
  id: string;
}

export class Tenure implements ITenure {
  id: string;
  start: Date;
  end: Date;

  constructor({
    id = '',
    start = BaseStub.start,
    end = BaseStub.end
  }: Partial<ITenure>) {
    this.id = id;
    this.start = start;
    this.end = end;
  }
}

type ITenureDTO = ITenureBase;

export class TenureDTO implements ITenureDTO {
  start: Date;
  end: Date;

  constructor({
    start = BaseStub.start,
    end = BaseStub.end
  }: Partial<ITenureDTO>) {
    this.start = start;
    this.end = end;
  }
}
