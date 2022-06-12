/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-empty-pattern */

import { BaseRelationship } from '..';

const Timestamp = new Date().valueOf();

interface ITenureRelationshipData {}

const TenureRelationshipDataStub: ITenureRelationshipData = {};

export class TenureRelationshipData implements ITenureRelationshipData {
  constructor({}: Partial<ITenureRelationshipData>) {}
}

const TenureRelationshipStub = new BaseRelationship<TenureRelationshipData>({
  id: `new-tenure-relationship-${Timestamp}`,
  start: `tenure-for-new-tenure-relationship-${Timestamp}`,
  end: `entity-for-new-tenure-relationship-${Timestamp}`,
  data: new TenureRelationshipData({})
});

export class TenureRelationship extends BaseRelationship<TenureRelationshipData> {
  constructor({
    id = TenureRelationshipStub.id,
    start: tenureId = TenureRelationshipStub.start,
    end: entityId = TenureRelationshipStub.end,
    data = TenureRelationshipStub.data
  }: Partial<TenureRelationship>) {
    super({ id, start: tenureId, end: entityId, data });
    this.id = id;
    this.start = tenureId;
    this.end = entityId;
    this.data = data;
  }
}
