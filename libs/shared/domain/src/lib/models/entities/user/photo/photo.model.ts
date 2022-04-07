export interface IPhoto {
  id: string;
  large: string;
  medium: string;
  thumbnail: string;
  userId: string;
}

const Timestamp = new Date().toISOString().valueOf();

const PhotoStub: IPhoto = {
  id: `new-photo-${Timestamp}`,
  large: '',
  medium: '',
  thumbnail: '',
  userId: `user-for-new-photo-${Timestamp}`
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