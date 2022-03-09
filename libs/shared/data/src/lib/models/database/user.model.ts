import { Gender } from '../../constants';
import {
  Address,
  Identification,
  Name,
  Photo,
  SocialConnection
} from '.';

export interface IUserOverview {
  id: string;
  displayName: string;
  displayAvatar: string;
}

const Timestamp = new Date().toISOString();

const UserOverviewStub: IUserOverview = {
  id: `new-user-${Timestamp}`,
  displayName: '',
  displayAvatar: ''
};

export class UserOverview implements IUserOverview {
  id: string;
  displayName: string;
  displayAvatar: string;

  constructor({
    id = UserOverviewStub.id,
    displayName = UserOverviewStub.displayName,
    displayAvatar = UserOverviewStub.displayAvatar
  }: Partial<IUserOverview>) {
    this.id = id;
    this.displayName = displayName;
    this.displayAvatar = displayAvatar;
  }
}

export interface IUserDetails {
  id: string;
  name: Name;
  email: string;
  phone: string;
  address: Address;
  website: string;
  social: SocialConnection[];
  photo: Photo;
  dateOfBirth: string;
  identifications: Identification[];
  gender: Gender;
}

const UserDetailsStub: IUserDetails = {
  id: `new-user-${Timestamp}`,
  name: new Name({}),
  email: '',
  phone: '',
  address: new Address({}),
  website: '',
  social: [],
  photo: new Photo({}),
  dateOfBirth: '',
  identifications: [],
  gender: Gender.Male
};

export class UserDetails implements IUserDetails {
  id: string;
  name: Name;
  email: string;
  phone: string;
  address: Address;
  website: string;
  social: SocialConnection[];
  photo: Photo;
  dateOfBirth: string;
  identifications: Identification[];
  gender: Gender;

  constructor({
    id = UserDetailsStub.id,
    name = UserDetailsStub.name,
    email = UserDetailsStub.email,
    phone = UserDetailsStub.phone,
    address = UserDetailsStub.address,
    website = UserDetailsStub.website,
    social = UserDetailsStub.social,
    photo = UserDetailsStub.photo,
    dateOfBirth = UserDetailsStub.dateOfBirth,
    identifications = UserDetailsStub.identifications,
    gender = UserDetailsStub.gender
  }: Partial<IUserDetails>) {
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

export interface IUser {
  id: string;
}

const UserStub: IUser = {
  id: `new-user-${Timestamp}`
};

export class User implements IUser {
  id: string;

  constructor({ id = UserStub.id }: Partial<IUser>) {
    this.id = id;
  }
}
