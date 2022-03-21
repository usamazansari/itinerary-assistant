import { Gender } from '../../constants';
import {
  Address,
  Identification,
  UserName,
  Photo,
  SocialConnection
} from '.';

const Timestamp = new Date().valueOf();

export interface IUser {
  id: string;

  // TODO - Usama Ansari: Remove this field and use it as string instead - Make another field for the detailed username (refer comments in IUserName)
  username: UserName;
  email: string;
  phone: string;
  dateOfBirth: Date;
  // gender: Gender;
  address: Address;
  website: string;
  // socialConnection: SocialConnection[];
  // photo: Photo;
  identifications: Identification[];
}

const UserStub: IUser = {
  id: `new-user-${Timestamp}`,
  username: new UserName({}),
  email: '',
  phone: '',
  dateOfBirth: new Date(),
  // gender: Gender.Male
  address: new Address({}),
  website: '',
  // socialConnection: [],
  // photo: new Photo({}),
  identifications: []
};

export class User implements IUser {
  id: string;
  username: UserName;
  email: string;
  phone: string;
  dateOfBirth: Date;
  // gender: Gender;
  address: Address;
  website: string;
  // socialConnection: SocialConnection[];
  // photo: Photo;
  identifications: Identification[];

  constructor({
    id = UserStub.id,
    username = UserStub.username,
    email = UserStub.email,
    phone = UserStub.phone,
    dateOfBirth = UserStub.dateOfBirth,
    // gender = UserStub.gender
    address = UserStub.address,
    website = UserStub.website,
    identifications = UserStub.identifications
  }: // socialConnection = UserStub.socialConnection,
  // photo = UserStub.photo,
  Partial<IUser>) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.phone = phone;
    this.dateOfBirth = dateOfBirth;
    // this.gender = gender;
    this.address = address;
    this.website = website;
    // this.socialConnection = socialConnection;
    // this.photo = photo;
    this.identifications = identifications;
  }
}
