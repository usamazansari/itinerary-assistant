import { Gender } from '../../../constants';

import {
  Address,
  Demographics,
  Identification,
  Photo,
  SocialConnection
} from '.';

const Timestamp = new Date().valueOf();

export interface IUser {
  id: string;
  fullName: string;
  demographics: Demographics;
  email: string;
  phone: string;
  dateOfBirth: Date;
  gender: Gender;
  website: string;
  address: Address;
  identifications: Identification[];
  socialConnections: SocialConnection[];
  photos: Photo[];
}

const UserStub: IUser = {
  id: `new-user-${Timestamp}`,
  fullName: '',
  demographics: new Demographics({
    id: `demographics-for-new-user-${Timestamp}`
  }),
  email: '',
  phone: '',
  dateOfBirth: new Date(),
  gender: Gender.Male,
  website: '',
  address: new Address({}),
  identifications: [],
  socialConnections: [],
  photos: []
};

export class User implements IUser {
  id: string;
  fullName: string;
  demographics: Demographics;
  email: string;
  phone: string;
  dateOfBirth: Date;
  gender: Gender;
  website: string;
  address: Address;
  identifications: Identification[];
  socialConnections: SocialConnection[];
  photos: Photo[];

  constructor({
    id = UserStub.id,
    fullName = UserStub.fullName,
    demographics = UserStub.demographics,
    email = UserStub.email,
    phone = UserStub.phone,
    dateOfBirth = UserStub.dateOfBirth,
    gender = UserStub.gender,
    website = UserStub.website,
    address = UserStub.address,
    identifications = UserStub.identifications,
    socialConnections = UserStub.socialConnections,
    photos = UserStub.photos
  }: Partial<IUser>) {
    this.id = id;
    this.fullName = fullName;
    this.demographics = demographics;
    this.email = email;
    this.phone = phone;
    this.dateOfBirth = dateOfBirth;
    this.gender = gender;
    this.website = website;
    this.address = address;
    this.identifications = identifications;
    this.socialConnections = socialConnections;
    this.photos = photos;
  }
}

type UserDTOOmitType =
  | 'id'
  | 'demographics'
  | 'address'
  | 'socialConnections'
  | 'photos'
  | 'identifications';

export class UserDTO implements Omit<IUser, UserDTOOmitType> {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth: Date;
  gender: Gender;
  website: string;
  address: Address;
  identifications: Identification[];
  socialConnections: SocialConnection[];
  photos: Photo[];

  constructor({
    id = UserStub.id,
    fullName = UserStub.fullName,
    email = UserStub.email,
    phone = UserStub.phone,
    dateOfBirth = UserStub.dateOfBirth,
    gender = UserStub.gender,
    website = UserStub.website,
    address = UserStub.address,
    identifications = UserStub.identifications,
    socialConnections = UserStub.socialConnections,
    photos = UserStub.photos
  }: Partial<IUser>) {
    this.id = id;
    this.fullName = fullName;
    this.email = email;
    this.phone = phone;
    this.dateOfBirth = dateOfBirth;
    this.gender = gender;
    this.website = website;
    this.address = address;
    this.identifications = identifications;
    this.socialConnections = socialConnections;
    this.photos = photos;
  }
}
