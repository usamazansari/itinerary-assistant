export interface ITimezone {
  id: string;
  offset: number;
  description: string;
  location: string;
}

const Timestamp = new Date().toISOString();

const TimezoneStub: ITimezone = {
  id: `new-timezone-${Timestamp}`,
  offset: 0,
  description: '',
  location: `location-for-new-timezone-${Timestamp}`
};

export class Timezone implements ITimezone {
  id: string;
  offset: number;
  description: string;
  location: string;
  constructor({
    id = TimezoneStub.id,
    offset = TimezoneStub.offset,
    description = TimezoneStub.description,
    location = TimezoneStub.location
  }: Partial<ITimezone>) {
    this.id = id;
    this.offset = offset;
    this.description = description;
    this.location = location;
  }
}

type TimezoneDTOOmitType = 'id';

export class TimezoneDTO
  implements Omit<ITimezone, TimezoneDTOOmitType>
{
  offset: number;
  description: string;
  location: string;

  constructor({
    offset = TimezoneStub.offset,
    description = TimezoneStub.description,
    location = TimezoneStub.location
  }: Partial<ITimezone>) {
    this.offset = offset;
    this.description = description;
    this.location = location;
  }
}
