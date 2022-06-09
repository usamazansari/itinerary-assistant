import { Salutation } from '../../../../constants';
import { Person, PersonDTO } from '..';

interface IDemographicsBase {
  firstName: string;
  middleName: string;
  lastName: string;
  nickname: string;
  salutation: Salutation;
}

const BaseStub: IDemographicsBase = {
  firstName: '',
  middleName: '',
  lastName: '',
  nickname: '',
  salutation: Salutation.MISTER
};

export interface IDemographics extends IDemographicsBase {
  id: string;
  person: Person;
}

export class Demographics implements IDemographics {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  nickname: string;
  salutation: Salutation;
  person: Person;

  constructor({
    id = '',
    firstName = BaseStub.firstName,
    middleName = BaseStub.middleName,
    lastName = BaseStub.lastName,
    nickname = BaseStub.nickname,
    salutation = BaseStub.salutation,
    person = new Person({ id: '' })
  }: Partial<IDemographics>) {
    this.id = id;
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.nickname = nickname;
    this.salutation = salutation;
    this.person = person;
  }
}

interface IDemographicsDTO extends IDemographicsBase {
  person: PersonDTO;
}

export class DemographicsDTO implements IDemographicsDTO {
  firstName: string;
  middleName: string;
  lastName: string;
  nickname: string;
  salutation: Salutation;
  person: PersonDTO;

  constructor({
    firstName = BaseStub.firstName,
    middleName = BaseStub.middleName,
    lastName = BaseStub.lastName,
    nickname = BaseStub.nickname,
    salutation = BaseStub.salutation,
    person = new PersonDTO({})
  }: Partial<IDemographicsDTO>) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.nickname = nickname;
    this.salutation = salutation;
    this.person = person;
  }
}
