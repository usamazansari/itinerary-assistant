import { BaseModel } from '../base/base.model';
import { Gender } from '../../../constants';

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

type IPerson = IPersonBase;

abstract class PersonBase extends BaseModel implements IPerson {
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth?: Date;
  gender?: Gender;
  website: string;

  constructor({
    id = '',
    fullName = BaseStub.fullName,
    email = BaseStub.email,
    phone = BaseStub.phone,
    dateOfBirth,
    gender,
    website = BaseStub.website
  }: Partial<IPerson & BaseModel>) {
    super({ id });
    this.fullName = fullName;
    this.email = email;
    this.phone = phone;
    this.website = website;

    if (!!dateOfBirth) this.dateOfBirth = dateOfBirth;
    if (!!gender) this.gender = gender;
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
}

type IPersonDTO = IPersonBase;

abstract class PersonDTO implements IPersonDTO {
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

export { IPerson, PersonBase, PersonDTO };
