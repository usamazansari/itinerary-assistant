export interface IPhoto {
  id: string;
  large: string;
  medium: string;
  thumbnail: string;
  user: string;
}

const Timestamp = new Date().toISOString();

const PhotoStub: IPhoto = {
  id: `new-photo-${Timestamp}`,
  large: '',
  medium: '',
  thumbnail: '',
  user: `user-for-new-photo-${Timestamp}`
};

export class Photo implements IPhoto {
  id: string;
  large: string;
  medium: string;
  thumbnail: string;
  user: string;

  constructor({
    id = PhotoStub.id,
    large = PhotoStub.large,
    medium = PhotoStub.medium,
    thumbnail = PhotoStub.thumbnail,
    user = PhotoStub.user
  }: Partial<IPhoto>) {
    this.id = id;
    this.large = large;
    this.medium = medium;
    this.thumbnail = thumbnail;
    this.user = user;
  }
}

type PhotoDTOOmitType = 'id';

export class PhotoDTO implements Omit<IPhoto, PhotoDTOOmitType> {
  large: string;
  medium: string;
  thumbnail: string;
  user: string;

  constructor({
    large = PhotoStub.large,
    medium = PhotoStub.medium,
    thumbnail = PhotoStub.thumbnail,
    user = PhotoStub.user
  }: Partial<IPhoto>) {
    this.large = large;
    this.medium = medium;
    this.thumbnail = thumbnail;
    this.user = user;
  }
}
