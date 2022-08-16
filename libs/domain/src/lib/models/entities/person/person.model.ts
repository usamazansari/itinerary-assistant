import { BaseModel } from '../base/base.model';
import { Gender } from '../../../constants';

import { AddressBase } from '../address/address.model';

interface IPersonBase {
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth?: Date;
  gender?: Gender;
  website: string;
}

interface IPerson extends IPersonBase {
  addresses?: AddressBase[];
}

abstract class PersonBase extends BaseModel implements IPerson {
  public fullName: string;
  public email: string;
  public phone: string;
  public dateOfBirth?: Date;
  public gender?: Gender;
  public website: string;
  public addresses?: AddressBase[];

  constructor({
    id = '',
    fullName = '',
    email = '',
    phone = '',
    dateOfBirth,
    gender,
    website = '',
    addresses
  }: Partial<PersonBase & BaseModel>) {
    super({ id });
    this.fullName = fullName;
    this.email = email;
    this.phone = phone;
    this.website = website;

    if (!!dateOfBirth) this.dateOfBirth = dateOfBirth;
    if (!!gender) this.gender = gender;
    if (!!addresses) this.addresses = !!addresses.length ? addresses : [];
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

  public setAddresses(addresses: AddressBase[]) {
    this.addresses = addresses;
  }
}

type IPersonDTO = IPersonBase;

abstract class PersonBaseDTO implements IPersonDTO {
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
  }: Partial<PersonBaseDTO>) {
    this.fullName = fullName;
    this.email = email;
    this.phone = phone;
    this.website = website;

    if (!!dateOfBirth) this.dateOfBirth = dateOfBirth;
    if (!!gender) this.gender = gender;
  }
}

export { IPerson, PersonBase, PersonBaseDTO };
