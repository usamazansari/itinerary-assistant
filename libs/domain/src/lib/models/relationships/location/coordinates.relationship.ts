/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-empty-pattern */

import { BaseRelationship } from '..';

const Timestamp = new Date().valueOf();

interface ICoordinatesRelationshipData {}

const CoordinatesRelationshipDataStub: ICoordinatesRelationshipData = {};

export class CoordinatesRelationshipData
  implements ICoordinatesRelationshipData
{
  constructor({}: Partial<ICoordinatesRelationshipData>) {}
}

const CoordinatesRelationshipStub =
  new BaseRelationship<CoordinatesRelationshipData>({
    id: `new-coordinates-relationship-${Timestamp}`,
    start: `coordinates-for-new-coordinates-relationship-${Timestamp}`,
    end: `location-for-new-coordinates-relationship-${Timestamp}`,
    data: new CoordinatesRelationshipData({})
  });

export class CoordinatesRelationship extends BaseRelationship<CoordinatesRelationshipData> {
  constructor({
    id = CoordinatesRelationshipStub.id,
    start: coordinatesId = CoordinatesRelationshipStub.start,
    end: locationId = CoordinatesRelationshipStub.end,
    data = CoordinatesRelationshipStub.data
  }: Partial<CoordinatesRelationship>) {
    super({ id, start: coordinatesId, end: locationId, data });
    this.id = id;
    this.start = coordinatesId;
    this.end = locationId;
    this.data = data;
  }
}
