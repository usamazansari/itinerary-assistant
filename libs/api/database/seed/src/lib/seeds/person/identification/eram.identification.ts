import { Identification } from '../../../imports/models';

export const EramIdentificationIds = {
  Aadhar: 'person-2-id-1',
  Passport: 'person-2-id-2'
};

export const EramIdentifications: Identification[] = [
  new Identification({
    id: EramIdentificationIds.Aadhar,
    type: 'government',
    number: '',
    name: 'Aadhar Card'
  }),
  new Identification({
    id: EramIdentificationIds.Passport,
    type: 'passport',
    number: '',
    name: 'Passport'
  })
];
