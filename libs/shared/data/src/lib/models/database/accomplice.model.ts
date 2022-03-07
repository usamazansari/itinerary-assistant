import { Gender } from '../../constants';
import {
  Address,
  Identification,
  Name,
  Photo,
  SocialConnection
} from '.';

type AccompliceAddress = Address;
type AccompliceGender = Gender;
type AccompliceIdentifications = Identification[];
type AccompliceName = Name;
type AccomplicePhoto = Photo;
type AccompliceSocialConnections = SocialConnection[];

export interface IAccompliceOverview {
  id: string;
  displayName: string;
  displayAvatar: string;
}

const AccompliceOverviewStub: IAccompliceOverview = {
  id: `new-accomplice-${new Date().toISOString()}`,
  displayName: '',
  displayAvatar: ''
};

export class AccompliceOverview implements IAccompliceOverview {
  id: string;
  displayName: string;
  displayAvatar: string;

  constructor({
    id = AccompliceOverviewStub.id,
    displayName = AccompliceOverviewStub.displayName,
    displayAvatar = AccompliceOverviewStub.displayAvatar
  }: Partial<IAccompliceOverview>) {
    this.id = id;
    this.displayName = displayName;
    this.displayAvatar = displayAvatar;
  }
}

export interface IAccompliceDetails {
  id: string;
  name: AccompliceName;
  email: string;
  phone: string;
  address: AccompliceAddress;
  website: string;
  social: AccompliceSocialConnections;
  photo: AccomplicePhoto;
  dateOfBirth: string;
  identifications: AccompliceIdentifications;
  gender: AccompliceGender;
}

const AccompliceDetailsStub: IAccompliceDetails = {
  id: `new-accomplice-${new Date().toISOString()}`,
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

export class AccompliceDetails implements IAccompliceDetails {
  id: string;
  name: AccompliceName;
  email: string;
  phone: string;
  address: AccompliceAddress;
  website: string;
  social: AccompliceSocialConnections;
  photo: AccomplicePhoto;
  dateOfBirth: string;
  identifications: AccompliceIdentifications;
  gender: AccompliceGender;

  constructor({
    id = AccompliceDetailsStub.id,
    name = AccompliceDetailsStub.name,
    email = AccompliceDetailsStub.email,
    phone = AccompliceDetailsStub.phone,
    address = AccompliceDetailsStub.address,
    website = AccompliceDetailsStub.website,
    social = AccompliceDetailsStub.social,
    photo = AccompliceDetailsStub.photo,
    dateOfBirth = AccompliceDetailsStub.dateOfBirth,
    identifications = AccompliceDetailsStub.identifications,
    gender = AccompliceDetailsStub.gender
  }: Partial<IAccompliceDetails>) {
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

export interface IAccomplice {
  id: string;
  overview: AccompliceOverview;
  // details: AccompliceDetails;
}

const AccompliceStub: IAccomplice = {
  id: `new-accomplice-${new Date().toISOString()}`,
  // details: new AccompliceDetails({}),
  overview: new AccompliceOverview({})
};

export class Accomplice implements IAccomplice {
  id: string;
  overview: AccompliceOverview;
  // details: AccompliceDetails;

  constructor({
    id = AccompliceStub.id,
    // details = AccompliceStub.details,
    overview = AccompliceStub.overview
  }: Partial<IAccomplice>) {
    this.id = id;
    // this.details = details;
    this.overview = overview;
  }
}
