export interface IPhoto {
  id: string;
  large: string;
  medium: string;
  thumbnail: string;
  userId: string;
}

const PhotoStub: IPhoto = {
  id: `new-photo-${new Date().toISOString()}`,
  large: '',
  medium: '',
  thumbnail: '',
  userId: `new-photo-for-user-${new Date().toISOString()}`
};

export class Photo implements IPhoto {
  id: string;
  large: string;
  medium: string;
  thumbnail: string;
  userId: string;

  constructor({
    id = PhotoStub.id,
    large = PhotoStub.large,
    medium = PhotoStub.medium,
    thumbnail = PhotoStub.thumbnail,
    userId = PhotoStub.userId
  }: Partial<IPhoto>) {
    this.id = id;
    this.large = large;
    this.medium = medium;
    this.thumbnail = thumbnail;
    this.userId = userId;
  }
}

type PhotoDTOOmitType = 'id';

export class PhotoDTO implements Omit<IPhoto, PhotoDTOOmitType> {
  large: string;
  medium: string;
  thumbnail: string;
  userId: string;

  constructor({
    large = PhotoStub.large,
    medium = PhotoStub.medium,
    thumbnail = PhotoStub.thumbnail,
    userId = PhotoStub.userId
  }: Partial<IPhoto>) {
    this.large = large;
    this.medium = medium;
    this.thumbnail = thumbnail;
    this.userId = userId;
  }
}
