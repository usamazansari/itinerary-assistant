import { Identification, Tenure } from '../imports/models';
import { TenureSeed } from '.';

export const IdentificationSeed: Identification[] = [
  {
    id: 'user-1-id-1',
    type: 'government',
    number: '871797443404',
    name: 'Aadhar Card',
    validity:
      TenureSeed.find(tenure => tenure.id === 'user-1-id-1-validity') ??
      new Tenure({}),
    userId: 'user-1'
  },
  {
    id: 'user-1-id-2',
    type: 'passport',
    number: 'M6968768',
    name: 'Passport',
    validity:
      TenureSeed.find(tenure => tenure.id === 'user-1-id-2-validity') ??
      new Tenure({}),
    userId: 'user-1'
  }
];
