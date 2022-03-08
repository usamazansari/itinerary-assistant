export interface ITimezone {
  id: string;
  offset: number;
  description: string;
}

const TimezoneStub: ITimezone = {
  id: `new-timezone-${new Date().toISOString()}`,
  offset: 0,
  description: ''
};

export class Timezone implements ITimezone {
  id: string;
  offset: number;
  description: string;
  constructor({
    id = TimezoneStub.id,
    offset = TimezoneStub.offset,
    description = TimezoneStub.description
  }: Partial<ITimezone>) {
    this.id = id;
    this.offset = offset;
    this.description = description;
  }
}

type TimezoneDTOOmitType = 'id';

export class TimezoneDTO
  implements Omit<ITimezone, TimezoneDTOOmitType>
{
  offset: number;
  description: string;

  constructor({
    offset = TimezoneStub.offset,
    description = TimezoneStub.description
  }: Partial<ITimezone>) {
    this.offset = offset;
    this.description = description;
  }
}
