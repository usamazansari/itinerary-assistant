import { Gender } from '../../../constants';

import {
  Address,
  Demographics,
  Identification,
  SocialConnection,
  AddressDTO,
  DemographicsDTO,
  IdentificationDTO,
  SocialConnectionDTO
} from '.';

interface IPersonBase {
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth: Date | '';
  gender: Gender | '';
  website: string;
}

const BaseStub: IPersonBase = {
  fullName: '',
  email: '',
  phone: '',
  dateOfBirth: '',
  gender: '',
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
  dateOfBirth: Date | '';
  gender: Gender | '';
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
    dateOfBirth = BaseStub.dateOfBirth,
    gender = BaseStub.gender,
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
    this.dateOfBirth = dateOfBirth;
    this.gender = gender;
    this.website = website;
    this.address = address;
    this.demographics = demographics;
    this.identifications = identifications;
    this.socialConnections = socialConnections;
  }

  filterForInput(): Partial<Person> {
    let clone: Partial<Person> = {};
    if (!!this.id) clone = { ...clone, id: this.id };
    if (!!this.fullName) clone = { ...clone, fullName: this.fullName };
    if (!!this.email) clone = { ...clone, email: this.email };
    if (!!this.phone) clone = { ...clone, phone: this.phone };
    if (!!this.dateOfBirth) clone = { ...clone, dateOfBirth: this.dateOfBirth };
    if (!!this.website) clone = { ...clone, website: this.website };
    return clone;
  }
}

interface IPersonDTO extends IPersonBase {
  address: AddressDTO;
  demographics: DemographicsDTO;
  identifications: IdentificationDTO[];
  socialConnections: SocialConnectionDTO[];
}

export class PersonDTO implements IPersonDTO {
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth: Date | '';
  gender: Gender | '';
  website: string;
  address: AddressDTO;
  demographics: DemographicsDTO;
  identifications: IdentificationDTO[];
  socialConnections: SocialConnectionDTO[];

  constructor({
    fullName = BaseStub.fullName,
    email = BaseStub.email,
    phone = BaseStub.phone,
    dateOfBirth = BaseStub.dateOfBirth,
    gender = BaseStub.gender,
    website = BaseStub.website,
    address = new AddressDTO({}),
    demographics = new DemographicsDTO({}),
    identifications = [],
    socialConnections = []
  }: Partial<IPersonDTO>) {
    this.fullName = fullName;
    this.email = email;
    this.phone = phone;
    this.dateOfBirth = dateOfBirth;
    this.gender = gender;
    this.website = website;
    this.address = address;
    this.demographics = demographics;
    this.identifications = identifications;
    this.socialConnections = socialConnections;
  }
}
