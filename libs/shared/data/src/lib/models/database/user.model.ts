import { Gender } from '../../constants';
import {
  Address,
  Identification,
  Name,
  Photo,
  SocialConnection
} from '.';

const Timestamp = new Date().toISOString();

export interface IUser {
  id: string;
  name: Name;
  email: string;
  phone: string;
  address: Address;
  website: string;
  social: SocialConnection[];
  photo: Photo;
  dateOfBirth: Date;
  identifications: Identification[];
  gender: Gender;
}

const UserStub: IUser = {
  id: `new-user-${Timestamp}`,
  name: new Name({}),
  email: '',
  phone: '',
  address: new Address({}),
  website: '',
  social: [],
  photo: new Photo({}),
  dateOfBirth: new Date(),
  identifications: [],
  gender: Gender.Male
};

export class User implements IUser {
  id: string;
  name: Name;
  email: string;
  phone: string;
  address: Address;
  website: string;
  social: SocialConnection[];
  photo: Photo;
  dateOfBirth: Date;
  identifications: Identification[];
  gender: Gender;

  constructor({
    id = UserStub.id,
    name = UserStub.name,
    email = UserStub.email,
    phone = UserStub.phone,
    address = UserStub.address,
    website = UserStub.website,
    social = UserStub.social,
    photo = UserStub.photo,
    dateOfBirth = UserStub.dateOfBirth,
    identifications = UserStub.identifications,
    gender = UserStub.gender
  }: Partial<IUser>) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.address = address;
    this.website = website;
    this.social = social;
    this.photo = photo;
    this.dateOfBirth = dateOfBirth;
    this.identifications = identifications;
    this.gender = gender;
  }
}
