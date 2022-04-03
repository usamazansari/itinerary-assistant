// TODO - Usama Ansari: add more fields (salutation, nickname, etc)

import { Salutation } from '../../../constants';

export interface IUserDemographics {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  nickname: string;
  salutation: Salutation;
  userId: string;
}

const Timestamp = new Date().toISOString().valueOf();

const UserDemographicsStub: IUserDemographics = {
  id: `new-demographics-${Timestamp}`,
  firstName: '',
  middleName: '',
  lastName: '',
  nickname: '',
  salutation: Salutation.Mister,
  userId: `user-for-new-demographics-${Timestamp}`
};

export class UserDemographics implements IUserDemographics {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  nickname: string;
  salutation: Salutation;
  userId: string;

  constructor({
    id = UserDemographicsStub.id,
    firstName = UserDemographicsStub.firstName,
    middleName = UserDemographicsStub.middleName,
    lastName = UserDemographicsStub.lastName,
    nickname = UserDemographicsStub.nickname,
    salutation = UserDemographicsStub.salutation,
    userId = UserDemographicsStub.userId
  }: Partial<IUserDemographics>) {
    this.id = id;
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.nickname = nickname;
    this.salutation = salutation;
    this.userId = userId;
  }
}

type UserDemographicsDTOOmitType = 'id';

export class UserDemographicsDTO
  implements Omit<IUserDemographics, UserDemographicsDTOOmitType>
{
  firstName: string;
  middleName: string;
  lastName: string;
  nickname: string;
  salutation: Salutation;
  userId: string;

  constructor({
    firstName = UserDemographicsStub.firstName,
    middleName = UserDemographicsStub.middleName,
    lastName = UserDemographicsStub.lastName,
    nickname = UserDemographicsStub.nickname,
    salutation = UserDemographicsStub.salutation,
    userId = UserDemographicsStub.userId
  }: Partial<IUserDemographics>) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.nickname = nickname;
    this.salutation = salutation;
    this.userId = userId;
  }
}
