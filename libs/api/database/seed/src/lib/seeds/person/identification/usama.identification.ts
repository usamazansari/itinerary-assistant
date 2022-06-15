import { Identification } from '../../../imports/models';

export const UsamaIdentificationIds = {
  Aadhar: 'person-1-id-1',
  Passport: 'person-1-id-2'
};

export const UsamaIdentifications: Identification[] = [
  new Identification({
    id: UsamaIdentificationIds.Aadhar,
    type: 'government',
    number: '871797443404',
    name: 'Aadhar Card'
  }),
  new Identification({
    id: UsamaIdentificationIds.Passport,
    type: 'passport',
    number: 'M6968768',
    name: 'Passport'
  })
];
