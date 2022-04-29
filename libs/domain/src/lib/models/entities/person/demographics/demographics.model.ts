import { Salutation } from '../../../../constants';

export interface IDemographics {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  nickname: string;
  salutation: Salutation;
  personId: string;
}

const Timestamp = new Date().toISOString().valueOf();

const DemographicsStub: IDemographics = {
  id: `new-demographics-${Timestamp}`,
  firstName: '',
  middleName: '',
  lastName: '',
  nickname: '',
  salutation: Salutation.MISTER,
  personId: `person-for-new-demographics-${Timestamp}`
};

export class Demographics implements IDemographics {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  nickname: string;
  salutation: Salutation;
  personId: string;

  constructor({
    id = DemographicsStub.id,
    firstName = DemographicsStub.firstName,
    middleName = DemographicsStub.middleName,
    lastName = DemographicsStub.lastName,
    nickname = DemographicsStub.nickname,
    salutation = DemographicsStub.salutation,
    personId = DemographicsStub.personId
  }: Partial<IDemographics>) {
    this.id = id;
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.nickname = nickname;
    this.salutation = salutation;
    this.personId = personId;
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
  salutation: Salutation;
  personId: string;

  constructor({
    firstName = DemographicsStub.firstName,
    middleName = DemographicsStub.middleName,
    lastName = DemographicsStub.lastName,
    nickname = DemographicsStub.nickname,
    salutation = DemographicsStub.salutation,
    personId = DemographicsStub.personId
  }: Partial<IDemographics>) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.nickname = nickname;
    this.salutation = salutation;
    this.personId = personId;
  }
}
