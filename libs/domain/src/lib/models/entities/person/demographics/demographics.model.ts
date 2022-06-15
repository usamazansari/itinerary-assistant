import { v4 as uuid } from 'uuid';

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

  getId(): string {
    return this.id;
  }

  setId(id: string): void {
    this.id = id;
  }

  getFirstName(): string {
    return this.firstName;
  }

  setFirstName(firstName: string): void {
    this.firstName = firstName;
  }

  getMiddleName(): string {
    return this.middleName;
  }

  setMiddleName(middleName: string): void {
    this.middleName = middleName;
  }

  getLastName(): string {
    return this.lastName;
  }

  setLastName(lastName: string): void {
    this.lastName = lastName;
  }

  getNickname(): string {
    return this.nickname;
  }

  setNickname(nickname: string): void {
    this.nickname = nickname;
  }

  getSalutation(): Salutation {
    return this.salutation;
  }

  setSalutation(salutation: Salutation): void {
    this.salutation = salutation;
  }

  generateUUID(): string {
    this.setId(uuid());
    return this.getId();
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
