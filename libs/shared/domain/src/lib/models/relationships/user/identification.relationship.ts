/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-empty-pattern */

import { BaseRelationship } from '..';

const Timestamp = new Date().valueOf();

interface IIdentificationRelationshipData {}

const IdentificationRelationshipDataStub: IIdentificationRelationshipData = {};

export class IdentificationRelationshipData
  implements IIdentificationRelationshipData
{
  constructor({}: Partial<IIdentificationRelationshipData>) {}
}

const IdentificationRelationshipStub =
  new BaseRelationship<IdentificationRelationshipData>({
    id: `new-identification-relationship-${Timestamp}`,
    start: `identification-for-new-identification-relationship-${Timestamp}`,
    end: `user-for-new-identification-relationship-${Timestamp}`,
    data: new IdentificationRelationshipData({})
  });

export class IdentificationRelationship extends BaseRelationship<IdentificationRelationshipData> {
  constructor({
    id = IdentificationRelationshipStub.id,
    start: identificationId = IdentificationRelationshipStub.start,
    end: userId = IdentificationRelationshipStub.end,
    data = IdentificationRelationshipStub.data
  }: Partial<IdentificationRelationship>) {
    super({ id, start: identificationId, end: userId, data });
    this.id = id;
    this.start = identificationId;
    this.end = userId;
    this.data = data;
  }
}
