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
  public fullName: string;
  public email: string;
  public phone: string;
  public dateOfBirth?: Date;
  public gender?: Gender;
  public website: string;

  constructor({
    id,
    fullName = BaseStub.fullName,
    email = BaseStub.email,
    phone = BaseStub.phone,
    dateOfBirth,
    gender,
    website = BaseStub.website
  }: Partial<PersonBase & BaseModel>) {
    super({ id });
    this.fullName = fullName;
    this.email = email;
    this.phone = phone;
    this.website = website;

    if (!!dateOfBirth) this.dateOfBirth = dateOfBirth;
    if (!!gender) this.gender = gender;
  }

  public getFullName(): string {
    return this.fullName;
  }

  public setFullName(fullName: string): void {
    this.fullName = fullName;
  }

  public getEmail(): string {
    return this.email;
  }

  public setEmail(email: string): void {
    this.email = email;
  }

  public getPhone(): string {
    return this.phone;
  }

  public setPhone(phone: string): void {
    this.phone = phone;
  }

  public getWebsite(): string {
    return this.website;
  }

  public setWebsite(website: string): void {
    this.website = website;
  }

  public getDateOfBirth(): Date | undefined {
    return this.dateOfBirth;
  }

  public setDateOfBirth(dateOfBirth: Date): void {
    this.dateOfBirth = dateOfBirth;
  }

  public getGender(): Gender | undefined {
    return this.gender;
  }

  public setGender(gender: Gender): void {
    this.gender = gender;
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
    fullName = BaseStub.fullName,
    email = BaseStub.email,
    phone = BaseStub.phone,
    dateOfBirth,
    gender,
    website = BaseStub.website
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
