export interface ITimezone {
  id: string;
  offset: number;
  description: string;
  locationId: string;
}

const Timestamp = new Date().toISOString().valueOf();

const TimezoneStub: ITimezone = {
  id: `new-timezone-${Timestamp}`,
  offset: 0,
  description: '',
  locationId: `location-for-new-timezone-${Timestamp}`
};

export class Timezone implements ITimezone {
  id: string;
  offset: number;
  description: string;
  locationId: string;
  constructor({
    id = TimezoneStub.id,
    offset = TimezoneStub.offset,
    description = TimezoneStub.description,
    locationId = TimezoneStub.locationId
  }: Partial<ITimezone>) {
    this.id = id;
    this.offset = offset;
    this.description = description;
    this.locationId = locationId;
  }
}

type TimezoneDTOOmitType = 'id';

export class TimezoneDTO
  implements Omit<ITimezone, TimezoneDTOOmitType>
{
  offset: number;
  description: string;
  locationId: string;

  constructor({
    offset = TimezoneStub.offset,
    description = TimezoneStub.description,
    locationId = TimezoneStub.locationId
  }: Partial<ITimezone>) {
    this.offset = offset;
    this.description = description;
    this.locationId = locationId;
  }
}
