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

  getId(): string {
    return this.id;
  }
  setId(id: string): void {
    this.id = id;
  }

  getStart(): Date {
    return this.start;
  }
  setStart(start: Date): void {
    this.start = start;
  }

  getEnd(): Date {
    return this.end;
  }
  setEnd(end: Date): void {
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
