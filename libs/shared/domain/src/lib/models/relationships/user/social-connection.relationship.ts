/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-empty-pattern */

import { BaseRelationship } from '..';

const Timestamp = new Date().valueOf();

interface ISocialConnectionRelationshipData {}

const SocialConnectionRelationshipDataStub: ISocialConnectionRelationshipData =
  {};

export class SocialConnectionRelationshipData
  implements ISocialConnectionRelationshipData
{
  constructor({}: Partial<ISocialConnectionRelationshipData>) {}
}

const SocialConnectionRelationshipStub =
  new BaseRelationship<SocialConnectionRelationshipData>({
    id: `new-social-connection-relationship-${Timestamp}`,
    // socialConnectionId: `social-connection-for-new-social-connection-relationship-${Timestamp}`,
    end: `person-for-new-social-connection-relationship-${Timestamp}`,
    data: new SocialConnectionRelationshipData({})
  });

export class SocialConnectionRelationship extends BaseRelationship<SocialConnectionRelationshipData> {
  constructor({
    id = SocialConnectionRelationshipStub.id,
    start: socialConnectionId = SocialConnectionRelationshipStub.start,
    end: personId = SocialConnectionRelationshipStub.end,
    data = SocialConnectionRelationshipStub.data
  }: Partial<SocialConnectionRelationship>) {
    super({ id, start: socialConnectionId, end: personId, data });
    this.id = id;
    this.start = socialConnectionId;
    this.end = personId;
    this.data = data;
  }
}
