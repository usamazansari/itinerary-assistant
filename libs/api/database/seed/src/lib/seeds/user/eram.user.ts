import { User } from '../../imports/models';
import {
  // EramAddress,
  // EramIdentifications,
  // EramPhotos,
  // EramSocialConnections,
  EramDemographics
} from '.';

export const EramUserId = 'user-2';

export const EramUser: User = new User({
  id: 'user-2',
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
