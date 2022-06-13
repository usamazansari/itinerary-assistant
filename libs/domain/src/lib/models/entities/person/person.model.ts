import { v4 as uuid } from 'uuid';

import { Gender } from '../../../constants';

import { Address, Demographics, Identification, SocialConnection } from '.';

interface IPersonBase {
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth?: Date;
  gender?: Gender;
  website: string;
}

const BaseStub: IPersonBase = {
  fullName: '',
  email: '',
  phone: '',
  website: ''
};

export interface IPerson extends IPersonBase {
  id: string;
  address: Address;
  demographics: Demographics;
  identifications: Identification[];
  socialConnections: SocialConnection[];
}

export class Person implements IPerson {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth?: Date;
  gender?: Gender;
  website: string;
  address: Address;
  demographics: Demographics;
  identifications: Identification[];
  socialConnections: SocialConnection[];

  constructor({
    id = '',
    fullName = BaseStub.fullName,
    email = BaseStub.email,
    phone = BaseStub.phone,
    dateOfBirth,
    gender,
    website = BaseStub.website,
    address = new Address({ id: '' }),
    demographics = new Demographics({ id: '' }),
    identifications = [],
    socialConnections = []
  }: Partial<IPerson>) {
    this.id = id;
    this.fullName = fullName;
    this.email = email;
    this.phone = phone;
    this.website = website;
    this.address = address;
    this.demographics = demographics;
    this.identifications = identifications;
    this.socialConnections = socialConnections;

    if (!!dateOfBirth) this.dateOfBirth = dateOfBirth;
    if (!!gender) this.gender = gender;
  }

  getId(): string {
    return this.id;
  }

  setId(id: string): void {
    this.id = id;
  }

  getFullName(): string {
    return this.fullName;
  }

  setFullName(fullName: string): void {
    this.fullName = fullName;
  }

  getEmail(): string {
    return this.email;
  }

  setEmail(email: string): void {
    this.email = email;
  }

  getPhone(): string {
    return this.phone;
  }

  setPhone(phone: string): void {
    this.phone = phone;
  }

  getWebsite(): string {
    return this.website;
  }

  setWebsite(website: string): void {
    this.website = website;
  }

  getDateOfBirth(): Date | undefined {
    return this.dateOfBirth;
  }

  setDateOfBirth(dateOfBirth: Date): void {
    this.dateOfBirth = dateOfBirth;
  }

  getGender(): Gender | undefined {
    return this.gender;
  }

  setGender(gender: Gender): void {
    this.gender = gender;
  }

  generateUUID(): string {
    this.setId(uuid());
    return this.getId();
  }
}

type IPersonDTO = IPersonBase;

export class PersonDTO implements IPersonDTO {
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth?: Date;
  gender?: Gender;
  website: string;

  constructor({
    fullName = BaseStub.fullName,
    email = BaseStub.email,
    phone = BaseStub.phone,
    dateOfBirth,
    gender,
    website = BaseStub.website
  }: Partial<IPersonDTO>) {
    this.fullName = fullName;
    this.email = email;
    this.phone = phone;
    this.website = website;

    if (!!dateOfBirth) this.dateOfBirth = dateOfBirth;
    if (!!gender) this.gender = gender;
  }
}
