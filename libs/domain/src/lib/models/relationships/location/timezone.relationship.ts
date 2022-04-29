/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-empty-pattern */

import { BaseRelationship } from '..';

const Timestamp = new Date().valueOf();

interface ITimezoneRelationshipData {}

const TimezoneRelationshipDataStub: ITimezoneRelationshipData = {};

export class TimezoneRelationshipData implements ITimezoneRelationshipData {
  constructor({}: Partial<ITimezoneRelationshipData>) {}
}

const TimezoneRelationshipStub = new BaseRelationship<TimezoneRelationshipData>(
  {
    id: `new-timezone-relationship-${Timestamp}`,
    start: `timezone-for-new-timezone-relationship-${Timestamp}`,
    end: `location-for-new-timezone-relationship-${Timestamp}`,
    data: new TimezoneRelationshipData({})
  }
);

export class TimezoneRelationship extends BaseRelationship<TimezoneRelationshipData> {
  constructor({
    id = TimezoneRelationshipStub.id,
    start: timezoneId = TimezoneRelationshipStub.start,
    end: locationId = TimezoneRelationshipStub.end,
    data = TimezoneRelationshipStub.data
  }: Partial<TimezoneRelationship>) {
    super({ id, start: timezoneId, end: locationId, data });
    this.id = id;
    this.start = timezoneId;
    this.end = locationId;
    this.data = data;
  }
}
