import { Gender } from '../../constants';

const Timestamp = new Date().toISOString();

export interface IUser {
  id: string;

  // TODO - Usama Ansari: Remove this field and use it as string instead - Make another field for the detailed username (refer comments in Istring)
  username: string;
  email: string;
  phone: string;
  address: string;
  website: string;
  socialConnection: string[];
  photo: string;
  dateOfBirth: Date;
  identifications: string[];
  gender: Gender;
}

const UserStub: IUser = {
  id: `new-user-${Timestamp}`,
  username: `username-for-new-user-${Timestamp}`,
  email: '',
  phone: '',
  address: `address-for-new-user-${Timestamp}`,
  website: '',
  socialConnection: [],
  photo: `photo-for-new-user-${Timestamp}`,
  dateOfBirth: new Date(),
  identifications: [],
  gender: Gender.Male
};

export class User implements IUser {
  id: string;
  username: string;
  email: string;
  phone: string;
  address: string;
  website: string;
  socialConnection: string[];
  photo: string;
  dateOfBirth: Date;
  identifications: string[];
  gender: Gender;

  constructor({
    id = UserStub.id,
    username = UserStub.username,
    email = UserStub.email,
    phone = UserStub.phone,
    address = UserStub.address,
    website = UserStub.website,
    socialConnection = UserStub.socialConnection,
    photo = UserStub.photo,
    dateOfBirth = UserStub.dateOfBirth,
    identifications = UserStub.identifications,
    gender = UserStub.gender
  }: Partial<IUser>) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.phone = phone;
    this.address = address;
    this.website = website;
    this.socialConnection = socialConnection;
    this.photo = photo;
    this.dateOfBirth = dateOfBirth;
    this.identifications = identifications;
    this.gender = gender;
  }
}
