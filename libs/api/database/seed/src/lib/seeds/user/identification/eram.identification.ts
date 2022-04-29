import { Identification, Tenure } from '../../../imports/models';
import { EramTenures, EramTenureIds, EramUserId } from '../..';

export const EramIdentificationIds = {
  Aadhar: 'user-2-id-1',
  Passport: 'user-2-id-2'
};

export const EramIdentifications: Identification[] = [
  new Identification({
    id: EramIdentificationIds.Aadhar,
    type: 'government',
    number: '',
    name: 'Aadhar Card',
    validity:
      EramTenures.find(tenure => tenure.id === EramTenureIds.Aadhar) ??
      new Tenure({}),
    personId: EramUserId
  }),
  new Identification({
    id: EramIdentificationIds.Passport,
    type: 'passport',
    number: '',
    name: 'Passport',
    validity:
      EramTenures.find(tenure => tenure.id === EramTenureIds.Passport) ??
      new Tenure({}),
    personId: EramUserId
  })
];
