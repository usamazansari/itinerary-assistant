import { User } from '../../imports/models';
import {
  // EramAddress,
  // EramIdentifications,
  // EramPhotos,
  // EramSocialConnections,
  EramDemographics
} from '.';

export const EramPersonId = 'person-2';

export const EramPerson: User = new User({
  id: 'person-2',
  fullName: 'Eram Shaikh',
  demographics: EramDemographics,
  dateOfBirth: new Date(1993, 3, 18),
  email: 'eramshaikh22@gmail.com',
  phone: '+91 82864 41784',
  website: 'https://eramshaikh.com'
  // address: EramAddress,
  // identifications: EramIdentifications,
  // photos: EramPhotos,
  // socialConnections: EramSocialConnections
});
