import { Gender } from '../../constants';
import {
  Address,
  Identification,
  Name,
  Photo,
  SocialConnection
} from '.';

// type UserAddress = Address;
// type UserGender = Gender;
// type UserIdentifications = Identification[];
// type UserName = Name;
// type UserPhoto = Photo;
// type UserSocialConnections = SocialConnection[];

export interface IUserOverview {
  id: string;
  displayName: string;
  displayAvatar: string;
}

const UserOverviewStub: IUserOverview = {
  id: `new-user-${new Date().toISOString()}`,
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
  // name: UserName;
  email: string;
  phone: string;
  // address: UserAddress;
  address: Address;
  website: string;
  social: SocialConnection[];
  // social: UserSocialConnections;
  photo: Photo;
  // photo: UserPhoto;
  dateOfBirth: string;
  identifications: Identification[];
  // identifications: UserIdentifications;
  gender: Gender;
  // gender: UserGender;
}

const UserDetailsStub: IUserDetails = {
  id: `new-user-${new Date().toISOString()}`,
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
  // name: UserName;
  email: string;
  phone: string;
  address: Address;
  // address: UserAddress;
  website: string;
  social: SocialConnection[];
  // social: UserSocialConnections;
  photo: Photo;
  // photo: UserPhoto;
  dateOfBirth: string;
  identifications: Identification[];
  // identifications: UserIdentifications;
  gender: Gender;
  // gender: UserGender;

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
  // overview: UserOverview;
  // details: UserDetails;
}

const UserStub: IUser = {
  id: `new-user-${new Date().toISOString()}`
  // details: new UserDetails({}),
  // overview: new UserOverview({})
};

export class User implements IUser {
  id: string;
  // overview: UserOverview;
  // details: UserDetails;

  constructor({
    id = UserStub.id
  }: // details = UserStub.details,
  // overview = UserStub.overview
  Partial<IUser>) {
    this.id = id;
    // this.details = details;
    // this.overview = overview;
  }
}
