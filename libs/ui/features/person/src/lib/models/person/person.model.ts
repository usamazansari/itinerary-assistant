import { Gender } from '../../imports/constants';
import { BaseModel, IPerson, IPersonBase } from '../../imports/models';

import { Address } from '../address/address.model';

class Person extends BaseModel implements IPerson {
  public fullName: string;
  public email: string;
  public phone: string;
  public dateOfBirth?: Date;
  public gender?: Gender;
  public website: string;
  public addresses?: Address[];

  constructor({
    id = '',
    fullName = '',
    email = '',
    phone = '',
    dateOfBirth,
    gender,
    website = ''
  }: Partial<Person & BaseModel>) {
    super({ id });
    this.fullName = fullName;
    this.email = email;
    this.phone = phone;
    this.website = website;

    if (!!dateOfBirth) this.dateOfBirth = dateOfBirth;
    if (!!gender) this.gender = gender;
  }

  public getFullName() {
    return this.fullName;
  }

  public setFullName(fullName = '') {
    this.fullName = fullName;
  }

  public getEmail() {
    return this.email;
  }

  public setEmail(email = '') {
    this.email = email;
  }

  public getPhone() {
    return this.phone;
  }

  public setPhone(phone = '') {
    this.phone = phone;
  }

  public getWebsite() {
    return this.website;
  }

  public setWebsite(website = '') {
    this.website = website;
  }

  public getDateOfBirth() {
    return this.dateOfBirth;
  }

  public setDateOfBirth(dateOfBirth: Date | undefined) {
    this.dateOfBirth = dateOfBirth;
  }

  public getGender() {
    return this.gender;
  }

  public setGender(gender: Gender | undefined) {
    this.gender = gender;
  }

  public getAddresses() {
    return this.addresses;
  }

  public setAddresses(addresses: Address[]) {
    this.addresses = addresses;
  }
}

class PersonDTO implements IPersonBase {
  public fullName: string;
  public email: string;
  public phone: string;
  public dateOfBirth?: Date;
  public gender?: Gender;
  public website: string;

  constructor({
    fullName = '',
    email = '',
    phone = '',
    dateOfBirth,
    gender,
    website = ''
  }: Partial<PersonDTO>) {
    this.fullName = fullName;
    this.email = email;
    this.phone = phone;
    this.website = website;

    if (!!dateOfBirth) this.dateOfBirth = dateOfBirth;
    if (!!gender) this.gender = gender;
  }
}

export { Person, PersonDTO };
