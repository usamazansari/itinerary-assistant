import { Person } from '../../imports/models';
import {
  EramIdentifications,
  EramSocialConnections,
  EramDemographics
} from '.';

export const EramPersonId = 'person-2';

export const EramPerson: Person = new Person({
  id: 'person-2',
  fullName: 'Eram Shaikh',
  demographics: EramDemographics,
  dateOfBirth: new Date(1993, 3, 18),
  email: 'eramshaikh22@gmail.com',
  phone: '+91 82864 41784',
  website: 'https://eramshaikh.com',
  identifications: EramIdentifications,
  socialConnections: EramSocialConnections
});
