import { Salutation } from '../../../../constants';

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
}

export class Demographics implements IDemographics {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  nickname: string;
  salutation: Salutation;

  constructor({
    id = '',
    firstName = BaseStub.firstName,
    middleName = BaseStub.middleName,
    lastName = BaseStub.lastName,
    nickname = BaseStub.nickname,
    salutation = BaseStub.salutation
  }: Partial<IDemographics>) {
    this.id = id;
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.nickname = nickname;
    this.salutation = salutation;
  }
}

type IDemographicsDTO = IDemographicsBase;

export class DemographicsDTO implements IDemographicsDTO {
  firstName: string;
  middleName: string;
  lastName: string;
  nickname: string;
  salutation: Salutation;

  constructor({
    firstName = BaseStub.firstName,
    middleName = BaseStub.middleName,
    lastName = BaseStub.lastName,
    nickname = BaseStub.nickname,
    salutation = BaseStub.salutation
  }: Partial<IDemographicsDTO>) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.nickname = nickname;
    this.salutation = salutation;
  }
}
