import { Identification } from '../imports/models';

export const IdentificationSeed: Identification[] = [
  {
    id: 'user-1-id-1',
    type: 'government',
    number: '871797443404',
    name: 'Aadhar Card',
    validity: 'user-1-id-1-validity',
    user: 'user-1'
  },
  {
    id: 'user-1-id-2',
    type: 'passport',
    number: 'M6968768',
    name: 'Passport',
    validity: 'user-1-id-2-validity',
    user: 'user-1'
  }
];
