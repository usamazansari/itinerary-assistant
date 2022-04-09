/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-empty-pattern */

import { BaseRelationship } from '..';

const Timestamp = new Date().valueOf();

interface IPhotoRelationshipData {}

const PhotoRelationshipDataStub: IPhotoRelationshipData = {};

export class PhotoRelationshipData implements IPhotoRelationshipData {
  constructor({}: Partial<IPhotoRelationshipData>) {}
}

const PhotoRelationshipStub = new BaseRelationship<PhotoRelationshipData>({
  id: `new-photo-relationship-${Timestamp}`,
  start: `photo-for-new-photo-relationship-${Timestamp}`,
  end: `user-for-new-photo-relationship-${Timestamp}`,
  data: new PhotoRelationshipData({})
});

export class PhotoRelationship extends BaseRelationship<PhotoRelationshipData> {
  constructor({
    id = PhotoRelationshipStub.id,
    start: photoId = PhotoRelationshipStub.start,
    end: userId = PhotoRelationshipStub.end,
    data = PhotoRelationshipStub.data
  }: Partial<PhotoRelationship>) {
    super({ id, start: photoId, end: userId, data });
    this.id = id;
    this.start = photoId;
    this.end = userId;
    this.data = data;
  }
}
