export interface IPhoto {
  large: string;
  medium: string;
  thumbnail: string;
}

const PhotoStub: IPhoto = {
  large: '',
  medium: '',
  thumbnail: ''
};

export class Photo implements IPhoto {
  large: string;
  medium: string;
  thumbnail: string;

  constructor({
    large = PhotoStub.large,
    medium = PhotoStub.medium,
    thumbnail = PhotoStub.thumbnail
  }: Partial<IPhoto>) {
    this.large = large;
    this.medium = medium;
    this.thumbnail = thumbnail;
  }
}
