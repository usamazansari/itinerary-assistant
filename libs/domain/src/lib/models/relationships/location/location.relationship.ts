/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-empty-pattern */

import { BaseRelationship } from '..';

const Timestamp = new Date().valueOf();

interface ILocationRelationshipData {}

const LocationRelationshipDataStub: ILocationRelationshipData = {};

export class LocationRelationshipData implements ILocationRelationshipData {
  constructor({}: Partial<ILocationRelationshipData>) {}
}

const LocationRelationshipStub = new BaseRelationship<LocationRelationshipData>(
  {
    id: `new-location-relationship-${Timestamp}`,
    start: `location-for-new-location-relationship-${Timestamp}`,
    end: `entity-for-new-location-relationship-${Timestamp}`,
    data: new LocationRelationshipData({})
  }
);

export class LocationRelationship extends BaseRelationship<LocationRelationshipData> {
  constructor({
    id = LocationRelationshipStub.id,
    start: locationId = LocationRelationshipStub.start,
    end: entityId = LocationRelationshipStub.end,
    data = LocationRelationshipStub.data
  }: Partial<LocationRelationship>) {
    super({ id, start: locationId, end: entityId, data });
    this.id = id;
    this.start = locationId;
    this.end = entityId;
    this.data = data;
  }
}
