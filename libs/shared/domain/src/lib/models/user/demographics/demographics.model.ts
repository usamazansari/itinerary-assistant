// import { Salutation } from '../../../constants';

export interface IDemographics {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  nickname: string;
  // salutation: Salutation;
  userId: string;
}

const Timestamp = new Date().toISOString().valueOf();

const UserDemographicsStub: IDemographics = {
  id: `new-demographics-${Timestamp}`,
  firstName: '',
  middleName: '',
  lastName: '',
  nickname: '',
  // salutation: Salutation.Mister,
  userId: `user-for-new-demographics-${Timestamp}`
};

export class Demographics implements IDemographics {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  nickname: string;
  // salutation: Salutation;
  userId: string;

  constructor({
    id = UserDemographicsStub.id,
    firstName = UserDemographicsStub.firstName,
    middleName = UserDemographicsStub.middleName,
    lastName = UserDemographicsStub.lastName,
    nickname = UserDemographicsStub.nickname,
    // salutation = UserDemographicsStub.salutation,
    userId = UserDemographicsStub.userId
  }: Partial<IDemographics>) {
    this.id = id;
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.nickname = nickname;
    // this.salutation = salutation;
    this.userId = userId;
  }
}

type DemographicsDTOOmitType = 'id';

export class DemographicsDTO
  implements Omit<IDemographics, DemographicsDTOOmitType>
{
  firstName: string;
  middleName: string;
  lastName: string;
  nickname: string;
  // salutation: Salutation;
  userId: string;

  constructor({
    firstName = UserDemographicsStub.firstName,
    middleName = UserDemographicsStub.middleName,
    lastName = UserDemographicsStub.lastName,
    nickname = UserDemographicsStub.nickname,
    // salutation = UserDemographicsStub.salutation,
    userId = UserDemographicsStub.userId
  }: Partial<IDemographics>) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.nickname = nickname;
    // this.salutation = salutation;
    this.userId = userId;
  }
}
