import { UserDemographics } from '.';

const Timestamp = new Date().valueOf();

export interface IUser {
  id: string;
  demographics: UserDemographics;
  email: string;
  phone: string;
  dateOfBirth: Date;
  // gender: Gender;
  website: string;
  // address: Address;
  // socialConnections: SocialConnection[];
  // photos: Photo[];
  // identifications: Identification[];
}

const UserStub: IUser = {
  id: `new-user-${Timestamp}`,
  demographics: new UserDemographics({
    id: `demographics-for-new-user-${Timestamp}`
  }),
  email: '',
  phone: '',
  dateOfBirth: new Date(),
  // gender: Gender.Male
  website: ''
  // address: new Address({}),
  // socialConnections: [],
  // photos: [],
  // identifications: []
};

export class User implements IUser {
  id: string;
  demographics: UserDemographics;
  email: string;
  phone: string;
  dateOfBirth: Date;
  // gender: Gender;
  website: string;
  // address: Address;
  // socialConnections: SocialConnection[];
  // photos: Photo[];
  // identifications: Identification[];

  constructor({
    id = UserStub.id,
    demographics = UserStub.demographics,
    email = UserStub.email,
    phone = UserStub.phone,
    dateOfBirth = UserStub.dateOfBirth,
    // gender = UserStub.gender
    website = UserStub.website
  }: // address = UserStub.address,
  // identifications = UserStub.identifications,
  // photos = UserStub.photos,
  // socialConnections = UserStub.socialConnections
  Partial<IUser>) {
    this.id = id;
    this.demographics = demographics;
    this.email = email;
    this.phone = phone;
    this.dateOfBirth = dateOfBirth;
    // this.gender = gender;
    this.website = website;
    // this.address = address;
    // this.socialConnections = socialConnections;
    // this.photos = photos;
    // this.identifications = identifications;
  }
}
