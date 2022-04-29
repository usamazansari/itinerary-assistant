import { Identification, Tenure } from '../../../imports/models';
import { UsamaTenures, UsamaTenureIds, UsamaUserId } from '../..';

export const UsamaIdentificationIds = {
  Aadhar: 'user-1-id-1',
  Passport: 'user-1-id-2'
};

export const UsamaIdentifications: Identification[] = [
  new Identification({
    id: UsamaIdentificationIds.Aadhar,
    type: 'government',
    number: '871797443404',
    name: 'Aadhar Card',
    validity:
      UsamaTenures.find(tenure => tenure.id === UsamaTenureIds.Aadhar) ??
      new Tenure({}),
    personId: UsamaUserId
  }),
  new Identification({
    id: UsamaIdentificationIds.Passport,
    type: 'passport',
    number: 'M6968768',
    name: 'Passport',
    validity:
      UsamaTenures.find(tenure => tenure.id === UsamaTenureIds.Passport) ??
      new Tenure({}),
    personId: UsamaUserId
  })
];
