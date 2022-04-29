import { Gender } from '../../../constants';

import {
  Address,
  Demographics,
  Identification,
  Photo,
  SocialConnection
} from '.';

const Timestamp = new Date().valueOf();

export interface IPerson {
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

const PersonStub: IPerson = {
  id: `new-person-${Timestamp}`,
  fullName: '',
  demographics: new Demographics({
    id: `demographics-for-new-person-${Timestamp}`
  }),
  email: '',
  phone: '',
  dateOfBirth: new Date(),
  gender: Gender.MALE,
  website: '',
  address: new Address({}),
  identifications: [],
  socialConnections: [],
  photos: []
};

export class Person implements IPerson {
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
    id = PersonStub.id,
    fullName = PersonStub.fullName,
    demographics = PersonStub.demographics,
    email = PersonStub.email,
    phone = PersonStub.phone,
    dateOfBirth = PersonStub.dateOfBirth,
    gender = PersonStub.gender,
    website = PersonStub.website,
    address = PersonStub.address,
    identifications = PersonStub.identifications,
    socialConnections = PersonStub.socialConnections,
    photos = PersonStub.photos
  }: Partial<IPerson>) {
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

type PersonDTOOmitType =
  | 'id'
  | 'demographics'
  | 'address'
  | 'socialConnections'
  | 'photos'
  | 'identifications';

export class PersonDTO implements Omit<IPerson, PersonDTOOmitType> {
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
    id = PersonStub.id,
    fullName = PersonStub.fullName,
    email = PersonStub.email,
    phone = PersonStub.phone,
    dateOfBirth = PersonStub.dateOfBirth,
    gender = PersonStub.gender,
    website = PersonStub.website,
    address = PersonStub.address,
    identifications = PersonStub.identifications,
    socialConnections = PersonStub.socialConnections,
    photos = PersonStub.photos
  }: Partial<IPerson>) {
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
