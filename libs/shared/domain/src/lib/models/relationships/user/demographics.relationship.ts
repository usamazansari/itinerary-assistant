/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-empty-pattern */

import { BaseRelationship } from '..';

const Timestamp = new Date().valueOf();

interface IDemographicsRelationshipData {}

const DemographicsRelationshipDataStub: IDemographicsRelationshipData = {};

export class DemographicsRelationshipData
  implements IDemographicsRelationshipData
{
  constructor({}: Partial<IDemographicsRelationshipData>) {}
}

const DemographicsRelationshipStub =
  new BaseRelationship<DemographicsRelationshipData>({
    id: `new-demographics-relationship-${Timestamp}`,
    start: `demographics-for-new-demographics-relationship-${Timestamp}`,
    end: `user-for-new-demographics-relationship-${Timestamp}`,
    data: new DemographicsRelationshipData({})
  });

export class DemographicsRelationship extends BaseRelationship<DemographicsRelationshipData> {
  constructor({
    id = DemographicsRelationshipStub.id,
    start: demographicsId = DemographicsRelationshipStub.start,
    end: userId = DemographicsRelationshipStub.end,
    data = DemographicsRelationshipStub.data
  }: Partial<DemographicsRelationship>) {
    super({ id, start: demographicsId, end: userId, data });
    this.id = id;
    this.start = demographicsId;
    this.end = userId;
    this.data = data;
  }
}
