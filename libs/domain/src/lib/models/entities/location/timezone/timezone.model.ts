interface ITimezoneBase {
  offset: number;
  description: string;
}

const BaseStub: ITimezoneBase = {
  offset: 0,
  description: ''
};

export interface ITimezone {
  id: string;
  offset: number;
  description: string;
}

export class Timezone implements ITimezone {
  id: string;
  offset: number;
  description: string;
  constructor({
    id = '',
    offset = BaseStub.offset,
    description = BaseStub.description
  }: Partial<ITimezone>) {
    this.id = id;
    this.offset = offset;
    this.description = description;
  }
}

type ITimezoneDTO = ITimezoneBase;

export class TimezoneDTO implements ITimezoneBase {
  offset: number;
  description: string;

  constructor({
    offset = BaseStub.offset,
    description = BaseStub.description
  }: Partial<ITimezoneDTO>) {
    this.offset = offset;
    this.description = description;
  }
}